export interface Stock{
    isinCode: string;
    priceInfo: PriceInfo;
    baseData: BaseData;
    fundamentalData: FundamentalData;
    name: string;
    portrait: string;
}

interface BaseData{
    securityType: string;
    wkn: string;
    currency: string;
    initialListingDate: string;
    foundingYear: string;
    fiscalDate: string;
}

interface PriceInfo{
    exchange: string;
    lastUpdate: string;
    bid: number;
    bidVolume: number;
    offer: number;
    offerVolume: number;
    spreadPercentage: string;
    lastTradedPrice: number;
    changePercentage: number;
    stand: string;
    opening: number;
    previousClosing: number;
    tradedVolume: number;
    tradedAmount: number;
    dailyHigh: number;
    dailyLow: number;
    high52w: number;
    high52wDate: string;
    low52w: number;
    low52wDate: string;
}

interface FundamentalData {
    industry: string;
    marketCapital: number;
    pieces: number;
    equityCapital: number;
    numberOfEmployees: number;
    lastGeneralMeeting: string;
}

