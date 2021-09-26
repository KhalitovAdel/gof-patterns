import {IInterceptor} from "../interface/interceptor.interface";
import {IClass} from "../../interface/class";
import {callMap} from "../decorator/call-help.decorator";

export class FireDepartmentInterceptor implements IInterceptor {
    handle(target: InstanceType<IClass>, methodName: string, handler: Promise<unknown>): void {
        if (callMap.has(target.constructor.name.concat(methodName))) {
            handler.then(data => data); //here we can add call for FireDepartment
        }
    }
}
