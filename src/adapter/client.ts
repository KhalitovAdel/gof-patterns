import {IAdapter} from "./interface/adapter.interface";

export class Client {
    constructor(protected readonly api: IAdapter) {}

    // ... do something with api call this.api.create() or this.api.update();
}
