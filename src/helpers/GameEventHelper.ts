import { inject, injectable } from "tsyringe";

import { ConfigTypes } from "@spt-diffpatch/models/enums/ConfigTypes";
import { ISeasonalEventConfig } from "@spt-diffpatch/models/spt/config/ISeasonalEventConfig";
import { ConfigServer } from "@spt-diffpatch/servers/ConfigServer";
import { DatabaseServer } from "@spt-diffpatch/servers/DatabaseServer";

@injectable()
export class GameEventHelper
{
    protected seasonalEventConfig: ISeasonalEventConfig;

    constructor(
        @inject("DatabaseServer") protected databaseServer: DatabaseServer,
        @inject("ConfigServer") protected configServer: ConfigServer,
    )
    {
        this.seasonalEventConfig = this.configServer.getConfig(ConfigTypes.SEASONAL_EVENT);
    }
}
