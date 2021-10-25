import {WriteTimeFs} from "./write-time-fs";
import {WriteDateFs} from "./write-date-fs";

const timeWriter = new WriteTimeFs();
const dateWriter = new WriteDateFs();

timeWriter.writeFs();
dateWriter.writeFs();
