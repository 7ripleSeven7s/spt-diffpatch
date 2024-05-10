import { ICommand } from "@spt-diffpatch/models/spt/utils/ICommand";

export interface IAsyncQueue
{
    waitFor(command: ICommand): Promise<any>;
}
