import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { Add } from "./definitions/Add";
import { AddResponse } from "./definitions/AddResponse";
import { Subtract } from "./definitions/Subtract";
import { SubtractResponse } from "./definitions/SubtractResponse";
import { Multiply } from "./definitions/Multiply";
import { MultiplyResponse } from "./definitions/MultiplyResponse";
import { Divide } from "./definitions/Divide";
import { DivideResponse } from "./definitions/DivideResponse";
import { Calculator } from "./services/Calculator";

export interface CalculatorAsmxClient extends SoapClient {
    Calculator: Calculator;
    AddAsync(add: Add): Promise<[result: AddResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    SubtractAsync(subtract: Subtract): Promise<[result: SubtractResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    MultiplyAsync(multiply: Multiply): Promise<[result: MultiplyResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    DivideAsync(divide: Divide): Promise<[result: DivideResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    AddAsync(add: Add): Promise<[result: AddResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    SubtractAsync(subtract: Subtract): Promise<[result: SubtractResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    MultiplyAsync(multiply: Multiply): Promise<[result: MultiplyResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    DivideAsync(divide: Divide): Promise<[result: DivideResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create CalculatorAsmxClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<CalculatorAsmxClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
