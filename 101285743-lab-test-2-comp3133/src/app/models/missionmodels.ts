import { Link } from './link';
import { LaunchSite } from './launchsite';
import { Rocket } from './rocket';

export interface mission {
    flight_number : Number,
    mission_name : String,
    launch_year : String,
    details : String,
    links:Link,
    launch_site: LaunchSite;
    rocket:Rocket;
    launch_success: Boolean,
    launch_date_utc : String,
}