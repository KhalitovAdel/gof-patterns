import {Mediator} from "./mediator";
import {HomeWorker} from "./home-worker";
import {Flowers} from "./flowers";
import {Taxi} from "./taxi";

/**
 * I have a question about that patter.
 * In my case mediator notify caller when IAction have some action.
 * But how I can implement that if we need to react for IAction events and also we need to react for the Caller events.
 * Current implementation: IAction => Mediator => Caller
 * Needed implementation: IAction => Mediator => Caller && Caller => Mediator => IAction
 */
const caller = new Caller();

const mediator = new Mediator(caller);
const homeWorker = new HomeWorker(mediator);
const flowers = new Flowers(mediator);
const taxi = new Taxi(mediator);

taxi.makeAction();

flowers.makeAction();

homeWorker.makeAction();
