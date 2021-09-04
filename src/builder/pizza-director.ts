import {IPizzaBuilder} from "./interface/pizza-builder.interface";
import {Pizza} from "./pizza";
import {PizzaCookBuilder} from "./pizza-cook.builder";
import {PizzaPriceBuilder} from "./pizza-price.builder";

export class PizzaDirector {

    createPeperoni<T>(builder: IPizzaBuilder<T>) {
        builder.reset();

        builder.setCheese(0.5);
        builder.setBacon(0.1);

        return builder.getResult();
    }

    createCustom<T>(builder: IPizzaBuilder<T>) {
        builder.reset();

        builder.setCheese(0.5);
        builder.setMushrooms(0.6);
        builder.setBacon(0.1);

        return builder.getResult();
    }

}


const director = new PizzaDirector();

const peperoni = director.createPeperoni<Pizza>(new PizzaCookBuilder());
const peperoniPrice = director.createPeperoni<number>(new PizzaPriceBuilder());


const customPizza = director.createCustom<Pizza>(new PizzaCookBuilder());
const customPizzaPrice = director.createCustom<number>(new PizzaPriceBuilder());
