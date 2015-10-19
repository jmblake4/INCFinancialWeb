import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import aboutViewControl from '../../viewcontrols/about/about.vc';
import connectViewControl from '../../viewcontrols/connect/connect.vc';
import portfolioViewControl from '../../viewcontrols/portfolio/portfolio.vc'

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {};
}

register.viewControl('home-vc', HomeViewControl);
