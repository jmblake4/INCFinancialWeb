import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class ConnectViewControl extends BaseViewControl {
    templateString: string = require('./connect.vc.html');

    context: contexts.IConnect = {
		name: '',
		email: ''
	};

	registerEmail(): void {
		alert(this.context.name + '\n' + this.context.email);
	}

}

register.viewControl('learnmore-vc', ConnectViewControl);
