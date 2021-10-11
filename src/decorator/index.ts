import {BaconDecorator} from "./bacon.decorator";
import {CheeseDecorator} from "./cheeze.decorator";
import {MushroomDecorator} from "./mushroom.decorator";
import {PineappleDecorator} from "./pineapple.decorator";
import {Pizza} from "./pizza";

new BaconDecorator(new CheeseDecorator(new MushroomDecorator(new PineappleDecorator(new Pizza()))));
