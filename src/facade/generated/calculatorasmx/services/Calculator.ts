import { CalculatorSoap } from "../ports/CalculatorSoap";
import { CalculatorSoap12 } from "../ports/CalculatorSoap12";

export interface Calculator {
    readonly CalculatorSoap: CalculatorSoap;
    readonly CalculatorSoap12: CalculatorSoap12;
}
