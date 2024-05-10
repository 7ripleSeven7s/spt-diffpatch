import { IGenerateBotsRequestData } from "@spt-diffpatch/models/eft/bot/IGenerateBotsRequestData";
import { IBotBase } from "@spt-diffpatch/models/eft/common/tables/IBotBase";
import { IBotCore } from "@spt-diffpatch/models/eft/common/tables/IBotCore";
import { Difficulty } from "@spt-diffpatch/models/eft/common/tables/IBotType";

export interface IBotController
{
    getBotLimit(type: string): number;
    getBotDifficulty(type: string, difficulty: string): IBotCore | Difficulty;
    isBotPmc(botRole: string): boolean;
    isBotBoss(botRole: string): boolean;
    isBotFollower(botRole: string): boolean;
    generate(info: IGenerateBotsRequestData, playerScav: boolean): IBotBase[];
    getBotCap(): number;
}
