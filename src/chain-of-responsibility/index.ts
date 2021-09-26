import {Call911} from "./calls";
import {IClass} from "../interface/class";
import {InterceptorManager} from "./interceptor-manager";
import {AmbulanceInterceptor} from "./interceptor/ambulance.interceptor";
import {FireDepartmentInterceptor} from "./interceptor/fire-department.interceptor";
import {PoliceInterceptor} from "./interceptor/police.interceptor";

const interceptorManager = new InterceptorManager([new AmbulanceInterceptor(), new FireDepartmentInterceptor(), new PoliceInterceptor()]);


//If we using this proxy, interceptors will works.
new Proxy(new Call911(), {
    get(target: InstanceType<IClass>, methodName: string) {

        return function(...args: unknown[]) {
            return interceptorManager.handle(target, methodName, args);
        }
    }
})
