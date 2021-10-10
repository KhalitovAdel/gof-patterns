import {Caretaker} from "./caretaker";
import {Momento} from "./momento";

export class Originator {
    private state = '';

    constructor(private originator: Caretaker<Momento>) {}

    createMoment(): Momento {
        const moment = new Momento(this.state);
        this.originator.setNewMomet(moment);
        return moment;
    }

    restore(moment: Momento) {
        const restoredMoment = this.originator.getMoment(moment);
        if (!restoredMoment) throw new Error('Moment not found');

        this.state = restoredMoment.getState();
    }

}
