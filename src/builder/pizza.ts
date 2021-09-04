export type IPizzaUpdate = Partial<{
    cheese: number;
    bacon: number;
    pineapple: number;
    mushrooms: number;
    seafood: number;
}>;

export class Pizza {
    protected cheese!: number;
    protected bacon!: number;
    protected pineapple!: number;
    protected mushrooms!: number;
    protected seafood!: number;

    update(filling: IPizzaUpdate) {
        Object.assign(this, filling);
    }
}
