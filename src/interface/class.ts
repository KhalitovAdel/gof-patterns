export type IClass<T extends Object = any, ARGS extends [] = any> = new (...args: ARGS) => T;
