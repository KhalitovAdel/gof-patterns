import {IAdapter} from "./interface/adapter.interface";
import {SwedenLibrary} from "./sweden-library";

export class Adapter implements IAdapter {

    constructor(protected readonly swedenApi: SwedenLibrary) {}

    create(): unknown {
        return this.swedenApi.skapa();
    }

    update(): unknown {
        return this.swedenApi.uppdatering();
    }

}
