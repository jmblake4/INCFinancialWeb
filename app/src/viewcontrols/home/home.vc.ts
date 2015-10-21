import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import AboutViewControl from '../../viewcontrols/about/about.vc';
import ConnectViewControl from '../../viewcontrols/connect/connect.vc';
import PortfolioViewControl from '../../viewcontrols/portfolio/portfolio.vc';
import HomeTwoViewControl from '../../viewcontrols/hometwo/hometwo.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {
		detailsVisible: <boolean> false,
	};
	
	toggleDetails(): any {
		this.context.detailsVisible = this.context.detailsVisible ? false : true;
	}
}
register.viewControl('home-vc', HomeViewControl);
