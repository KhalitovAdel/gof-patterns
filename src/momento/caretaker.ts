export class Caretaker<T> {
    private store: T[] = [];

    setNewMomet(moment: T): void {
        this.store.push(moment);
    }

    getMoment(moment: T): undefined | T {
        return this.store.find(el => el === moment);
    }
}
