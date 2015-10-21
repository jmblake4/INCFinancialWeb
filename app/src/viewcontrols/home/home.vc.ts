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
		alert("you clicked on show create details");
		this.context.detailsVisible = true;
	}
	
	showGrowDetails(): any {
		alert("you clicked on show grow details");
		this.context.detailsVisible = true;
	}
	
	showKeepDetails(): any {
		alert("you clicked on show keep details");
		this.context.detailsVisible = true;
	}
	
	hideCreateDetails(): any {
		alert("you clicked on hide create details");
		this.context.detailsVisible = false;
	}
	
	hideGrowDetails(): any {
		alert("you clicked on hide grow details");
		this.context.detailsVisible = false;
	}
	
	hideKeepDetails(): any {
		alert("you clicked on hide keep details");
		this.context.detailsVisible = false;
	}
}
register.viewControl('home-vc', HomeViewControl);
