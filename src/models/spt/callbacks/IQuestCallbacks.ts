import { IEmptyRequestData } from "@spt-diffpatch/models/eft/common/IEmptyRequestData";
import { IPmcData } from "@spt-diffpatch/models/eft/common/IPmcData";
import { IQuest } from "@spt-diffpatch/models/eft/common/tables/IQuest";
import { IPmcDataRepeatableQuest } from "@spt-diffpatch/models/eft/common/tables/IRepeatableQuests";
import { IGetBodyResponseData } from "@spt-diffpatch/models/eft/httpResponse/IGetBodyResponseData";
import { IItemEventRouterResponse } from "@spt-diffpatch/models/eft/itemEvent/IItemEventRouterResponse";
import { IAcceptQuestRequestData } from "@spt-diffpatch/models/eft/quests/IAcceptQuestRequestData";
import { ICompleteQuestRequestData } from "@spt-diffpatch/models/eft/quests/ICompleteQuestRequestData";
import { IHandoverQuestRequestData } from "@spt-diffpatch/models/eft/quests/IHandoverQuestRequestData";
import { IListQuestsRequestData } from "@spt-diffpatch/models/eft/quests/IListQuestsRequestData";
import { IRepeatableQuestChangeRequest } from "@spt-diffpatch/models/eft/quests/IRepeatableQuestChangeRequest";

export interface IQuestCallbacks
{
    changeRepeatableQuest(
        pmcData: IPmcData,
        body: IRepeatableQuestChangeRequest,
        sessionID: string,
    ): IItemEventRouterResponse;
    acceptQuest(pmcData: IPmcData, body: IAcceptQuestRequestData, sessionID: string): IItemEventRouterResponse;
    completeQuest(pmcData: IPmcData, body: ICompleteQuestRequestData, sessionID: string): IItemEventRouterResponse;
    handoverQuest(pmcData: IPmcData, body: IHandoverQuestRequestData, sessionID: string): IItemEventRouterResponse;
    listQuests(url: string, info: IListQuestsRequestData, sessionID: string): IGetBodyResponseData<IQuest[]>;
    activityPeriods(
        url: string,
        info: IEmptyRequestData,
        sessionID: string,
    ): IGetBodyResponseData<IPmcDataRepeatableQuest[]>;
}
