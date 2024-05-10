import { inject, injectable } from "tsyringe";

import { BotCallbacks } from "@spt-diffpatch/callbacks/BotCallbacks";
import { RouteAction, StaticRouter } from "@spt-diffpatch/di/Router";

@injectable()
export class BotStaticRouter extends StaticRouter
{
    constructor(@inject("BotCallbacks") protected botCallbacks: BotCallbacks)
    {
        super([
            new RouteAction(
                "/client/game/bot/generate",
                (url: string, info: any, sessionID: string, output: string): any =>
                {
                    return this.botCallbacks.generateBots(url, info, sessionID);
                },
            ),
        ]);
    }
}
