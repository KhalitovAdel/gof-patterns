import {Stove} from "../stove";
import {Temperature} from "../enum/temperature.enum";

export abstract class StoveState {
    protected context!: Stove;

    public setContext(context: Stove) {
        this.context = context;
    }

    abstract bake(): void;

    abstract addFuel(): void;
}
