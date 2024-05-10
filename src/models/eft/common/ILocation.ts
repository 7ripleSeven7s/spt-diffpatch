import { Exit, ILocationBase } from "@spt-diffpatch/models/eft/common/ILocationBase";
import { ILooseLoot } from "@spt-diffpatch/models/eft/common/ILooseLoot";

export interface ILocation
{
    base: ILocationBase;
    looseLoot: ILooseLoot;
    statics: IStaticContainer;
    allExtracts: Exit[];
}

export interface IStaticContainer
{
    containersGroups: Record<string, IContainerMinMax>;
    containers: Record<string, IContainerData>;
}

export interface IContainerMinMax
{
    minContainers: number;
    maxContainers: number;
    current?: number;
    chosenCount?: number;
}

export interface IContainerData
{
    groupId: string;
}
