import {App, events, register, routing} from 'platypus';
import HomeViewControl from '../viewcontrols/home/home.vc';
import aboutViewControl from '../viewcontrols/about/about.vc';
import portfolioViewControl from '../viewcontrols/portfolio/portfolio.vc';
import connectViewControl from '../viewcontrols/connect/connect.vc';
import resourcesViewControl from '../viewcontrols/resources/resources.vc';
import homeTwoViewControl from '../viewcontrols/homeTwo/homeTwo.vc';



export default class MyApp extends App {
    constructor(router: routing.Router) {
        super();

        router.configure([
            { pattern: '', view: HomeViewControl },
            { pattern: 'about', view: aboutViewControl },
            { pattern: 'portfolio', view: portfolioViewControl },
            { pattern: 'connect', view: connectViewControl },
            { pattern: 'resources', view: resourcesViewControl },
            { pattern: 'hometwo', view: homeTwoViewControl }
            
            
        ]);
    }

    error(ev: events.ErrorEvent<Error>): void {
        console.log(ev.error);
    }
}

register.app('app', MyApp, [
    routing.Router
]);
