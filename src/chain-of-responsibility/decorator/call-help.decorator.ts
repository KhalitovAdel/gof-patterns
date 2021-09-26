import {HelpEnum} from "../enum/help.enum";
import {IClass} from "../../interface/class";

type CallStorage = {
    target: InstanceType<IClass>;
    methodName: string;
    type: HelpEnum;
}

export const callMap = new Map<string, CallStorage>();

export const CallHelp = (type: HelpEnum) => {
    return function (target: CallStorage['target'], methodName: string, descriptor: TypedPropertyDescriptor<CallStorage['target']>) {
        const payload: CallStorage = {
            target,
            methodName,
            type,
        };
        callMap.set((target as any).constructor.name.concat(methodName), payload);
        return descriptor;
    }
}
