import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import homeViewControl from '../../viewcontrols/home/home.vc';
import connectViewControl from '../../viewcontrols/connect/connect.vc';
import portfolioViewControl from '../../viewcontrols/portfolio/portfolio.vc';
import hometwoViewControl from '../../viewcontrols/hometwo/hometwo.vc';
import resourcesViewControl from '../../viewcontrols/resources/resources.vc';


export default class AboutViewControl extends BaseViewControl {
    templateString: string = require('./about.vc.html');

    context: any = {};
}

register.viewControl('about-vc', AboutViewControl);
