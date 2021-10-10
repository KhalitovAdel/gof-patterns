import {Subject} from "./interface/subject.interface";
import {IObserver} from "./interface/observer.interface";

export class RealSubject extends Subject<IObserver<RealSubject>> {
    public update(): void {
        //some action
        this.notify();
    }
}
