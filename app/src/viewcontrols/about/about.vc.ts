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
		this.context.teamVisible = true;
		this.context.worksVisible = false;
		this.context.purchasesVisible = false;
		this.context.incomeVisible = false;
		this.context.wealthVisible = false;
		this.context.financialVisible = false;
		this.context.activate = 'activeteam';
		this.context.activateTwo = '';
	}
	
	workShow(): void {
		this.context.teamVisible = false;
		this.context.worksVisible = true;
		this.context.purchasesVisible = false;
		this.context.incomeVisible = false;
		this.context.wealthVisible = false;
		this.context.financialVisible = false;
		this.context.activateTwo = 'activeteam',	
		this.context.activate = ''	
	}

	togglePurchases(): void {
		this.context.purchasesVisible = !this.context.purchasesVisible;
		this.context.imgPurchasesUrl = this.context.purchasesVisible ? this.context.imgPlusMinusUrl.minusUrl : this.context.imgPlusMinusUrl.plusUrl;
	}

	toggleIncome(): void {
		this.context.incomeVisible = !this.context.incomeVisible;
		this.context.imgIncomeUrl = this.context.incomeVisible ? this.context.imgPlusMinusUrl.minusUrl : this.context.imgPlusMinusUrl.plusUrl;
	}

	toggleWealth(): void {
		this.context.wealthVisible = !this.context.wealthVisible;
		this.context.imgWealthUrl = this.context.wealthVisible ? this.context.imgPlusMinusUrl.minusUrl : this.context.imgPlusMinusUrl.plusUrl;
	}

	toggleFinancial(): void {
		this.context.financialVisible = !this.context.financialVisible;
		this.context.imgFinancialUrl = this.context.financialVisible ? this.context.imgPlusMinusUrl.minusUrl : this.context.imgPlusMinusUrl.plusUrl;
	}
	
	doIt() {
		this.context.activate = 'activeteam';
		this.context.activateTwo = '';
	}
	
}

register.viewControl('about-vc', AboutViewControl);