import { BuildController } from "@spt-diffpatch/controllers/BuildController";
import { ISetMagazineRequest } from "@spt-diffpatch/models/eft/builds/ISetMagazineRequest";
import { IEmptyRequestData } from "@spt-diffpatch/models/eft/common/IEmptyRequestData";
import { IGetBodyResponseData } from "@spt-diffpatch/models/eft/httpResponse/IGetBodyResponseData";
import { INullResponseData } from "@spt-diffpatch/models/eft/httpResponse/INullResponseData";
import { IPresetBuildActionRequestData } from "@spt-diffpatch/models/eft/presetBuild/IPresetBuildActionRequestData";
import { IRemoveBuildRequestData } from "@spt-diffpatch/models/eft/presetBuild/IRemoveBuildRequestData";
import { IUserBuilds } from "@spt-diffpatch/models/eft/profile/IAkiProfile";
import { HttpResponseUtil } from "@spt-diffpatch/utils/HttpResponseUtil";
import { inject, injectable } from "tsyringe";

@injectable()
export class BuildsCallbacks
{
    constructor(
        @inject("HttpResponseUtil") protected httpResponse: HttpResponseUtil,
        @inject("BuildController") protected buildController: BuildController,
    )
    {}

    /**
     * Handle client/builds/list
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public getBuilds(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IUserBuilds>
    {
        return this.httpResponse.getBody(this.buildController.getUserBuilds(sessionID));
    }

    /**
     * Handle client/builds/magazine/save
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public createMagazineTemplate(url: string, request: ISetMagazineRequest, sessionID: string): INullResponseData
    {
        this.buildController.createMagazineTemplate(sessionID, request);

        return this.httpResponse.nullResponse();
    }

    /**
     * Handle client/builds/weapon/save
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public setWeapon(url: string, info: IPresetBuildActionRequestData, sessionID: string): INullResponseData
    {
        this.buildController.saveWeaponBuild(sessionID, info);

        return this.httpResponse.nullResponse();
    }

    /**
     * Handle client/builds/equipment/save
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public setEquipment(url: string, info: IPresetBuildActionRequestData, sessionID: string): INullResponseData
    {
        this.buildController.saveEquipmentBuild(sessionID, info);

        return this.httpResponse.nullResponse();
    }

    /**
     * Handle client/builds/delete
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public deleteBuild(url: string, info: IRemoveBuildRequestData, sessionID: string): INullResponseData
    {
        this.buildController.removeBuild(sessionID, info);

        return this.httpResponse.nullResponse();
    }
}
