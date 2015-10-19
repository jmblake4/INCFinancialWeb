import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class FooterViewControl extends BaseViewControl {
    templateString: string = require('./footer.vc.html');

    context: any = {};
}

register.viewControl('footer-vc', FooterViewControl);
