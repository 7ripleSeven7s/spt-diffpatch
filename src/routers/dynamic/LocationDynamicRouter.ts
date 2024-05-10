import { inject, injectable } from "tsyringe";

import { LocationCallbacks } from "@spt-diffpatch/callbacks/LocationCallbacks";
import { DynamicRouter, RouteAction } from "@spt-diffpatch/di/Router";

@injectable()
export class LocationDynamicRouter extends DynamicRouter
{
    constructor(@inject("LocationCallbacks") protected locationCallbacks: LocationCallbacks)
    {
        super([
            new RouteAction(
                "/client/location/getLocalloot",
                (url: string, info: any, sessionID: string, _output: string): any =>
                {
                    return this.locationCallbacks.getLocation(url, info, sessionID);
                },
            ),
        ]);
    }

    public override getTopLevelRoute(): string
    {
        return "aki-loot";
    }
}
