import { inject, injectable } from "tsyringe";

import { WishlistCallbacks } from "@spt-diffpatch/callbacks/WishlistCallbacks";
import { HandledRoute, ItemEventRouterDefinition } from "@spt-diffpatch/di/Router";
import { IPmcData } from "@spt-diffpatch/models/eft/common/IPmcData";
import { IItemEventRouterResponse } from "@spt-diffpatch/models/eft/itemEvent/IItemEventRouterResponse";

@injectable()
export class WishlistItemEventRouter extends ItemEventRouterDefinition
{
    constructor(@inject("WishlistCallbacks") protected wishlistCallbacks: WishlistCallbacks)
    {
        super();
    }

    public override getHandledRoutes(): HandledRoute[]
    {
        return [new HandledRoute("AddToWishList", false), new HandledRoute("RemoveFromWishList", false)];
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
            case "AddToWishList":
                return this.wishlistCallbacks.addToWishlist(pmcData, body, sessionID);
            case "RemoveFromWishList":
                return this.wishlistCallbacks.removeFromWishlist(pmcData, body, sessionID);
        }
    }
}
