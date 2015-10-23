import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import HomeViewControl from '../../viewcontrols/home/home.vc';
import ConnectViewControl from '../../viewcontrols/connect/connect.vc';
import PortfolioViewControl from '../../viewcontrols/portfolio/portfolio.vc';
import HomeTwoViewControl from '../../viewcontrols/hometwo/hometwo.vc';

export default class AboutViewControl extends BaseViewControl {
    templateString: string = require('./about.vc.html');

    context: any = {
		teamVisible: <boolean> true,
		worksVisible: <boolean> false,
		purchasesVisible: <boolean> false,
		incomeVisible: <boolean> false,
		wealthVisible: <boolean> false,
		financialVisible: <boolean> false,
		imgPurchasesUrl: <string> '../images/icons/plus sign circle.svg',
		imgIncomeUrl: <string> '../images/icons/plus sign circle.svg',
		imgWealthUrl: <string> '../images/icons/plus sign circle.svg',
		imgFinancialUrl: <string> '../images/icons/plus sign circle.svg'
	};
	
	teamShow(): void {
		this.context.teamVisible = true;
		this.context.worksVisible = false;
		this.context.purchasesVisible = false;
		this.context.incomeVisible = false;
		this.context.wealthVisible = false;
		this.context.financialVisible = false;
	}
	
	workShow(): void {
		this.context.teamVisible = false;
		this.context.worksVisible = true;
		this.context.purchasesVisible = false;
		this.context.incomeVisible = false;
		this.context.wealthVisible = false;
		this.context.financialVisible = false;		
	}

	togglePurchases(): void {
		this.context.purchasesVisible = ! this.context.purchasesVisible;
		if (!this.context.purchasesVisible) this.context.imgPurchasesUrl = '../images/icons/plus sign circle.svg';
		else this.context.imgPurchasesUrl = '../images/icons/minus sign circle.svg';
	}

	toggleIncome(): void {
		this.context.incomeVisible = ! this.context.incomeVisible;
		if (!this.context.incomeVisible) this.context.imgIncomeUrl = '../images/icons/plus sign circle.svg';
		else this.context.imgIncomeUrl = '../images/icons/minus sign circle.svg';
	}

	toggleWealth(): void {
		this.context.wealthVisible = ! this.context.wealthVisible;
		if (!this.context.wealthVisible) this.context.imgWealthUrl = '../images/icons/plus sign circle.svg';
		else this.context.imgWealthUrl = '../images/icons/minus sign circle.svg';
	}

	toggleFinancial(): void {
		this.context.financialVisible = ! this.context.financialVisible;
		if (!this.context.financialVisible) this.context.imgFinancialUrl = '../images/icons/plus sign circle.svg';
		else this.context.imgFinancialUrl = '../images/icons/minus sign circle.svg';
	}
	
}

register.viewControl('about-vc', AboutViewControl);
