import { inject, injectable } from "tsyringe";

import { InsuranceCallbacks } from "@spt-diffpatch/callbacks/InsuranceCallbacks";
import { RouteAction, StaticRouter } from "@spt-diffpatch/di/Router";

@injectable()
export class InsuranceStaticRouter extends StaticRouter
{
    constructor(@inject("InsuranceCallbacks") protected insuranceCallbacks: InsuranceCallbacks)
    {
        super([
            new RouteAction(
                "/client/insurance/items/list/cost",
                (url: string, info: any, sessionID: string, output: string): any =>
                {
                    return this.insuranceCallbacks.getInsuranceCost(url, info, sessionID);
                },
            ),
        ]);
    }
}
