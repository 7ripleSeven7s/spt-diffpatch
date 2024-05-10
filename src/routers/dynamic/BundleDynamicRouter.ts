import { inject, injectable } from "tsyringe";

import { BundleCallbacks } from "@spt-diffpatch/callbacks/BundleCallbacks";
import { DynamicRouter, RouteAction } from "@spt-diffpatch/di/Router";

@injectable()
export class BundleDynamicRouter extends DynamicRouter
{
    constructor(@inject("BundleCallbacks") protected bundleCallbacks: BundleCallbacks)
    {
        super([
            new RouteAction(".bundle", (url: string, info: any, sessionID: string, output: string): any =>
            {
                return this.bundleCallbacks.getBundle(url, info, sessionID);
            }),
        ]);
    }
}
