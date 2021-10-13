import {WriteFs} from "./write-fs";

export class WriteDateFs extends WriteFs {
    public getData(): string {
        return new Date().getDate().toString();
    }
}
