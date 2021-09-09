import {CarInstance} from "./car";
import {CarType} from "./interface/car-type.enum";

export const TruckInstance = CarInstance.clone(CarType.TRUCK);
TruckInstance.update('grey', 'E333EE333');
