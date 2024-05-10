import { inject, injectable } from "tsyringe";

import { InsuranceController } from "@spt-diffpatch/controllers/InsuranceController";
import { OnUpdate } from "@spt-diffpatch/di/OnUpdate";
import { IPmcData } from "@spt-diffpatch/models/eft/common/IPmcData";
import { IGetBodyResponseData } from "@spt-diffpatch/models/eft/httpResponse/IGetBodyResponseData";
import { IGetInsuranceCostRequestData } from "@spt-diffpatch/models/eft/insurance/IGetInsuranceCostRequestData";
import { IGetInsuranceCostResponseData } from "@spt-diffpatch/models/eft/insurance/IGetInsuranceCostResponseData";
import { IInsureRequestData } from "@spt-diffpatch/models/eft/insurance/IInsureRequestData";
import { IItemEventRouterResponse } from "@spt-diffpatch/models/eft/itemEvent/IItemEventRouterResponse";
import { ConfigTypes } from "@spt-diffpatch/models/enums/ConfigTypes";
import { IInsuranceConfig } from "@spt-diffpatch/models/spt/config/IInsuranceConfig";
import { ConfigServer } from "@spt-diffpatch/servers/ConfigServer";
import { InsuranceService } from "@spt-diffpatch/services/InsuranceService";
import { HttpResponseUtil } from "@spt-diffpatch/utils/HttpResponseUtil";

@injectable()
export class InsuranceCallbacks implements OnUpdate
{
    protected insuranceConfig: IInsuranceConfig;
    constructor(
        @inject("InsuranceController") protected insuranceController: InsuranceController,
        @inject("InsuranceService") protected insuranceService: InsuranceService,
        @inject("HttpResponseUtil") protected httpResponse: HttpResponseUtil,
        @inject("ConfigServer") protected configServer: ConfigServer,
    )
    {
        this.insuranceConfig = this.configServer.getConfig(ConfigTypes.INSURANCE);
    }

    /**
     * Handle client/insurance/items/list/cost
     * @returns IGetInsuranceCostResponseData
     */
    public getInsuranceCost(
        url: string,
        info: IGetInsuranceCostRequestData,
        sessionID: string,
    ): IGetBodyResponseData<IGetInsuranceCostResponseData>
    {
        return this.httpResponse.getBody(this.insuranceController.cost(info, sessionID));
    }

    /**
     * Handle Insure event
     * @returns IItemEventRouterResponse
     */
    public insure(pmcData: IPmcData, body: IInsureRequestData, sessionID: string): IItemEventRouterResponse
    {
        return this.insuranceController.insure(pmcData, body, sessionID);
    }

    public async onUpdate(secondsSinceLastRun: number): Promise<boolean>
    {
        // People edit the config value to be 0 and break it, force value to no lower than 1
        if (secondsSinceLastRun > Math.max(this.insuranceConfig.runIntervalSeconds, 1))
        {
            this.insuranceController.processReturn();
            return true;
        }
        return false;
    }

    public getRoute(): string
    {
        return "aki-insurance";
    }
}
