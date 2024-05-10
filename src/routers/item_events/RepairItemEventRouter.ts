import { inject, injectable } from "tsyringe";

import { RepairCallbacks } from "@spt-diffpatch/callbacks/RepairCallbacks";
import { HandledRoute, ItemEventRouterDefinition } from "@spt-diffpatch/di/Router";
import { IPmcData } from "@spt-diffpatch/models/eft/common/IPmcData";
import { IItemEventRouterResponse } from "@spt-diffpatch/models/eft/itemEvent/IItemEventRouterResponse";

@injectable()
export class RepairItemEventRouter extends ItemEventRouterDefinition
{
    constructor(@inject("RepairCallbacks") protected repairCallbacks: RepairCallbacks)
    {
        super();
    }

    public override getHandledRoutes(): HandledRoute[]
    {
        return [new HandledRoute("Repair", false), new HandledRoute("TraderRepair", false)];
    }

    public override handleItemEvent(
        url: string,
        pmcData: IPmcData,
        body: any,
        sessionID: string,
    ): IItemEventRouterResponse
    {
        switch (url)
        {
            case "Repair":
                return this.repairCallbacks.repair(pmcData, body, sessionID);
            case "TraderRepair":
                return this.repairCallbacks.traderRepair(pmcData, body, sessionID);
        }
    }
}
