import {Context} from "./context";
import {SortType} from "./enum/sort-type.enum";

const service = new Context();

const firstResult = service.getResult(SortType.CDA);
const secondResult = service.getResult(SortType.ABC);
