import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class ConnectViewControl extends BaseViewControl {
    templateString: string = require('./connect.vc.html');

    context: any = {
		name: <string> 'NAME',
		email: <string> 'EMAIL'
	};

	registerEmail = function() {
		alert(this.context.name + "\n" + this.context.email);
	}

}

register.viewControl('learnmore-vc', ConnectViewControl);
