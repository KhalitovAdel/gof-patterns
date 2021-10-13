import {WriteFs} from "./write-fs";

export class WriteTimeFs extends WriteFs {
    public getData(): string {
        return new Date().getTime().toString();
    }
}
