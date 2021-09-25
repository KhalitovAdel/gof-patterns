import {IPizza} from "./interface/pizza";

export class CheeseDecorator implements IPizza {
    constructor(protected readonly pizzaMaker: IPizza) {}

    getPizza(): string[] {
        const result = this.pizzaMaker.getPizza();

        return [...result, 'cheese']
    }
}
