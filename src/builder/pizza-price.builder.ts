import {IPizzaBuilder} from "./interface/pizza-builder.interface";

export class PizzaPriceBuilder implements IPizzaBuilder<number> {

    protected price: number = 0;

    reset() {
        this.price = 0;
    }

    setCheese(amount: number) {
        this.price += 60 * amount;
    }

    setBacon(amount: number) {
        this.price += 120 * amount;
    }

    setPineapple(amount: number) {
        this.price += 80 * amount;
    }

    setMushrooms(amount: number) {
        this.price += 100 * amount;
    }

    setSeafood(amount: number) {
        this.price += 300 * amount;
    }

    getResult(): number {
        return this.price;
    }
}
