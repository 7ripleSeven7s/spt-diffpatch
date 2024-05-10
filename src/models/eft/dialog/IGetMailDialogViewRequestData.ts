import { MessageType } from "@spt-diffpatch/models/enums/MessageType";

export interface IGetMailDialogViewRequestData
{
    type: MessageType;
    dialogId: string;
    limit: number;
    time: number; // decimal
}
