import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import aboutViewControl from '../../viewcontrols/about/about.vc';
import connectViewControl from '../../viewcontrols/connect/connect.vc';
import portfolioViewControl from '../../viewcontrols/portfolio/portfolio.vc';
import hometwoViewControl from '../../viewcontrols/hometwo/hometwo.vc';


export default class ResourcesViewControl extends BaseViewControl {
    templateString: string = require('./resources.vc.html');

    context: any = {};
}

register.viewControl('resources-vc', ResourcesViewControl);
