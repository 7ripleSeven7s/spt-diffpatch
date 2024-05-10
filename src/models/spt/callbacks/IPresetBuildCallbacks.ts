import { IPmcData } from "@spt-diffpatch/models/eft/common/IPmcData";
import { IGetBodyResponseData } from "@spt-diffpatch/models/eft/httpResponse/IGetBodyResponseData";
import { IItemEventRouterResponse } from "@spt-diffpatch/models/eft/itemEvent/IItemEventRouterResponse";
import { IPresetBuildActionRequestData } from "@spt-diffpatch/models/eft/presetBuild/IPresetBuildActionRequestData";
import { IWeaponBuild } from "@spt-diffpatch/models/eft/profile/IAkiProfile";

export interface IPresetBuildCallbacks
{
    getHandbookUserlist(url: string, info: any, sessionID: string): IGetBodyResponseData<IWeaponBuild[]>;
    saveWeaponBuild(
        pmcData: IPmcData,
        body: IPresetBuildActionRequestData,
        sessionID: string,
    ): IItemEventRouterResponse;
    removeWeaponBuild(
        pmcData: IPmcData,
        body: IPresetBuildActionRequestData,
        sessionID: string,
    ): IItemEventRouterResponse;
    saveEquipmentBuild(
        pmcData: IPmcData,
        body: IPresetBuildActionRequestData,
        sessionID: string,
    ): IItemEventRouterResponse;
    removeEquipmentBuild(
        pmcData: IPmcData,
        body: IPresetBuildActionRequestData,
        sessionID: string,
    ): IItemEventRouterResponse;
}
