interface Alarm {
    alarmContent: string;
    alarmDes: string;
    alarmLevel: number;
    alarmStatus: number;
    appmodelId: number;
    happendModel: string;
    happendTime: number; // timestamp
    id: number;
    relatedId: string;
    subAlarm: Alarm[];
    subId: string;
    subSize: number;
    type: number;
    alarmSource: string;
    times: number;
    firstTime: number; // timestamp
    lastTime: number; // timestamp
    duration: number;
}

interface AlarmNotification {

}