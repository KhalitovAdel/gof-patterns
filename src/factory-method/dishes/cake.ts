import {IStoveCreateDish} from "../stove/interface/stove.interface";

export class Cake implements IStoveCreateDish {
    create(): unknown {
        return undefined;
    }
}
