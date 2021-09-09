export type IClass<T = unknown, ARGS extends [] = any> = new (...args: ARGS) => T;
