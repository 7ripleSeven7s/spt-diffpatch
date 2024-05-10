import { ILocationBase } from "@spt-diffpatch/models/eft/common/ILocationBase";
import { ILocationsGenerateAllResponse } from "@spt-diffpatch/models/eft/common/ILocationsSourceDestinationBase";
import { IGetBodyResponseData } from "@spt-diffpatch/models/eft/httpResponse/IGetBodyResponseData";
import { IGetLocationRequestData } from "@spt-diffpatch/models/eft/location/IGetLocationRequestData";

export interface ILocationCallbacks
{
    getLocationData(url: string, info: any, sessionID: string): IGetBodyResponseData<ILocationsGenerateAllResponse>;
    getLocation(url: string, info: IGetLocationRequestData, sessionID: string): IGetBodyResponseData<ILocationBase>;
}
