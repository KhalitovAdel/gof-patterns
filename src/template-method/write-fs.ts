import { promises } from 'fs';

export abstract class WriteFs {

    async writeFs() {
        const data = this.getData();
        await promises.writeFile('./kek.text', data);
    }

    abstract getData(): string;
}
