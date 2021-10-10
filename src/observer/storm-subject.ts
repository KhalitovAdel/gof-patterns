import {Subject} from "./interface/subject.interface";
import {IObserver} from "./interface/observer.interface";
import {NotifyLevel} from "./enum/notify-level.enum";

export class StormSubject extends Subject<IObserver<StormSubject>> {
    private level: NotifyLevel = NotifyLevel.LOW;

    getNotifyLevel(): NotifyLevel {
        return this.level;
    }

    public update(newLevel: NotifyLevel): void {
        this.level = newLevel;
        //some action
        this.notify();
    }
}
