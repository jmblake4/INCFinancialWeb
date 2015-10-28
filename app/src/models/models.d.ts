declare module models {

	interface IPlusMinusURL {
		plusUrl: string;
		minusUrl: string;
	}

}

declare module contexts {

	interface IAbout {
		imgPlusMinusUrl: models.IPlusMinusURL;
		teamVisible: boolean;
		worksVisible: boolean;
		purchasesVisible: boolean;
		incomeVisible: boolean;
		wealthVisible: boolean;
		financialVisible: boolean;
		imgPurchasesUrl: string;
		imgIncomeUrl: string;
		imgWealthUrl: string;
		imgFinancialUrl: string;
		activate: string;
		activateTwo: string;		
	}
	
	interface IConnect {
		name: string;
		email: string;
	}
	
	interface IHome {
		detailsVisible: boolean;
	}

}

