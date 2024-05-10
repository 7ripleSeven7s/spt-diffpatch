import { inject, injectable } from "tsyringe";

import { BuildsCallbacks } from "@spt-diffpatch/callbacks/BuildsCallbacks";
import { RouteAction, StaticRouter } from "@spt-diffpatch/di/Router";

@injectable()
export class BuildsStaticRouter extends StaticRouter
{
    constructor(@inject("BuildsCallbacks") protected buildsCallbacks: BuildsCallbacks)
    {
        super([
            new RouteAction(
                "/client/builds/list",
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                (url: string, info: any, sessionID: string, output: string): any =>
                {
                    return this.buildsCallbacks.getBuilds(url, info, sessionID);
                },
            ),
            new RouteAction(
                "/client/builds/magazine/save",
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                (url: string, info: any, sessionID: string, output: string): any =>
                {
                    return this.buildsCallbacks.createMagazineTemplate(url, info, sessionID);
                },
            ),
            new RouteAction(
                "/client/builds/weapon/save",
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                (url: string, info: any, sessionID: string, output: string): any =>
                {
                    return this.buildsCallbacks.setWeapon(url, info, sessionID);
                },
            ),
            new RouteAction(
                "/client/builds/equipment/save",
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                (url: string, info: any, sessionID: string, output: string): any =>
                {
                    return this.buildsCallbacks.setEquipment(url, info, sessionID);
                },
            ),
            new RouteAction(
                "/client/builds/delete",
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                (url: string, info: any, sessionID: string, output: string): any =>
                {
                    return this.buildsCallbacks.deleteBuild(url, info, sessionID);
                },
            ),
        ]);
    }
}
