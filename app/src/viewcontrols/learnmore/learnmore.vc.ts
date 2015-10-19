import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class LearnMoreViewControl extends BaseViewControl {
    templateString: string = require('./learnmore.vc.html');

    context: any = {};
}

register.viewControl('learnmore-vc', LearnMoreViewControl);
