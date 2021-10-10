import {StormSubject} from "./storm-subject";
import {FlyDepartmentSubscriber} from "./fly-department.subscriber";
import {RoadDepartmentSubscriber} from "./road-department.subscriber";
import {SchoolDepartmentSubscriber} from "./school-department.subscriber";

const subject = new StormSubject();

subject.addObserver(new FlyDepartmentSubscriber());
subject.addObserver(new RoadDepartmentSubscriber());
subject.addObserver(new SchoolDepartmentSubscriber());
