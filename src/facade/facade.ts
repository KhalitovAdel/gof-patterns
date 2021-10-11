import {CalculatorAsmxClient} from "./generated/calculatorasmx";

export class Facade {
    constructor(protected readonly client: CalculatorAsmxClient) {}

    public async sum(a: number, b: number) {
        return this.client.AddAsync({intA: String(a), intB: String(b)}).then(data => parseFloat(data[0].AddResult || '0'));
    }
}
