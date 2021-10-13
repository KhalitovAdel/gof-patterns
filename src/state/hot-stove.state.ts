import {StoveState} from "./interface/stove-state.interface";
import {SoftStoveState} from "./soft-stove.state";

export class HotStoveState extends StoveState {

    constructor() {
        super();
        //After 15 second make stove temperature to soft.
        setTimeout(() => this.context.transitionTo(new SoftStoveState()), 15000);
    }

    public bake() {
        throw new Error('Oh no it"s very hot');
    }

    public addFuel() {
        throw new Error('Bad solution');
    }
}
