import { IGetBodyResponseData } from "@spt-diffpatch/models/eft/httpResponse/IGetBodyResponseData";
import { IItemEventRouterRequest } from "@spt-diffpatch/models/eft/itemEvent/IItemEventRouterRequest";
import { IItemEventRouterResponse } from "@spt-diffpatch/models/eft/itemEvent/IItemEventRouterResponse";

export interface IItemEventCallbacks
{
    handleEvents(
        url: string,
        info: IItemEventRouterRequest,
        sessionID: string,
    ): IGetBodyResponseData<IItemEventRouterResponse>;
}
