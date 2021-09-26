import {IInterceptor} from "./interface/interceptor.interface";
import {IClass} from "../interface/class";

export class InterceptorManager {
    constructor(protected readonly interceptors: IInterceptor[]) {}

    handle(target: InstanceType<IClass>, methodName: string, args: unknown[]) {
        const promise = target[methodName].bind(target, ...args);

        /**
         * This construction possible not working, but I image only:
         * 1) our call method call only if all interceptors not throw an error
         * 2) After all interceptors pass, we call res(our base function) and all our handlers works after our result
         *
         * TODO: Best practice use observable https://docs.nestjs.com/interceptors
         */
        const fakePromise = new Promise(async (res, rej) => {
            try {
                await Promise.all([this.interceptors.map(interceptor => interceptor.handle(target, methodName, fakePromise))]);
            } catch (e) {
                return rej(e);
            }
            return res(promise);
        });

        return fakePromise;
    }
}
