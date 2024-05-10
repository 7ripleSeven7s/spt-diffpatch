import { inject, injectable } from "tsyringe";

import { ICompletedAchievementsResponse } from "@spt-diffpatch/models/eft/profile/ICompletedAchievementsResponse";
import { IGetAchievementsResponse } from "@spt-diffpatch/models/eft/profile/IGetAchievementsResponse";
import { ILogger } from "@spt-diffpatch/models/spt/utils/ILogger";
import { DatabaseServer } from "@spt-diffpatch/servers/DatabaseServer";

/**
 * Logic for handling In Raid callbacks
 */
@injectable()
export class AchievementController
{
    constructor(
        @inject("WinstonLogger") protected logger: ILogger,
        @inject("DatabaseServer") protected databaseServer: DatabaseServer,
    )
    {}

    /**
     * Get base achievements
     * @param sessionID Session id
     */
    public getAchievements(sessionID: string): IGetAchievementsResponse
    {
        return { elements: this.databaseServer.getTables().templates.achievements };
    }

    /**
     * Shows % of 'other' players who've completed each achievement
     * @param sessionId Session id
     * @returns ICompletedAchievementsResponse
     */
    public getAchievementStatistics(sessionId: string): ICompletedAchievementsResponse
    {
        const achievements = this.databaseServer.getTables().templates.achievements;
        const stats = {};

        for (const achievement of achievements)
        {
            stats[achievement.id] = 0;
        }

        return { elements: stats };
    }
}
