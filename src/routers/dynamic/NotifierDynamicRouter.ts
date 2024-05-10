import { inject, injectable } from "tsyringe";

import { NotifierCallbacks } from "@spt-diffpatch/callbacks/NotifierCallbacks";
import { DynamicRouter, RouteAction } from "@spt-diffpatch/di/Router";

@injectable()
export class NotifierDynamicRouter extends DynamicRouter
{
    constructor(@inject("NotifierCallbacks") protected notifierCallbacks: NotifierCallbacks)
    {
        super([
            new RouteAction("/?last_id", (url: string, info: any, sessionID: string, output: string): any =>
            {
                return this.notifierCallbacks.notify(url, info, sessionID);
            }),
            new RouteAction("/notifierServer", (url: string, info: any, sessionID: string, output: string): any =>
            {
                return this.notifierCallbacks.notify(url, info, sessionID);
            }),
            new RouteAction("/push/notifier/get/", (url: string, info: any, sessionID: string, output: string): any =>
            {
                return this.notifierCallbacks.getNotifier(url, info, sessionID);
            }),
            new RouteAction(
                "/push/notifier/getwebsocket/",
                (url: string, info: any, sessionID: string, output: string): any =>
                {
                    return this.notifierCallbacks.getNotifier(url, info, sessionID);
                },
            ),
        ]);
    }
}
