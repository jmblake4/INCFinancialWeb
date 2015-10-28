import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import AboutViewControl from '../../viewcontrols/about/about.vc';
import ConnectViewControl from '../../viewcontrols/connect/connect.vc';
import HomeViewControl from '../../viewcontrols/home/home.vc';

export default class PortfolioViewControl extends BaseViewControl {
    templateString: string = require('./portfolio.vc.html');

    context: any = {};
}

register.viewControl('portfolio-vc', PortfolioViewControl);
