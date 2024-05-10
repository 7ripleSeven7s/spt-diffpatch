import { IUserDialogInfo } from "@spt-diffpatch/models/eft/profile/IAkiProfile";

export interface IGetFriendListDataResponse
{
    Friends: IUserDialogInfo[];
    Ignore: string[];
    InIgnoreList: string[];
}
