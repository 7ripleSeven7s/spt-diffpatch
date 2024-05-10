import { IPmcData } from "@spt-diffpatch/models/eft/common/IPmcData";
import { ISuit } from "@spt-diffpatch/models/eft/common/tables/ITrader";
import { IBuyClothingRequestData } from "@spt-diffpatch/models/eft/customization/IBuyClothingRequestData";
import { IWearClothingRequestData } from "@spt-diffpatch/models/eft/customization/IWearClothingRequestData";
import { IGetBodyResponseData } from "@spt-diffpatch/models/eft/httpResponse/IGetBodyResponseData";
import { IItemEventRouterResponse } from "@spt-diffpatch/models/eft/itemEvent/IItemEventRouterResponse";

export interface ICustomizationCallbacks
{
    getSuits(url: string, info: any, sessionID: string): IGetBodyResponseData<any>;
    getTraderSuits(url: string, info: any, sessionID: string): IGetBodyResponseData<ISuit[]>;
    wearClothing(pmcData: IPmcData, body: IWearClothingRequestData, sessionID: string): IItemEventRouterResponse;
    buyClothing(pmcData: IPmcData, body: IBuyClothingRequestData, sessionID: string): IItemEventRouterResponse;
}
