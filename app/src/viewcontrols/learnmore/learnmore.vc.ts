import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class LearnMoreViewControl extends BaseViewControl {
    templateString: string = require('./learnmore.vc.html');

    context: any = {
		name: <string> 'NAME',
		email: <string> 'EMAIL'
	};

	registerEmail = function() {
		alert(this.context.name + "\n" + this.context.email);
	}

}

register.viewControl('learnmore-vc', LearnMoreViewControl);
