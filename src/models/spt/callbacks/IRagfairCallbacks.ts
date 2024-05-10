import { IEmptyRequestData } from "@spt-diffpatch/models/eft/common/IEmptyRequestData";
import { IPmcData } from "@spt-diffpatch/models/eft/common/IPmcData";
import { IGetBodyResponseData } from "@spt-diffpatch/models/eft/httpResponse/IGetBodyResponseData";
import { IItemEventRouterResponse } from "@spt-diffpatch/models/eft/itemEvent/IItemEventRouterResponse";
import { IAddOfferRequestData } from "@spt-diffpatch/models/eft/ragfair/IAddOfferRequestData";
import { IExtendOfferRequestData } from "@spt-diffpatch/models/eft/ragfair/IExtendOfferRequestData";
import { IGetItemPriceResult } from "@spt-diffpatch/models/eft/ragfair/IGetItemPriceResult";
import { IGetMarketPriceRequestData } from "@spt-diffpatch/models/eft/ragfair/IGetMarketPriceRequestData";
import { IRemoveOfferRequestData } from "@spt-diffpatch/models/eft/ragfair/IRemoveOfferRequestData";
import { ISearchRequestData } from "@spt-diffpatch/models/eft/ragfair/ISearchRequestData";

export interface IRagfairCallbacks
{
    load(): void;
    search(url: string, info: ISearchRequestData, sessionID: string): IGetBodyResponseData<any>;
    getMarketPrice(
        url: string,
        info: IGetMarketPriceRequestData,
        sessionID: string,
    ): IGetBodyResponseData<IGetItemPriceResult>;
    getItemPrices(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
    addOffer(pmcData: IPmcData, info: IAddOfferRequestData, sessionID: string): IItemEventRouterResponse;
    removeOffer(pmcData: IPmcData, info: IRemoveOfferRequestData, sessionID: string): IItemEventRouterResponse;
    extendOffer(pmcData: IPmcData, info: IExtendOfferRequestData, sessionID: string): IItemEventRouterResponse;
    update(timeSinceLastRun: number): boolean;
    updatePlayer(timeSinceLastRun: number): boolean;
}
