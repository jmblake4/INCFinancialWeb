import {controls, events, register, ui, web} from 'platypus';
import {DrawerController} from 'platypusui';

export default class NavbarTemplateControl extends ui.TemplateControl {
    templateString: string = require('./navbar.tc.html');
}

register.control('navbar', NavbarTemplateControl);
