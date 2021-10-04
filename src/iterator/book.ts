export class Book {
    private readonly name: string;

    private readonly author: string;

    private readonly createdAt: Date = new Date();

    constructor(name: string, author: string) {
        this.name = name;
        this.author = author;
    }

    getName() {
        return  this.name;
    }

    getAuthor() {
        return this.author;
    }

    getCreateAt() {
        return this.createdAt;
    }
}
