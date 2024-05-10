import { AchievementController } from "@spt-diffpatch/controllers/AchievementController";
import { ProfileController } from "@spt-diffpatch/controllers/ProfileController";
import { IEmptyRequestData } from "@spt-diffpatch/models/eft/common/IEmptyRequestData";
import { IAchievement } from "@spt-diffpatch/models/eft/common/tables/IAchievement";
import { IGetBodyResponseData } from "@spt-diffpatch/models/eft/httpResponse/IGetBodyResponseData";
import { ICompletedAchievementsResponse } from "@spt-diffpatch/models/eft/profile/ICompletedAchievementsResponse";
import { IGetAchievementsResponse } from "@spt-diffpatch/models/eft/profile/IGetAchievementsResponse";
import { HttpResponseUtil } from "@spt-diffpatch/utils/HttpResponseUtil";
import { inject, injectable } from "tsyringe";

@injectable()
export class AchievementCallbacks
{
    constructor(
        @inject("AchievementController") protected achievementController: AchievementController,
        @inject("ProfileController") protected profileController: ProfileController,
        @inject("HttpResponseUtil") protected httpResponse: HttpResponseUtil,
    )
    {}

    /**
     * Handle client/achievement/list
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public getAchievements(
        url: string,
        info: IEmptyRequestData,
        sessionID: string,
    ): IGetBodyResponseData<IGetAchievementsResponse>
    {
        return this.httpResponse.getBody(this.achievementController.getAchievements(sessionID));
    }

    /**
     * Handle client/achievement/statistic
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public statistic(
        url: string,
        info: IEmptyRequestData,
        sessionID: string,
    ): IGetBodyResponseData<ICompletedAchievementsResponse>
    {
        return this.httpResponse.getBody(this.achievementController.getAchievementStatistics(sessionID));
    }
}
