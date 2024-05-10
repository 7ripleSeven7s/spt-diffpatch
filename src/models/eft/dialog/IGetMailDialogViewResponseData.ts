import { IUserDialogInfo, Message } from "@spt-diffpatch/models/eft/profile/IAkiProfile";

export interface IGetMailDialogViewResponseData
{
    messages: Message[];
    profiles: IUserDialogInfo[];
    hasMessagesWithRewards: boolean;
}
