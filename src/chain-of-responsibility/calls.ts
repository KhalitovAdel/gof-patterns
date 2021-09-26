import {CallHelp} from "./decorator/call-help.decorator";
import {HelpEnum} from "./enum/help.enum";

export class Call911 {

    @CallHelp(HelpEnum.FIRE)
    callPress1() {
        //Some business logic to handle call, here we register our method in container
    }

    @CallHelp(HelpEnum.POLICE)
    callPress2() {
        //Some business logic to handle call, here we register our method in container automatically call police department to client
    }

    @CallHelp(HelpEnum.AMBULANCE)
    callPress3() {
        //Some business logic to handle call, here we register our method in container automatically call ambulance to client
    }

    @CallHelp(HelpEnum.FIRE)
    @CallHelp(HelpEnum.POLICE)
    @CallHelp(HelpEnum.AMBULANCE)
    callPress0() {
        //Some business logic to handle call, if client press 0 and we automatically call all departments to client
    }
}
