import { inject, injectable } from "tsyringe";

import { CustomizationCallbacks } from "@spt-diffpatch/callbacks/CustomizationCallbacks";
import { DynamicRouter, RouteAction } from "@spt-diffpatch/di/Router";

@injectable()
export class CustomizationDynamicRouter extends DynamicRouter
{
    constructor(@inject("CustomizationCallbacks") protected customizationCallbacks: CustomizationCallbacks)
    {
        super([
            new RouteAction(
                "/client/trading/customization/",
                (url: string, info: any, sessionID: string, output: string): any =>
                {
                    return this.customizationCallbacks.getTraderSuits(url, info, sessionID);
                },
            ),
        ]);
    }
}
