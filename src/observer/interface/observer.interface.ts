export interface IObserver<T> {
    handleChange(subject: T): void
}
