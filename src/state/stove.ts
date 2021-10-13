import {StoveState} from "./interface/stove-state.interface";

export class Stove {
    constructor(private state: StoveState) {}

    public transitionTo(state: StoveState): void {
        console.log(`Context: Transition to ${(<any>state).constructor.name}.`);
        this.state = state;
        this.state.setContext(this);
    }

    makePizza() {
        try {
            this.state.bake();
        } catch (e) {
            this.state.addFuel();
            this.state.bake();
        }
    }
}
