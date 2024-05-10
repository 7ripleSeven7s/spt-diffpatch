import { ISendMessageRequest } from "@spt-diffpatch/models/eft/dialog/ISendMessageRequest";
import { IUserDialogInfo } from "@spt-diffpatch/models/eft/profile/IAkiProfile";

export interface IDialogueChatBot
{
    getChatBot(): IUserDialogInfo;
    handleMessage(sessionId: string, request: ISendMessageRequest): string;
}
