import {Pizza} from "./pizza";
import {IPizzaBuilder} from "./interface/pizza-builder.interface";

export class PizzaCookBuilder implements IPizzaBuilder<Pizza> {

    protected pizza!: Pizza;

    reset() {
        this.pizza = new Pizza();
    }

    setCheese(cheese: number) {
        this.pizza.update({cheese});
    }

    setBacon(bacon: number) {
        this.pizza.update({bacon});
    }

    setPineapple(pineapple: number) {
        this.pizza.update({pineapple});
    }

    setMushrooms(mushrooms: number) {
        this.pizza.update({mushrooms});
    }

    setSeafood(seafood: number) {
        this.pizza.update({seafood});
    }

    getResult(): Pizza {
        return this.pizza;
    }
}
