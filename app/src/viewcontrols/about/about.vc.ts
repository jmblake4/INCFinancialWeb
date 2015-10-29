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
		let context =  this.context;
		context.teamVisible = true;
		context.worksVisible = false;
		context.purchasesVisible = false;
		context.incomeVisible = false;
		context.wealthVisible = false;
		context.financialVisible = false;
		context.activate = 'activeteam';
		context.activateTwo = '';
	}
	
	workShow(): void {
		let context =  this.context;
		context.teamVisible = false;
		context.worksVisible = true;
		context.purchasesVisible = false;
		context.incomeVisible = false;
		context.wealthVisible = false;
		context.financialVisible = false;
		context.activateTwo = 'activeteam',	
		context.activate = ''	
	}

	togglePurchases(): void {
		let context =  this.context;
		context.purchasesVisible = !context.purchasesVisible;
		context.imgPurchasesUrl = context.purchasesVisible ? context.imgPlusMinusUrl.minusUrl : context.imgPlusMinusUrl.plusUrl;
	}

	toggleIncome(): void {
		let context =  this.context;
		context.incomeVisible = !context.incomeVisible;
		context.imgIncomeUrl = context.incomeVisible ? context.imgPlusMinusUrl.minusUrl : context.imgPlusMinusUrl.plusUrl;
	}

	toggleWealth(): void {
		let context =  this.context;
		context.wealthVisible = !context.wealthVisible;
		context.imgWealthUrl = context.wealthVisible ? context.imgPlusMinusUrl.minusUrl : context.imgPlusMinusUrl.plusUrl;
	}

	toggleFinancial(): void {
		let context =  this.context;
		context.financialVisible = !context.financialVisible;
		context.imgFinancialUrl = context.financialVisible ? context.imgPlusMinusUrl.minusUrl : context.imgPlusMinusUrl.plusUrl;
	}
	
	doIt() {
		let context =  this.context;
		context.activate = 'activeteam';
		context.activateTwo = '';
	}
	
}

register.viewControl('about-vc', AboutViewControl);