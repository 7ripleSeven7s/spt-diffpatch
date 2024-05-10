import { inject, injectable } from "tsyringe";

import { OnLoad } from "@spt-diffpatch/di/OnLoad";
import { PostAkiModLoader } from "@spt-diffpatch/loaders/PostAkiModLoader";
import { ConfigTypes } from "@spt-diffpatch/models/enums/ConfigTypes";
import { IHttpConfig } from "@spt-diffpatch/models/spt/config/IHttpConfig";
import { ILogger } from "@spt-diffpatch/models/spt/utils/ILogger";
import { ConfigServer } from "@spt-diffpatch/servers/ConfigServer";
import { LocalisationService } from "@spt-diffpatch/services/LocalisationService";
import { HttpFileUtil } from "@spt-diffpatch/utils/HttpFileUtil";
import { HttpResponseUtil } from "@spt-diffpatch/utils/HttpResponseUtil";

@injectable()
export class ModCallbacks implements OnLoad
{
    protected httpConfig: IHttpConfig;

    constructor(
        @inject("WinstonLogger") protected logger: ILogger,
        @inject("HttpResponseUtil") protected httpResponse: HttpResponseUtil,
        @inject("HttpFileUtil") protected httpFileUtil: HttpFileUtil,
        @inject("PostAkiModLoader") protected postAkiModLoader: PostAkiModLoader,
        @inject("LocalisationService") protected localisationService: LocalisationService,
        @inject("ConfigServer") protected configServer: ConfigServer,
    )
    {
        this.httpConfig = this.configServer.getConfig(ConfigTypes.HTTP);
    }

    public async onLoad(): Promise<void>
    {
        if (globalThis.G_MODS_ENABLED)
        {
            await this.postAkiModLoader.load();
        }
    }

    public getRoute(): string
    {
        return "aki-mods";
    }
}
