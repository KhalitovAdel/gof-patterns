import {IPizza} from "./interface/pizza";

export class Pizza implements IPizza {
    getPizza(): string[] {
        return ['milk', 'eggs', 'flour'];
    }
}
