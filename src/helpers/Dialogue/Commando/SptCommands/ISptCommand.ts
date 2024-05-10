import { ISendMessageRequest } from "@spt-diffpatch/models/eft/dialog/ISendMessageRequest";
import { IUserDialogInfo } from "@spt-diffpatch/models/eft/profile/IAkiProfile";

export interface ISptCommand
{
    getCommand(): string;
    getCommandHelp(): string;
    performAction(commandHandler: IUserDialogInfo, sessionId: string, request: ISendMessageRequest): string;
}
