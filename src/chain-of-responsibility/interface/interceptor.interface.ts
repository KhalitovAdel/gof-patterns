import {IClass} from "../../interface/class";

export interface IInterceptor {
    handle(target: InstanceType<IClass>, methodName: string, handler: Promise<unknown>): void
}
