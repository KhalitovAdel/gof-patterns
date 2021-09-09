export interface IPizzaBuilder<T> {
    reset(): void;

    setCheese(cheese: number): void;

    setBacon(bacon: number): void;

    setPineapple(pineapple: number): void;

    setMushrooms(mushrooms: number): void;

    setSeafood(seafood: number): void;

    getResult(): T;
}
