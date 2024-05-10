import { Message } from "@spt-diffpatch/models/eft/profile/IAkiProfile";

export interface IGetAllAttachmentsResponse
{
    messages: Message[];
    profiles: any[];
    hasMessagesWithRewards: boolean;
}
