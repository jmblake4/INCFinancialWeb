import {App, events, register, routing} from 'platypus';
import HomeViewControl from '../viewcontrols/home/home.vc';

export default class MyApp extends App {
    constructor(router: routing.Router) {
        super();

        router.configure([
            { pattern: '', view: HomeViewControl },
            { pattern: 'about', view: aboutViewControl },
            { pattern: 'portfolio', view: portfolioViewControl },
            { pattern: 'connect', view: connectViewControl },
            { pattern: 'resources', view: resourcesViewControl },
            { pattern: 'hometwo', view: hometwoViewControl }
            
            
        ]);
    }

    error(ev: events.ErrorEvent<Error>): void {
        console.log(ev.error);
    }
}

register.app('app', MyApp, [
    routing.Router
]);
