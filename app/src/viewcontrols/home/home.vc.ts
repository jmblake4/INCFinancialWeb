import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import AboutViewControl from '../../viewcontrols/about/about.vc';
import ConnectViewControl from '../../viewcontrols/connect/connect.vc';
import PortfolioViewControl from '../../viewcontrols/portfolio/portfolio.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: contexts.IHome = {
		detailsVisible: false
	};
	
	toggleDetails(): void {
		this.context.detailsVisible = !this.context.detailsVisible;
	}
}
register.viewControl('home-vc', HomeViewControl);
