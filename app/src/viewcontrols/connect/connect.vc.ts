import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import aboutViewControl from '../../viewcontrols/about/about.vc';
import homeViewControl from '../../viewcontrols/home/home.vc';
import portfolioViewControl from '../../viewcontrols/portfolio/portfolio.vc';
import hometwoViewControl from '../../viewcontrols/hometwo/hometwo.vc';
import resourcesViewControl from '../../viewcontrols/resources/resources.vc';


export default class ConnectViewControl extends BaseViewControl {
    templateString: string = require('./connect.vc.html');

    context: any = {};
}

register.viewControl('connect-vc', ConnectViewControl);
