import {StoveState} from "./interface/stove-state.interface";
import {HotStoveState} from "./hot-stove.state";

export class SoftStoveState extends StoveState {
    public bake() {
        //some action
    }

    public addFuel() {
        this.context.transitionTo(new HotStoveState());
    }
}
