import { IEmptyRequestData } from "@spt-diffpatch/models/eft/common/IEmptyRequestData";
import { IGetBodyResponseData } from "@spt-diffpatch/models/eft/httpResponse/IGetBodyResponseData";

export interface IWeatherCallbacks
{
    getWeather(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
}
