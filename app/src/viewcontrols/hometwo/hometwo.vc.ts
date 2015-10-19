import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import aboutViewControl from '../../viewcontrols/about/about.vc';
import connectViewControl from '../../viewcontrols/connect/connect.vc';
import portfolioViewControl from '../../viewcontrols/portfolio/portfolio.vc';
import homeViewControl from '../../viewcontrols/home/home.vc';
import resourcesViewControl from '../../viewcontrols/resources/resources.vc';


export default class HometwoViewControl extends BaseViewControl {
    templateString: string = require('./hometwo.vc.html');

    context: any = {};
}

register.viewControl('hometwo-vc', HometwoViewControl);
