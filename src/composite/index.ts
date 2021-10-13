import {Box} from "./box";
import {Good} from "./good";


const instance = new Box([
    new Good(10),
    new Box([
        new Good(14),
        new Good(4)
    ])
]);
