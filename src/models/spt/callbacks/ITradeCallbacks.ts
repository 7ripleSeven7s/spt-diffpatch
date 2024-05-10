import { IPmcData } from "@spt-diffpatch/models/eft/common/IPmcData";
import { IItemEventRouterResponse } from "@spt-diffpatch/models/eft/itemEvent/IItemEventRouterResponse";
import { IProcessBaseTradeRequestData } from "@spt-diffpatch/models/eft/trade/IProcessBaseTradeRequestData";
import { IProcessRagfairTradeRequestData } from "@spt-diffpatch/models/eft/trade/IProcessRagfairTradeRequestData";

export interface ITradeCallbacks
{
    processTrade(pmcData: IPmcData, body: IProcessBaseTradeRequestData, sessionID: string): IItemEventRouterResponse;
    processRagfairTrade(
        pmcData: IPmcData,
        body: IProcessRagfairTradeRequestData,
        sessionID: string,
    ): IItemEventRouterResponse;
}
