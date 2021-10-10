import {IObserver} from "./interface/observer.interface";
import {StormSubject} from "./storm-subject";

export class FlyDepartmentSubscriber implements IObserver<StormSubject> {
    public handleChange(subject: StormSubject): void {
        console.log(subject.getNotifyLevel());
        subject.removeObserver(this);
    }
}
