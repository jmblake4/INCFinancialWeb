import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import AboutViewControl from '../../viewcontrols/about/about.vc';
import ConnectViewControl from '../../viewcontrols/connect/connect.vc';
import PortfolioViewControl from '../../viewcontrols/portfolio/portfolio.vc';
import HomeTwoViewControl from '../../viewcontrols/hometwo/hometwo.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {
		createDetailsVisible: <boolean> false,
		growDetailsVisible: <boolean> false,
		keepDetailsVisible: <boolean> false,
		normalVisible: <boolean> true
	};

	showCreateDetails(): any {
		alert("you clicked on show create details");
	}
	
	showGrowDetails(): any {
		alert("you clicked on show create details");
	}
	
	showKeepDetails(): any {
		alert("you clicked on show create details");
	}
	
	hideCreateDetails(): any {
		alert("you clicked on show create details");
	}
	
	hideGrowDetails(): any {
		alert("you clicked on show create details");
	}
	
	hideKeepDetails(): any {
		alert("you clicked on show create details");
	}
}
register.viewControl('home-vc', HomeViewControl);
