import { IBaseConfig } from "@spt-diffpatch/models/spt/config/IBaseConfig";

export interface IMatchConfig extends IBaseConfig
{
    kind: "aki-match";
    enabled: boolean;
}
