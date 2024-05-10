import { inject, injectable } from "tsyringe";

import { BundleCallbacks } from "@spt-diffpatch/callbacks/BundleCallbacks";
import { RouteAction, StaticRouter } from "@spt-diffpatch/di/Router";

@injectable()
export class BundleStaticRouter extends StaticRouter
{
    constructor(@inject("BundleCallbacks") protected bundleCallbacks: BundleCallbacks)
    {
        super([
            new RouteAction("/singleplayer/bundles", (url: string, info: any, sessionID: string, output: string): any =>
            {
                return this.bundleCallbacks.getBundles(url, info, sessionID);
            }),
        ]);
    }
}
