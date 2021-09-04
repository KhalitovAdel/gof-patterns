import {CarInstance} from "./car";
import {CarType} from "./interface/car-type.enum";

export const MinivanInstance = CarInstance.clone(CarType.MINIVAN);
MinivanInstance.update('yellow', 'W222WW222');
