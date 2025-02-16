export const TRANSLATION = {
    General: {
        active: 'Aktiv',
        actualPower: 'E-Auto Beladung',
        apply: 'Übernehmen',
        autarchy: 'Autarkie',
        automatic: 'Automatisch',
        cancel: 'abbrechen',
        capacity: 'Kapazität',
        changeAccepted: 'Änderung übernommen',
        changeFailed: 'Änderung fehlgeschlagen',
        chargeDischarge: 'Be-/Entladung',
        chargePower: 'Beladung',
        componentCount: 'Anzahl Komponenten',
        componentInactive: 'Komponente ist inaktiv!',
        connectionLost: 'Verbindung unterbrochen. Versuche die Verbindung wiederherzustellen.',
        consumption: 'Verbrauch',
        cumulative: 'Kumulierte Werte',
        currentName: 'Aktueller Name',
        currentValue: 'Aktueller Wert',
        dateFormat: 'dd.MM.yyyy', // z.B. Englisch: yyyy-MM-dd (dd = Tag, MM = Monat, yyyy = Jahr)
        dateFormatShort: 'dd.MM',
        digitalInputs: 'Digitaleingänge',
        directConsumption: 'Direktverbrauch',
        dischargePower: 'Entladung',
        fault: 'Fehler',
        grid: 'Netz',
        gridBuy: 'Netzbezug',
        gridBuyAdvanced: 'Bezug',
        gridSell: 'Netzeinspeisung',
        gridSellAdvanced: 'Einspeisung',
        history: 'Historie',
        inactive: 'Inaktiv',
        info: 'Info',
        inputNotValid: 'Eingabe ungültig',
        insufficientRights: 'Unzureichende Rechte',
        live: 'Live',
        load: 'Last',
        manually: 'Manuell',
        measuredValue: 'Gemessener Wert',
        mode: 'Modus',
        more: 'Mehr...',
        noValue: 'Kein Wert',
        off: 'Aus',
        offGrid: 'Keine Netzverbindung!',
        ok: 'ok',
        on: 'An',
        otherConsumption: 'Sonstiger',
        percentage: 'Prozent',
        periodFromTo: '{{value1}} - {{value2}}', // value1 = start date, value2 = end date
        phase: 'Phase',
        phases: 'Phasen',
        power: 'Leistung',
        production: 'Erzeugung',
        rename: 'Umbenennen',
        reportValue: 'Fehlerhafte Daten melden',
        reset: 'Zurücksetzen',
        search: 'Suchen',
        selfConsumption: 'Eigenverbrauch',
        soc: 'Ladezustand',
        state: 'Zustand',
        storageSystem: 'Speichersystem',
        systemState: 'Systemzustand',
        total: 'Gesamt',
        totalState: 'Gesamtstatus',
        warning: 'Warnung',
        Week: {
            monday: 'Montag',
            tuesday: 'Dienstag',
            wednesday: 'Mittwoch',
            thursday: 'Donnerstag',
            friday: 'Freitag',
            saturday: 'Samstag',
            sunday: 'Sonntag',
        },
        Month: {
            january: 'Januar',
            february: 'Februar',
            march: 'März',
            april: 'April',
            may: 'Mai',
            june: 'Juni',
            july: 'Juli',
            august: 'August',
            september: 'September',
            october: 'Oktober',
            november: 'November',
            december: 'Dezember',
        },
    },
    Menu: {
        aboutUI: 'Über OpenEMS UI',
        edgeSettings: 'OpenEMS Edge Einstellungen',
        generalSettings: 'Allgemeine Einstellungen',
        index: 'Übersicht',
        logout: 'Abmelden',
        menu: 'Menü',
        overview: 'OpenEMS Edge Übersicht',
        settings: 'Einstellungen',
        user: 'Benutzer',
    },
    Index: {
        allConnected: 'Alle Verbindungen hergestellt.',
        connectionInProgress: 'Verbindung wird aufgebaut...',
        connectionFailed: 'Verbindung zu {{value}} getrennt.', // value = name of websocket
        connectionSuccessful: 'Verbindung zu {{value}} hergestellt.', // value = name of websocket
        isOffline: 'OpenEMS ist offline!',
        toEnergymonitor: 'Zum Energiemonitor...',
    },
    Login: {
        title: "Login",
        preamble: "Bitte geben Sie Ihr Passwort ein oder bestätigen Sie die Voreingabe um sich als Gast anzumelden.",
        passwordLabel: "Passwort",
        passwordPlaceholder: "Passwort",
        authenticationFailed: "Authentifizierung fehlgeschlagen",
    },
    Edge: {
        Index: {
            Energymonitor: {
                activePower: 'Ausgabeleistung',
                consumptionWarning: 'Verbrauch & unbekannte Erzeuger',
                gridMeter: 'Netzzähler',
                productionMeter: 'Erzeugungszähler',
                reactivePower: 'Blindleistung',
                storage: 'Speicher',
                storageCharge: 'Speicher-Beladung',
                storageDischarge: 'Speicher-Entladung',
                title: 'Energiemonitor',
            },
            Widgets: {
                autarchyInfo: 'Die Autarkie gibt an zu wie viel Prozent die aktuell genutzte Leistung durch Erzeugung und Speicherentladung gedeckt wird.',
                phasesInfo: 'Die Summe der einzelnen Phasen kann aus technischen Gründen geringfügig von der Gesamtsumme abweichen.',
                selfconsumptionInfo: 'Der Eigenverbrauch gibt an zu wie viel Prozent die aktuell erzeugte Leistung durch direkten Verbrauch und durch Speicherbeladung selbst genutzt wird.',
                twoWayInfoGrid: 'Negative Werte entsprechen Netzeinspeisung, Positive Werte entsprechen Netzbezug',
                twoWayInfoStorage: 'Negative Werte entsprechen Speicher Beladung, Positive Werte entsprechen Speicher Entladung',
                Channeltreshold: {
                    output: 'Ausgang'
                },
                Singlethreshold: {
                    above: 'Über',
                    behaviour: 'Verhalten',
                    below: 'Unter',
                    currentValue: 'Aktueller Wert',
                    dependendOn: 'Abhängig von',
                    minSwitchingTime: 'Mindestumschaltzeit',
                    moreThanMaxPower: 'Wert darf nicht niedriger als Maximalleistung des angesteuerten Geräts sein',
                    other: 'Sonstige',
                    relationError: 'Schwellenwert muss größer als die geschaltete Last sein',
                    switchedLoadPower: 'Geschaltete Last',
                    switchOffAbove: 'Ausschalten über',
                    switchOffBelow: 'Ausschalten unter',
                    switchOnAbove: 'Einschalten über',
                    switchOnBelow: 'Einschalten unter',
                    threshold: 'Schwellenwert',
                },
                DelayedSellToGrid: {
                    sellToGridPowerLimit: 'Beladung über',
                    continuousSellToGridPower: 'Entladung unter',
                    relationError: 'Beladungsgrenze muss größer der Entladungsgrenze sein',
                },
                Peakshaving: {
                    asymmetricInfo: 'Eingetragene Leistungswerte beziehen sich auf einzelne Phasen. Es wird auf die jeweils am stärksten belastete Phase ausgeregelt.',
                    endDate: 'End Datum',
                    endTime: 'Endzeit',
                    mostStressedPhase: 'Meist belastete Phase',
                    peakshaving: 'Lastspitzenkappung',
                    peakshavingPower: 'Entladung über',
                    recharge: 'Beladeleistung',
                    rechargePower: 'Beladung unter',
                    relationError: 'Entladungsgrenze muss größer oder gleich der Beladungsgrenze sein',
                    startDate: 'Start Datum',
                    startTime: 'Startzeit',
                    startTimeCharge: 'Start-Zeit Beladung',
                },
                CHP: {
                    highThreshold: 'Oberer Schwellenwert',
                    lowThreshold: 'Unterer Schwellenwert',
                },
                EVCS: {
                    activateCharging: 'Aktivieren der Ladesäule',
                    amountOfChargingStations: 'Anzahl der Ladestationen',
                    cable: 'Kabel',
                    cableNotConnected: 'Kabel ist nicht angeschlossen',
                    carFull: 'Auto ist voll',
                    chargeLimitReached: 'Ladelimit erreicht',
                    chargeTarget: 'Ladevorgabe',
                    charging: 'Beladung läuft',
                    chargingLimit: 'Lade-Begrenzung',
                    chargingPower: 'Ladeleistung',
                    chargingStation: 'Ladestation',
                    chargingStationCluster: 'Ladestation Cluster',
                    chargingStationDeactivated: 'Ladestation deaktiviert',
                    chargingStationPluggedIn: 'Ladestation eingesteckt',
                    chargingStationPluggedInEV: 'Ladestation + E-Auto eingesteckt',
                    chargingStationPluggedInEVLocked: 'Ladestation + E-Auto eingesteckt + gesperrt',
                    chargingStationPluggedInLocked: 'Ladestation eingesteckt + gesperrt',
                    clusterConfigError: 'Bei der Konfiguration des Evcs-Clusters ist ein Fehler aufgetreten',
                    currentCharge: 'Aktuelle Beladung',
                    energieSinceBeginning: 'Energie seit Ladebeginn',
                    energyLimit: 'Energielimit',
                    enforceCharging: 'Erzwinge Beladung',
                    error: 'Fehler',
                    maxEnergyRestriction: 'Maximale Energie pro Ladevorgang begrenzen',
                    notAuthorized: 'Nicht authorisiert',
                    notCharging: 'Keine Beladung',
                    notReadyForCharging: 'Nicht bereit zur Beladung',
                    overviewChargingStations: 'Übersicht Ladestationen',
                    prioritization: 'Priorisierung',
                    readyForCharging: 'Bereit zur Beladung',
                    starting: 'Startet',
                    status: 'Status',
                    totalCharge: 'Gesamte Beladung',
                    totalChargingPower: 'Gesamte Lade-Leistung',
                    unknown: 'Unbekannt',
                    unplugged: 'Ausgesteckt',
                    Administration: {
                        carAdministration: 'Autoverwaltung',
                        customCarInfo: 'Sollte das der Fall sein, kann ihr Auto nur ab einer bestimmten Leistung effizient beladen werden. Durch diesen Button wird das in Ihre Konfigurationsmöglichkeiten- sowie die in die automatische Beladung einberechnet.',
                        renaultZoe: 'Wird an dieser Ladesäule hauptsächlich ein Renault Zoe beladen?'
                    },
                    NoConnection: {
                        description: 'Es konnte keine Verbindung zur Ladestation aufgebaut werden.',
                        help1_1: 'Die IP der Ladesäule erscheint beim erneuten einschalten',
                        help1: 'Prüfen sie ob die Ladestation eingeschaltet und über das Netz erreichbar ist',
                    },
                    OptimizedChargeMode: {
                        info: 'In diesem Modus wird die Beladung des Autos an die aktuelle Produktion und den aktuellen Verbrauch angepasst.',
                        minChargePower: 'Minimale Ladestärke',
                        minCharging: 'Minimale Beladung garantieren',
                        minInfo: 'Falls verhindert werden soll, dass das Auto in der Nacht gar nicht lädt, kann eine minimale Aufladung festgelegt werden.',
                        name: 'Optimierte Beladung',
                        shortName: 'Automatisch',
                        ChargingPriority: {
                            car: 'E-Auto',
                            info: 'Je nach Priorisierung wird die ausgewählte Komponente zuerst beladen',
                            storage: 'Speicher',
                        }
                    },
                    ForceChargeMode: {
                        info: 'In diesem Modus wird die Beladung des Autos erzwungen, d.h. es wird immer garantiert, dass das Auto geladen wird, auch wenn die Ladesäule auf Netzstrom zugreifen muss.',
                        maxCharging: 'Maximale Ladeleistung',
                        maxChargingDetails: 'Falls das Auto den eingegebenen Maximalwert nicht laden kann, wird die Leistung automatisch begrenzt.',
                        name: 'Erzwungene Beladung',
                        shortName: 'Manuell',
                    }
                },
                Heatingelement: {
                    activeLevel: 'Aktives Level',
                    endtime: 'Endzeit',
                    energy: 'Energie',
                    heatingelement: 'Heizelement',
                    minimalEnergyAmount: 'Minimale Energiemenge',
                    minimumRunTime: 'Mindestlaufzeit',
                    priority: 'Priorität',
                    time: 'Zeit',
                    timeCountdown: 'Spätester Start',
                },
                HeatPump: {
                    aboveSoc: 'und über Ladezustand von',
                    belowSoc: 'und unter Ladezustand von',
                    gridBuy: 'Ab Netzbezug von',
                    gridSell: 'Ab Überschusseinspeisung von',
                    lock: 'Sperre',
                    moreThanMaxPower: 'Wert darf nicht niedriger als Maximalleistung der Wärmepumpe sein',
                    normalOperation: 'Normalbetrieb',
                    normalOperationShort: 'Normal',
                    relationError: 'Einschaltbefehl Überschusswert muss größer als Einschaltempfehlungswert sein',
                    switchOnCom: 'Einschaltbefehl',
                    switchOnComShort: 'Befehl',
                    switchOnRec: 'Einschaltempfehlung',
                    switchOnRecShort: 'Empfehlung',
                    undefined: 'Nicht definiert',
                },
                Receipt: {
                    component: 'Komponente',
                    createReceipt: 'Rechnung erstellen',
                    date: 'Datum',
                    energy: 'Energie',
                    error: 'Bitte validen Ladevorgang wählen',
                    evcs: 'E-Auto Ladung',
                    evcsInfo: 'Datum und Uhrzeit des letzten Ladevorgangs wählen!',
                    flatWidgetEvcs: 'Jetzt Strom-Quittung des letzten E-Auto Ladevorgangs erstellen',
                    from: 'von',
                    noComponent: 'Keine Komponente gewählt',
                    oclock: 'Uhr',
                    pickComponent: 'Komponenten-Wahl',
                    pickDate: 'Datum-Wahl',
                    pickTime: 'Uhrzeit-Wahl',
                    receipt: 'Strom-Quittung',
                    time: 'Uhrzeit',
                    timeframe: 'Zeitraum',
                    until: 'bis',
                }
            }
        },
        History: {
            activeDuration: 'Einschaltdauer',
            beginDate: 'Startdatum wählen',
            day: 'Tag',
            endDate: 'Enddatum wählen',
            export: 'Download als EXCEL-Datei',
            go: 'Los!',
            lastMonth: 'Letzter Monat',
            lastWeek: 'Letzte Woche',
            lastYear: 'Letztes Jahr',
            month: 'Monat',
            noData: 'keine Daten verfügbar',
            otherPeriod: 'Anderer Zeitraum',
            period: 'Zeitraum',
            selectedDay: '{{value}}',
            selectedPeriod: 'Gewählter Zeitraum: ',
            today: 'Heute',
            week: 'Woche',
            year: 'Jahr',
            yesterday: 'Gestern',
            sun: 'So',
            mon: 'Mo',
            tue: 'Di',
            wed: 'Mi',
            thu: 'Do',
            fri: 'Fr',
            sat: 'Sa',
            jan: 'Jan',
            feb: 'Feb',
            mar: 'Mär',
            apr: 'Apr',
            may: 'Mai',
            jun: 'Jun',
            jul: 'Jul',
            aug: 'Aug',
            sep: 'Sep',
            oct: 'Okt',
            nov: 'Nov',
            dec: 'Dez',
        },
        Config: {
            Index: {
                addComponents: 'Komponenten installieren',
                adjustComponents: 'Komponenten konfigurieren',
                bridge: 'Verbindungen und Geräte',
                controller: 'Anwendungen',
                dataStorage: 'Datenspeicher',
                executeSimulator: 'Simulationen ausführen',
                liveLog: 'Live Systemprotokoll',
                log: 'Log',
                manualControl: 'Manuelle Steuerung',
                renameComponents: 'Komponenten umbenennen',
                scheduler: 'Anwendungsplaner',
                simulator: 'Simulator',
                systemExecute: 'System-Befehl ausführen',
                systemProfile: 'Anlagenprofil',
            },
            More: {
                manualCommand: 'Manueller Befehl',
                manualpqPowerSpecification: 'Leistungsvorgabe',
                manualpqReset: 'Zurücksetzen',
                manualpqSubmit: 'Übernehmen',
                refuInverter: 'REFU Wechselrichter',
                refuStart: 'Starten',
                refuStartStop: 'Wechselrichter starten/stoppen',
                refuStop: 'Stoppen',
                send: 'Senden',
            },
            Scheduler: {
                always: 'Immer',
                class: 'Klasse:',
                contact: 'Das sollte nicht passieren. Bitte kontaktieren Sie <a href=\'mailto:{{value}}\'>{{value}}</a>.',
                newScheduler: 'Neuer Scheduler...',
                notImplemented: 'Formular nicht implementiert: ',
            },
            Log: {
                automaticUpdating: 'Automatische Aktualisierung',
                level: 'Level',
                message: 'Nachricht',
                source: 'Quelle',
                timestamp: 'Zeitpunkt',
            },
            Controller: {
                app: 'Anwendung:',
                internallyID: 'Interne ID:',
                priority: 'Priorität:',
            },
            Bridge: {
                newConnection: 'Neue Verbindung...',
                newDevice: 'Neues Gerät...',
            }
        }
    },
    About: {
        build: 'Dieser Build',
        contact: 'Für Rückfragen und Anregungen zum System, wenden Sie sich bitte an unser Team unter <a href=\'mailto:{{value}}\'>{{value}}</a>.',
        currentDevelopments: 'Aktuelle Entwicklungen',
        developed: 'Diese Benutzeroberfläche wird als Open-Source-Software entwickelt.',
        language: 'Sprache wählen:',
        openEMS: 'Mehr zu OpenEMS',
        ui: 'Benutzeroberfläche für OpenEMS',
    },
    Notifications: {
        authenticationFailed: 'Keine Verbindung: Authentifizierung fehlgeschlagen.',
        closed: 'Verbindung beendet.',
        failed: 'Verbindungsaufbau fehlgeschlagen.',
        loggedIn: 'Angemeldet.',
        loggedInAs: 'Angemeldet als Benutzer \'{{value}}\'.', // value = username
    },
    Role: {
        guest: 'Gast',
        owner: 'Eigentümer',
        installer: 'Installateur',
        admin: 'Administrator',
    }
}
