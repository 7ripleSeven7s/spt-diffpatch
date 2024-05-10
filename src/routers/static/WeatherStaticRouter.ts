import { inject, injectable } from "tsyringe";

import { WeatherCallbacks } from "@spt-diffpatch/callbacks/WeatherCallbacks";
import { RouteAction, StaticRouter } from "@spt-diffpatch/di/Router";

@injectable()
export class WeatherStaticRouter extends StaticRouter
{
    constructor(@inject("WeatherCallbacks") protected weatherCallbacks: WeatherCallbacks)
    {
        super([
            new RouteAction("/client/weather", (url: string, info: any, sessionID: string, output: string): any =>
            {
                return this.weatherCallbacks.getWeather(url, info, sessionID);
            }),
        ]);
    }
}
