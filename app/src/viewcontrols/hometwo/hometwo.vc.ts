import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import AboutViewControl from '../../viewcontrols/about/about.vc';
import ConnectViewControl from '../../viewcontrols/connect/connect.vc';
import PortfolioViewControl from '../../viewcontrols/portfolio/portfolio.vc';
import HomeViewControl from '../../viewcontrols/home/home.vc';

export default class HomeTwoViewControl extends BaseViewControl {
    templateString: string = require('./hometwo.vc.html');

    context: any = {};
}

register.viewControl('hometwo-vc', HomeTwoViewControl);
