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
}

var showCreateDetails = function() {
	alert("you clicked on show create details");
}

var showGrowDetails = function() {
	alert("you clicked on show grow details");
}

var showKeepDetails = function() {
	alert("you clicked on show keep details");
}

var hideCreateDetails = function() {
	alert("you clicked on hide create details");
}

var hideGrowDetails = function() {
	alert("you clicked on hide grow details");
}

var hideKeepDetails = function() {
	alert("you clicked on hide keep details");
}

register.viewControl('home-vc', HomeViewControl);
