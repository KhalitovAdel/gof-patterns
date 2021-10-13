import {StoveState} from "./interface/stove-state.interface";
import {SoftStoveState} from "./soft-stove.state";
import {Temperature} from "./enum/temperature.enum";

export class ColdStoveState extends StoveState {
    public bake() {
        throw new Error();
    }

    public addFuel() {
        this.context.transitionTo(new SoftStoveState());
    }
}
