import { MessageType } from "@spt-diffpatch/models/enums/MessageType";

export interface ISendMessageRequest
{
    dialogId: string;
    type: MessageType;
    text: string;
    replyTo: string;
}
