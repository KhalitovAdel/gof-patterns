export interface IAction {
    makeAction(): void;
    callBack(instance: IAction): void;
}
