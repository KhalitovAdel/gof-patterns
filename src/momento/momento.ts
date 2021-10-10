export class Momento {
    private state: Buffer;
    constructor(state: string) {
        this.state = Buffer.from(state);
    }

    getState() {
        return this.state.toString();
    }
}
