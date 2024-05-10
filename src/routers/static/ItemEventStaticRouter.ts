import { inject, injectable } from "tsyringe";

import { ItemEventCallbacks } from "@spt-diffpatch/callbacks/ItemEventCallbacks";
import { RouteAction, StaticRouter } from "@spt-diffpatch/di/Router";

@injectable()
export class ItemEventStaticRouter extends StaticRouter
{
    constructor(@inject("ItemEventCallbacks") protected itemEventCallbacks: ItemEventCallbacks)
    {
        super([
            new RouteAction(
                "/client/game/profile/items/moving",
                (url: string, info: any, sessionID: string, output: string): any =>
                {
                    return this.itemEventCallbacks.handleEvents(url, info, sessionID);
                },
            ),
        ]);
    }
}
