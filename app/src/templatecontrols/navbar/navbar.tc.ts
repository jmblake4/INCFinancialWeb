import {controls, events, register, ui, web} from 'platypus';
import {DrawerController} from 'platypusui';

export default class NavbarTemplateControl extends ui.TemplateControl {
<<<<<<< HEAD
    templateString: string = require('./navbar.tc.html');
=======
   templateString: string = require('./navbar.tc.html');
>>>>>>> 4347cece1b4f84605504fc981398aa015e7722e8
}

register.control('navbar', NavbarTemplateControl);

// import {controls, events, register, ui, web} from 'platypus';
// import {DrawerController} from 'platypusui';

// export default class NavbarTemplateControl extends ui.TemplateControl {
//     templateString: string = require('./navbar.tc.html');

// 	drawerController: controls.INamedElement<HTMLDivElement, DrawerController>;
	
// 	context: any = {
// 		showNavbar: true
// 	};
	
// 	initialize(): void {
// 		this.on('navigated', (ev: events.DispatchEvent, utils: web.UrlUtils) => {
// 			this.drawerController.control.close();
// 			// if(utils.pathname.indexOf('/login') === 0 ||
// 			// 	utils.pathname.indexOf('/register') === 0) {
// 			// 	this.context.showNavbar = false;
// 			// } else {
// 			// 	this.context.showNavbar = true;
// 			// }
// 		});
// 	}
// }

// register.control('navbar', NavbarTemplateControl);
