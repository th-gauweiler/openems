package io.openems.edge.ess.generic.symmetric;

import java.util.concurrent.atomic.AtomicReference;

import org.osgi.service.cm.ConfigurationAdmin;
import org.osgi.service.component.ComponentContext;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.ConfigurationPolicy;
import org.osgi.service.component.annotations.Deactivate;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.component.annotations.ReferenceCardinality;
import org.osgi.service.component.annotations.ReferencePolicy;
import org.osgi.service.component.annotations.ReferencePolicyOption;
import org.osgi.service.event.Event;
import org.osgi.service.event.EventConstants;
import org.osgi.service.event.EventHandler;
import org.osgi.service.metatype.annotations.Designate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import io.openems.common.exceptions.OpenemsError.OpenemsNamedException;
import io.openems.edge.battery.api.Battery;
import io.openems.edge.batteryinverter.api.ManagedSymmetricBatteryInverter;
import io.openems.edge.common.component.ComponentManager;
import io.openems.edge.common.component.OpenemsComponent;
import io.openems.edge.common.event.EdgeEventConstants;
import io.openems.edge.common.modbusslave.ModbusSlave;
import io.openems.edge.common.startstop.StartStop;
import io.openems.edge.common.startstop.StartStoppable;
import io.openems.edge.ess.api.HybridEss;
import io.openems.edge.ess.api.ManagedSymmetricEss;
import io.openems.edge.ess.api.SymmetricEss;
import io.openems.edge.ess.generic.common.AbstractGenericManagedEss;
import io.openems.edge.ess.generic.common.GenericManagedEss;
import io.openems.edge.ess.generic.symmetric.statemachine.Context;
import io.openems.edge.ess.generic.symmetric.statemachine.StateMachine;
import io.openems.edge.ess.generic.symmetric.statemachine.StateMachine.State;
import io.openems.edge.ess.power.api.Power;

@Designate(ocd = Config.class, factory = true)
@Component(//
		name = "Ess.Generic.ManagedSymmetric", //
		immediate = true, //
		configurationPolicy = ConfigurationPolicy.REQUIRE, //
		property = { //
				EventConstants.EVENT_TOPIC + "=" + EdgeEventConstants.TOPIC_CYCLE_AFTER_PROCESS_IMAGE //
		} //
)
public class GenericManagedSymmetricEssImpl
		extends AbstractGenericManagedEss<GenericManagedSymmetricEss, Battery, ManagedSymmetricBatteryInverter>
		implements GenericManagedSymmetricEss, GenericManagedEss, ManagedSymmetricEss, HybridEss, SymmetricEss,
		OpenemsComponent, EventHandler, StartStoppable, ModbusSlave {

	private final Logger log = LoggerFactory.getLogger(AbstractGenericManagedEss.class);

	@Reference
	private Power power;

	@Reference
	private ConfigurationAdmin cm;

	@Reference
	private ComponentManager componentManager;

	@Reference(policy = ReferencePolicy.STATIC, policyOption = ReferencePolicyOption.GREEDY, cardinality = ReferenceCardinality.MANDATORY)
	private ManagedSymmetricBatteryInverter batteryInverter;

	@Reference(policy = ReferencePolicy.STATIC, policyOption = ReferencePolicyOption.GREEDY, cardinality = ReferenceCardinality.MANDATORY)
	private Battery battery;

	/**
	 * Manages the {@link State}s of the StateMachine.
	 */
	private final StateMachine stateMachine = new StateMachine(State.UNDEFINED);

	private final ChannelManager channelManager = new ChannelManager(this);

	private Config config;

	public GenericManagedSymmetricEssImpl() {
		super(//
				OpenemsComponent.ChannelId.values(), //
				StartStoppable.ChannelId.values(), //
				SymmetricEss.ChannelId.values(), //
				ManagedSymmetricEss.ChannelId.values(), //
				GenericManagedEss.ChannelId.values(), //
				HybridEss.ChannelId.values(), //
				GenericManagedSymmetricEss.ChannelId.values() //
		);
	}

	@Activate
	void activate(ComponentContext context, Config config) {
		this.config = config;
		super.activate(context, config.id(), config.alias(), config.enabled(), this.cm, config.batteryInverter_id(),
				config.battery_id());
	}

	@Deactivate
	protected void deactivate() {
		super.deactivate();
	}

	@Override
	protected void handleStateMachine() {
		// Store the current State
		this.channel(GenericManagedSymmetricEss.ChannelId.STATE_MACHINE)
				.setNextValue(this.stateMachine.getCurrentState());

		// Initialize 'Start-Stop' Channel
		this._setStartStop(StartStop.UNDEFINED);

		// Prepare Context
		Context context = new Context(this, this.getBattery(), this.getBatteryInverter());

		// Call the StateMachine
		try {
			this.stateMachine.run(context);

			this.channel(GenericManagedSymmetricEss.ChannelId.RUN_FAILED).setNextValue(false);

		} catch (OpenemsNamedException e) {
			this.channel(GenericManagedSymmetricEss.ChannelId.RUN_FAILED).setNextValue(true);
			this.logError(this.log, "StateMachine failed: " + e.getMessage());
		}
	}

	private AtomicReference<StartStop> startStopTarget = new AtomicReference<StartStop>(StartStop.UNDEFINED);

	@Override
	public StartStop getStartStopTarget() {
		switch (this.config.startStop()) {
		case AUTO:
			// read StartStop-Channel
			return this.startStopTarget.get();

		case START:
			// force START
			return StartStop.START;

		case STOP:
			// force STOP
			return StartStop.STOP;
		}

		assert false;
		return StartStop.UNDEFINED; // can never happen
	}

	@Override
	public void setStartStop(StartStop value) {
		if (this.startStopTarget.getAndSet(value) != value) {
			// Set only if value changed
			this.stateMachine.forceNextState(State.UNDEFINED);
		}
	}

	@Override
	public void handleEvent(Event event) {
		super.handleEvent(event);
	}

	@Override
	public String debugLog() {
		return super.genericDebugLog() //
				.append("|")
				.append(this.channel(GenericManagedSymmetricEss.ChannelId.STATE_MACHINE).value().asOptionString()) //
				.toString();
	}

	@Override
	public Power getPower() {
		return this.power;
	}

	@Override
	protected ChannelManager getChannelManager() {
		return this.channelManager;
	}

	@Override
	protected Battery getBattery() {
		return this.battery;
	}

	@Override
	protected ManagedSymmetricBatteryInverter getBatteryInverter() {
		return this.batteryInverter;
	}

	@Override
	protected ComponentManager getComponentManager() {
		return this.componentManager;
	}

}
