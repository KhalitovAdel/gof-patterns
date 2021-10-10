import {IObserver} from "./observer.interface";

export abstract class Subject<T = IObserver<unknown>> {
    protected observers: IObserver<this>[] = [];

    public addObserver(obs: IObserver<this>) {
        this.observers.push(obs);
    }

    public removeObserver(obs: IObserver<this>) {
        const index = this.observers.findIndex(el => el === obs);
        if (index === -1) throw new Error('Observer not found');
        this.observers.splice(index, 1);
    }

    protected notify() {
        this.observers.forEach(obs => obs.handleChange(this));
    }
}
