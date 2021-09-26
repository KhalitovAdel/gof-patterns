import {Facade} from "../facade/facade";

/**
 * Playground: https://www.typescriptlang.org/play?ssl=32&ssc=14&pln=24&pc=13#code/MYGwhgzhAEAqCmEAu0DeAoa0C28kAsB7AEwEYAKMALmgDsBXbAI3gCcAaaJmh5tgSjSYs0Vnnqta0MNADUXANzCAvumGQAnrWA48RYgCZKNZKwCWtAOadu0UxcuCMI0eMnS5ilelXpghWmQ7JEJWMEt4aABeOngAd2gAWTAABwAeeytOMFoNAD5yfiV-QJQU1kIADw1o2ISABQrq8lp4uEQkQs5nEQjOpDBWPs4Aa3gNGjGNQgAzduQnYRcsMSQJKRn6bSQzAOhyADojwcsIGhyNReXr6BKg5FDw+ABpcdqAZSRzK3Ip-gOSsAwJ0AFLvADyADkDplLGYZhpKEMIPwiksblh4fsHmEIgd8JByDinq9LlcMcs7oQQPADiBCJZyAByABiFWw0AAwmBgPh4Ey0RTlqt1sFHni+kSQriXuN+OiMcolEKsAqbncUGIIPQQCgYuQBkM8NIYBd+ABtKYAXQOqRSIERhuG0mRgpVahV0Cx5C1OpQFmQOWA8Fm0EahGwZgg8HJnpF7l9uoOBHgtHIaqFxGBMiieSEnuuxLx0c6RdlGk4iaQboLInjUizA2Vtegyk4GYpbAqrGiedQBAqCS7oTbHeu8s9vk9ZZheCl4vLlcQfprFLHdbcUirzeuqhcqmURSAA
 * Or we can implement that as decorator, I think this is very same.
 * For example:
 * 1) We creating new class who implements Facade interface.
 * 2) We receive Facade class from constructor, and can receive other needed services to implement needed functional. (Fow that case may receive redis cli instance)
 *
 * But js has Proxy constructor, and we can implement that construction for 30 string of code.
 */

export const ProxyFacadeCreator = <T extends Facade>(value: T) => {
    const storage = new Map<string, any>();
    return new Proxy<T>(value, {
        get(target, key: keyof Facade) {
            return function (...args: any) {
                const storageKey = String(key).concat(JSON.stringify(args));
                if (storage.has(storageKey)) return storage.get(storageKey);

                const result = target[key].apply(target, args);

                //If you use that construction you need implement that for Observable also.
                if (result instanceof Promise) {
                    return result.then(
                        data => {
                            storage.set(storageKey, result);
                            return data;
                        },
                        error => {throw error},
                    )
                }

                storage.set(storageKey, result);

                return result;
            }
        }
    })
}
