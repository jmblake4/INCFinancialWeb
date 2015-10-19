import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import aboutViewControl from '../../viewcontrols/about/about.vc';
import connectViewControl from '../../viewcontrols/connect/connect.vc';
import portfolioViewControl from '../../viewcontrols/portfolio/portfolio.vc';
import hometwoViewControl from '../../viewcontrols/hometwo/hometwo.vc';
import resourcesViewControl from '../../viewcontrols/resources/resources.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {};
}

register.viewControl('home-vc', HomeViewControl);
