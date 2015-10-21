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
		createDetailsVisible: <boolean> false,
		growDetailsVisible: <boolean> false,
		keepDetailsVisible: <boolean> false,
		normalVisible: <boolean> true
	};

	showCreateDetails(): any {
		this.context.detailsVisible = true;
	}
	
	showGrowDetails(): any {
		this.context.detailsVisible = true;
	}
	
	showKeepDetails(): any {
		this.context.detailsVisible = true;
	}
	
	hideCreateDetails(): any {
		this.context.detailsVisible = false;
	}
	
	hideGrowDetails(): any {
		this.context.detailsVisible = false;
	}
	
	hideKeepDetails(): any {
		this.context.detailsVisible = false;
	}
}
register.viewControl('home-vc', HomeViewControl);
