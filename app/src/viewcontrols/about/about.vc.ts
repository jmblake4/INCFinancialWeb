import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import HomeViewControl from '../../viewcontrols/home/home.vc';
import ConnectViewControl from '../../viewcontrols/connect/connect.vc';
import PortfolioViewControl from '../../viewcontrols/portfolio/portfolio.vc';

export default class AboutViewControl extends BaseViewControl {
    templateString: string = require('./about.vc.html');

    context: contexts.IAbout = {
		imgPlusMinusUrl: <models.IPlusMinusURL> {
			plusUrl: '../images/icons/plus sign circle.svg',
			minusUrl: '../images/icons/minus sign circle.svg'
		},
		teamVisible: true,
		worksVisible: false,
		purchasesVisible: false,
		incomeVisible: false,
		wealthVisible: false,
		financialVisible: false,
		imgPurchasesUrl: '../images/icons/plus sign circle.svg',
		imgIncomeUrl: '../images/icons/plus sign circle.svg',
		imgWealthUrl: '../images/icons/plus sign circle.svg',
		imgFinancialUrl: '../images/icons/plus sign circle.svg',
		activate: 'activeteam',
		activateTwo: ''
	};
	
	teamShow(): void {
		let c = this.context;
		c.teamVisible = true;
		c.worksVisible = false;
		c.purchasesVisible = false;
		c.incomeVisible = false;
		c.wealthVisible = false;
		c.financialVisible = false;
		c.activate = 'activeteam';
		c.activateTwo = '';
	}
	
	workShow(): void {
		let c = this.context;
		c.teamVisible = false;
		c.worksVisible = true;
		c.purchasesVisible = false;
		c.incomeVisible = false;
		c.wealthVisible = false;
		c.financialVisible = false;
		c.activateTwo = 'activeteam',	
		c.activate = ''	
	}

	togglePurchases(): void {
		let c = this.context;
		c.purchasesVisible = !c.purchasesVisible;
		c.imgPurchasesUrl = c.purchasesVisible ? c.imgPlusMinusUrl.minusUrl : c.imgPlusMinusUrl.plusUrl;
	}

	toggleIncome(): void {
		let c = this.context;
		c.incomeVisible = !c.incomeVisible;
		c.imgIncomeUrl = c.incomeVisible ? c.imgPlusMinusUrl.minusUrl : c.imgPlusMinusUrl.plusUrl;
	}

	toggleWealth(): void {
		let c = this.context;
		c.wealthVisible = !c.wealthVisible;
		c.imgWealthUrl = c.wealthVisible ? c.imgPlusMinusUrl.minusUrl : c.imgPlusMinusUrl.plusUrl;
	}

	toggleFinancial(): void {
		let c = this.context;
		c.financialVisible = !c.financialVisible;
		c.imgFinancialUrl = c.financialVisible ? c.imgPlusMinusUrl.minusUrl : c.imgPlusMinusUrl.plusUrl;
	}
	
	doIt() {
		let c = this.context;
		c.activate = 'activeteam';
		c.activateTwo = '';
	}
	
}

register.viewControl('about-vc', AboutViewControl);