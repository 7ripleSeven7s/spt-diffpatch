import { IPmcData } from "@spt-diffpatch/models/eft/common/IPmcData";
import { IItemEventRouterResponse } from "@spt-diffpatch/models/eft/itemEvent/IItemEventRouterResponse";
import { IRepairActionDataRequest } from "@spt-diffpatch/models/eft/repair/IRepairActionDataRequest";
import { ITraderRepairActionDataRequest } from "@spt-diffpatch/models/eft/repair/ITraderRepairActionDataRequest";

export interface IRepairCallbacks
{
    traderRepair(pmcData: IPmcData, body: ITraderRepairActionDataRequest, sessionID: string): IItemEventRouterResponse;
    repair(pmcData: IPmcData, body: IRepairActionDataRequest, sessionID: string): IItemEventRouterResponse;
}
