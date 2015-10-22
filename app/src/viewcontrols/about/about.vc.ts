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
		financialVisible: <boolean> false		
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
	}

	toggleIncome(): void {
		this.context.incomeVisible = ! this.context.incomeVisible;
	}

	toggleWealth(): void {
		this.context.wealthVisible = ! this.context.wealthVisible;
	}

	toggleFinancial(): void {
		this.context.financialVisible = ! this.context.financialVisible;
	}
	
}

register.viewControl('about-vc', AboutViewControl);
