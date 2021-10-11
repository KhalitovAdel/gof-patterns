import { Add } from "../definitions/Add";
import { AddResponse } from "../definitions/AddResponse";
import { Subtract } from "../definitions/Subtract";
import { SubtractResponse } from "../definitions/SubtractResponse";
import { Multiply } from "../definitions/Multiply";
import { MultiplyResponse } from "../definitions/MultiplyResponse";
import { Divide } from "../definitions/Divide";
import { DivideResponse } from "../definitions/DivideResponse";

export interface CalculatorSoap {
    Add(add: Add, callback: (err: any, result: AddResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    Subtract(subtract: Subtract, callback: (err: any, result: SubtractResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    Multiply(multiply: Multiply, callback: (err: any, result: MultiplyResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    Divide(divide: Divide, callback: (err: any, result: DivideResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
