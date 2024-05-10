import { DependencyContainer, Lifecycle } from "tsyringe";

import { AchievementCallbacks } from "@spt-diffpatch/callbacks/AchievementCallbacks";
import { BotCallbacks } from "@spt-diffpatch/callbacks/BotCallbacks";
import { BuildsCallbacks } from "@spt-diffpatch/callbacks/BuildsCallbacks";
import { BundleCallbacks } from "@spt-diffpatch/callbacks/BundleCallbacks";
import { ClientLogCallbacks } from "@spt-diffpatch/callbacks/ClientLogCallbacks";
import { CustomizationCallbacks } from "@spt-diffpatch/callbacks/CustomizationCallbacks";
import { DataCallbacks } from "@spt-diffpatch/callbacks/DataCallbacks";
import { DialogueCallbacks } from "@spt-diffpatch/callbacks/DialogueCallbacks";
import { GameCallbacks } from "@spt-diffpatch/callbacks/GameCallbacks";
import { HandbookCallbacks } from "@spt-diffpatch/callbacks/HandbookCallbacks";
import { HealthCallbacks } from "@spt-diffpatch/callbacks/HealthCallbacks";
import { HideoutCallbacks } from "@spt-diffpatch/callbacks/HideoutCallbacks";
import { HttpCallbacks } from "@spt-diffpatch/callbacks/HttpCallbacks";
import { InraidCallbacks } from "@spt-diffpatch/callbacks/InraidCallbacks";
import { InsuranceCallbacks } from "@spt-diffpatch/callbacks/InsuranceCallbacks";
import { InventoryCallbacks } from "@spt-diffpatch/callbacks/InventoryCallbacks";
import { ItemEventCallbacks } from "@spt-diffpatch/callbacks/ItemEventCallbacks";
import { LauncherCallbacks } from "@spt-diffpatch/callbacks/LauncherCallbacks";
import { LocationCallbacks } from "@spt-diffpatch/callbacks/LocationCallbacks";
import { MatchCallbacks } from "@spt-diffpatch/callbacks/MatchCallbacks";
import { ModCallbacks } from "@spt-diffpatch/callbacks/ModCallbacks";
import { NoteCallbacks } from "@spt-diffpatch/callbacks/NoteCallbacks";
import { NotifierCallbacks } from "@spt-diffpatch/callbacks/NotifierCallbacks";
import { PresetCallbacks } from "@spt-diffpatch/callbacks/PresetCallbacks";
import { ProfileCallbacks } from "@spt-diffpatch/callbacks/ProfileCallbacks";
import { QuestCallbacks } from "@spt-diffpatch/callbacks/QuestCallbacks";
import { RagfairCallbacks } from "@spt-diffpatch/callbacks/RagfairCallbacks";
import { RepairCallbacks } from "@spt-diffpatch/callbacks/RepairCallbacks";
import { SaveCallbacks } from "@spt-diffpatch/callbacks/SaveCallbacks";
import { TradeCallbacks } from "@spt-diffpatch/callbacks/TradeCallbacks";
import { TraderCallbacks } from "@spt-diffpatch/callbacks/TraderCallbacks";
import { WeatherCallbacks } from "@spt-diffpatch/callbacks/WeatherCallbacks";
import { WishlistCallbacks } from "@spt-diffpatch/callbacks/WishlistCallbacks";
import { ApplicationContext } from "@spt-diffpatch/context/ApplicationContext";
import { AchievementController } from "@spt-diffpatch/controllers/AchievementController";
import { BotController } from "@spt-diffpatch/controllers/BotController";
import { BuildController } from "@spt-diffpatch/controllers/BuildController";
import { ClientLogController } from "@spt-diffpatch/controllers/ClientLogController";
import { CustomizationController } from "@spt-diffpatch/controllers/CustomizationController";
import { DialogueController } from "@spt-diffpatch/controllers/DialogueController";
import { GameController } from "@spt-diffpatch/controllers/GameController";
import { HandbookController } from "@spt-diffpatch/controllers/HandbookController";
import { HealthController } from "@spt-diffpatch/controllers/HealthController";
import { HideoutController } from "@spt-diffpatch/controllers/HideoutController";
import { InraidController } from "@spt-diffpatch/controllers/InraidController";
import { InsuranceController } from "@spt-diffpatch/controllers/InsuranceController";
import { InventoryController } from "@spt-diffpatch/controllers/InventoryController";
import { LauncherController } from "@spt-diffpatch/controllers/LauncherController";
import { LocationController } from "@spt-diffpatch/controllers/LocationController";
import { MatchController } from "@spt-diffpatch/controllers/MatchController";
import { NoteController } from "@spt-diffpatch/controllers/NoteController";
import { NotifierController } from "@spt-diffpatch/controllers/NotifierController";
import { PresetController } from "@spt-diffpatch/controllers/PresetController";
import { ProfileController } from "@spt-diffpatch/controllers/ProfileController";
import { QuestController } from "@spt-diffpatch/controllers/QuestController";
import { RagfairController } from "@spt-diffpatch/controllers/RagfairController";
import { RepairController } from "@spt-diffpatch/controllers/RepairController";
import { RepeatableQuestController } from "@spt-diffpatch/controllers/RepeatableQuestController";
import { TradeController } from "@spt-diffpatch/controllers/TradeController";
import { TraderController } from "@spt-diffpatch/controllers/TraderController";
import { WeatherController } from "@spt-diffpatch/controllers/WeatherController";
import { WishlistController } from "@spt-diffpatch/controllers/WishlistController";
import { BotEquipmentModGenerator } from "@spt-diffpatch/generators/BotEquipmentModGenerator";
import { BotGenerator } from "@spt-diffpatch/generators/BotGenerator";
import { BotInventoryGenerator } from "@spt-diffpatch/generators/BotInventoryGenerator";
import { BotLevelGenerator } from "@spt-diffpatch/generators/BotLevelGenerator";
import { BotLootGenerator } from "@spt-diffpatch/generators/BotLootGenerator";
import { BotWeaponGenerator } from "@spt-diffpatch/generators/BotWeaponGenerator";
import { FenceBaseAssortGenerator } from "@spt-diffpatch/generators/FenceBaseAssortGenerator";
import { LocationGenerator } from "@spt-diffpatch/generators/LocationGenerator";
import { LootGenerator } from "@spt-diffpatch/generators/LootGenerator";
import { PMCLootGenerator } from "@spt-diffpatch/generators/PMCLootGenerator";
import { PlayerScavGenerator } from "@spt-diffpatch/generators/PlayerScavGenerator";
import { RagfairAssortGenerator } from "@spt-diffpatch/generators/RagfairAssortGenerator";
import { RagfairOfferGenerator } from "@spt-diffpatch/generators/RagfairOfferGenerator";
import { RepeatableQuestGenerator } from "@spt-diffpatch/generators/RepeatableQuestGenerator";
import { RepeatableQuestRewardGenerator } from "@spt-diffpatch/generators/RepeatableQuestRewardGenerator";
import { ScavCaseRewardGenerator } from "@spt-diffpatch/generators/ScavCaseRewardGenerator";
import { WeatherGenerator } from "@spt-diffpatch/generators/WeatherGenerator";
import { BarrelInventoryMagGen } from "@spt-diffpatch/generators/weapongen/implementations/BarrelInventoryMagGen";
import { ExternalInventoryMagGen } from "@spt-diffpatch/generators/weapongen/implementations/ExternalInventoryMagGen";
import { InternalMagazineInventoryMagGen } from "@spt-diffpatch/generators/weapongen/implementations/InternalMagazineInventoryMagGen";
import { UbglExternalMagGen } from "@spt-diffpatch/generators/weapongen/implementations/UbglExternalMagGen";
import { AssortHelper } from "@spt-diffpatch/helpers/AssortHelper";
import { BotDifficultyHelper } from "@spt-diffpatch/helpers/BotDifficultyHelper";
import { BotGeneratorHelper } from "@spt-diffpatch/helpers/BotGeneratorHelper";
import { BotHelper } from "@spt-diffpatch/helpers/BotHelper";
import { BotWeaponGeneratorHelper } from "@spt-diffpatch/helpers/BotWeaponGeneratorHelper";
import { ContainerHelper } from "@spt-diffpatch/helpers/ContainerHelper";
import { SptCommandoCommands } from "@spt-diffpatch/helpers/Dialogue/Commando/SptCommandoCommands";
import { GiveSptCommand } from "@spt-diffpatch/helpers/Dialogue/Commando/SptCommands/GiveCommand/GiveSptCommand";
import { ProfileSptCommand } from "@spt-diffpatch/helpers/Dialogue/Commando/SptCommands/ProfileCommand/ProfileSptCommand";
import { TraderSptCommand } from "@spt-diffpatch/helpers/Dialogue/Commando/SptCommands/TraderCommand/TraderSptCommand";
import { CommandoDialogueChatBot } from "@spt-diffpatch/helpers/Dialogue/CommandoDialogueChatBot";
import { SptDialogueChatBot } from "@spt-diffpatch/helpers/Dialogue/SptDialogueChatBot";
import { DialogueHelper } from "@spt-diffpatch/helpers/DialogueHelper";
import { DurabilityLimitsHelper } from "@spt-diffpatch/helpers/DurabilityLimitsHelper";
import { GameEventHelper } from "@spt-diffpatch/helpers/GameEventHelper";
import { HandbookHelper } from "@spt-diffpatch/helpers/HandbookHelper";
import { HealthHelper } from "@spt-diffpatch/helpers/HealthHelper";
import { HideoutHelper } from "@spt-diffpatch/helpers/HideoutHelper";
import { HttpServerHelper } from "@spt-diffpatch/helpers/HttpServerHelper";
import { InRaidHelper } from "@spt-diffpatch/helpers/InRaidHelper";
import { InventoryHelper } from "@spt-diffpatch/helpers/InventoryHelper";
import { ItemHelper } from "@spt-diffpatch/helpers/ItemHelper";
import { NotificationSendHelper } from "@spt-diffpatch/helpers/NotificationSendHelper";
import { NotifierHelper } from "@spt-diffpatch/helpers/NotifierHelper";
import { PaymentHelper } from "@spt-diffpatch/helpers/PaymentHelper";
import { PresetHelper } from "@spt-diffpatch/helpers/PresetHelper";
import { ProbabilityHelper } from "@spt-diffpatch/helpers/ProbabilityHelper";
import { ProfileHelper } from "@spt-diffpatch/helpers/ProfileHelper";
import { QuestConditionHelper } from "@spt-diffpatch/helpers/QuestConditionHelper";
import { QuestHelper } from "@spt-diffpatch/helpers/QuestHelper";
import { RagfairHelper } from "@spt-diffpatch/helpers/RagfairHelper";
import { RagfairOfferHelper } from "@spt-diffpatch/helpers/RagfairOfferHelper";
import { RagfairSellHelper } from "@spt-diffpatch/helpers/RagfairSellHelper";
import { RagfairServerHelper } from "@spt-diffpatch/helpers/RagfairServerHelper";
import { RagfairSortHelper } from "@spt-diffpatch/helpers/RagfairSortHelper";
import { RepairHelper } from "@spt-diffpatch/helpers/RepairHelper";
import { RepeatableQuestHelper } from "@spt-diffpatch/helpers/RepeatableQuestHelper";
import { SecureContainerHelper } from "@spt-diffpatch/helpers/SecureContainerHelper";
import { TradeHelper } from "@spt-diffpatch/helpers/TradeHelper";
import { TraderAssortHelper } from "@spt-diffpatch/helpers/TraderAssortHelper";
import { TraderHelper } from "@spt-diffpatch/helpers/TraderHelper";
import { UtilityHelper } from "@spt-diffpatch/helpers/UtilityHelper";
import { WeightedRandomHelper } from "@spt-diffpatch/helpers/WeightedRandomHelper";
import { BundleLoader } from "@spt-diffpatch/loaders/BundleLoader";
import { ModLoadOrder } from "@spt-diffpatch/loaders/ModLoadOrder";
import { ModTypeCheck } from "@spt-diffpatch/loaders/ModTypeCheck";
import { PostAkiModLoader } from "@spt-diffpatch/loaders/PostAkiModLoader";
import { PostDBModLoader } from "@spt-diffpatch/loaders/PostDBModLoader";
import { PreAkiModLoader } from "@spt-diffpatch/loaders/PreAkiModLoader";
import { IAsyncQueue } from "@spt-diffpatch/models/spt/utils/IAsyncQueue";
import { EventOutputHolder } from "@spt-diffpatch/routers/EventOutputHolder";
import { HttpRouter } from "@spt-diffpatch/routers/HttpRouter";
import { ImageRouter } from "@spt-diffpatch/routers/ImageRouter";
import { ItemEventRouter } from "@spt-diffpatch/routers/ItemEventRouter";
import { BotDynamicRouter } from "@spt-diffpatch/routers/dynamic/BotDynamicRouter";
import { BundleDynamicRouter } from "@spt-diffpatch/routers/dynamic/BundleDynamicRouter";
import { CustomizationDynamicRouter } from "@spt-diffpatch/routers/dynamic/CustomizationDynamicRouter";
import { DataDynamicRouter } from "@spt-diffpatch/routers/dynamic/DataDynamicRouter";
import { HttpDynamicRouter } from "@spt-diffpatch/routers/dynamic/HttpDynamicRouter";
import { InraidDynamicRouter } from "@spt-diffpatch/routers/dynamic/InraidDynamicRouter";
import { LocationDynamicRouter } from "@spt-diffpatch/routers/dynamic/LocationDynamicRouter";
import { NotifierDynamicRouter } from "@spt-diffpatch/routers/dynamic/NotifierDynamicRouter";
import { TraderDynamicRouter } from "@spt-diffpatch/routers/dynamic/TraderDynamicRouter";
import { CustomizationItemEventRouter } from "@spt-diffpatch/routers/item_events/CustomizationItemEventRouter";
import { HealthItemEventRouter } from "@spt-diffpatch/routers/item_events/HealthItemEventRouter";
import { HideoutItemEventRouter } from "@spt-diffpatch/routers/item_events/HideoutItemEventRouter";
import { InsuranceItemEventRouter } from "@spt-diffpatch/routers/item_events/InsuranceItemEventRouter";
import { InventoryItemEventRouter } from "@spt-diffpatch/routers/item_events/InventoryItemEventRouter";
import { NoteItemEventRouter } from "@spt-diffpatch/routers/item_events/NoteItemEventRouter";
import { QuestItemEventRouter } from "@spt-diffpatch/routers/item_events/QuestItemEventRouter";
import { RagfairItemEventRouter } from "@spt-diffpatch/routers/item_events/RagfairItemEventRouter";
import { RepairItemEventRouter } from "@spt-diffpatch/routers/item_events/RepairItemEventRouter";
import { TradeItemEventRouter } from "@spt-diffpatch/routers/item_events/TradeItemEventRouter";
import { WishlistItemEventRouter } from "@spt-diffpatch/routers/item_events/WishlistItemEventRouter";
import { HealthSaveLoadRouter } from "@spt-diffpatch/routers/save_load/HealthSaveLoadRouter";
import { InraidSaveLoadRouter } from "@spt-diffpatch/routers/save_load/InraidSaveLoadRouter";
import { InsuranceSaveLoadRouter } from "@spt-diffpatch/routers/save_load/InsuranceSaveLoadRouter";
import { ProfileSaveLoadRouter } from "@spt-diffpatch/routers/save_load/ProfileSaveLoadRouter";
import { BundleSerializer } from "@spt-diffpatch/routers/serializers/BundleSerializer";
import { ImageSerializer } from "@spt-diffpatch/routers/serializers/ImageSerializer";
import { NotifySerializer } from "@spt-diffpatch/routers/serializers/NotifySerializer";
import { AchievementStaticRouter } from "@spt-diffpatch/routers/static/AchievementStaticRouter";
import { BotStaticRouter } from "@spt-diffpatch/routers/static/BotStaticRouter";
import { BuildsStaticRouter } from "@spt-diffpatch/routers/static/BuildStaticRouter";
import { BundleStaticRouter } from "@spt-diffpatch/routers/static/BundleStaticRouter";
import { ClientLogStaticRouter } from "@spt-diffpatch/routers/static/ClientLogStaticRouter";
import { CustomizationStaticRouter } from "@spt-diffpatch/routers/static/CustomizationStaticRouter";
import { DataStaticRouter } from "@spt-diffpatch/routers/static/DataStaticRouter";
import { DialogStaticRouter } from "@spt-diffpatch/routers/static/DialogStaticRouter";
import { GameStaticRouter } from "@spt-diffpatch/routers/static/GameStaticRouter";
import { HealthStaticRouter } from "@spt-diffpatch/routers/static/HealthStaticRouter";
import { InraidStaticRouter } from "@spt-diffpatch/routers/static/InraidStaticRouter";
import { InsuranceStaticRouter } from "@spt-diffpatch/routers/static/InsuranceStaticRouter";
import { ItemEventStaticRouter } from "@spt-diffpatch/routers/static/ItemEventStaticRouter";
import { LauncherStaticRouter } from "@spt-diffpatch/routers/static/LauncherStaticRouter";
import { LocationStaticRouter } from "@spt-diffpatch/routers/static/LocationStaticRouter";
import { MatchStaticRouter } from "@spt-diffpatch/routers/static/MatchStaticRouter";
import { NotifierStaticRouter } from "@spt-diffpatch/routers/static/NotifierStaticRouter";
import { ProfileStaticRouter } from "@spt-diffpatch/routers/static/ProfileStaticRouter";
import { QuestStaticRouter } from "@spt-diffpatch/routers/static/QuestStaticRouter";
import { RagfairStaticRouter } from "@spt-diffpatch/routers/static/RagfairStaticRouter";
import { TraderStaticRouter } from "@spt-diffpatch/routers/static/TraderStaticRouter";
import { WeatherStaticRouter } from "@spt-diffpatch/routers/static/WeatherStaticRouter";
import { ConfigServer } from "@spt-diffpatch/servers/ConfigServer";
import { DatabaseServer } from "@spt-diffpatch/servers/DatabaseServer";
import { HttpServer } from "@spt-diffpatch/servers/HttpServer";
import { RagfairServer } from "@spt-diffpatch/servers/RagfairServer";
import { SaveServer } from "@spt-diffpatch/servers/SaveServer";
import { WebSocketServer } from "@spt-diffpatch/servers/WebSocketServer";
import { AkiHttpListener } from "@spt-diffpatch/servers/http/AkiHttpListener";
import { BotEquipmentFilterService } from "@spt-diffpatch/services/BotEquipmentFilterService";
import { BotEquipmentModPoolService } from "@spt-diffpatch/services/BotEquipmentModPoolService";
import { BotGenerationCacheService } from "@spt-diffpatch/services/BotGenerationCacheService";
import { BotLootCacheService } from "@spt-diffpatch/services/BotLootCacheService";
import { BotWeaponModLimitService } from "@spt-diffpatch/services/BotWeaponModLimitService";
import { CustomLocationWaveService } from "@spt-diffpatch/services/CustomLocationWaveService";
import { FenceService } from "@spt-diffpatch/services/FenceService";
import { GiftService } from "@spt-diffpatch/services/GiftService";
import { InsuranceService } from "@spt-diffpatch/services/InsuranceService";
import { ItemBaseClassService } from "@spt-diffpatch/services/ItemBaseClassService";
import { ItemFilterService } from "@spt-diffpatch/services/ItemFilterService";
import { LocaleService } from "@spt-diffpatch/services/LocaleService";
import { LocalisationService } from "@spt-diffpatch/services/LocalisationService";
import { MailSendService } from "@spt-diffpatch/services/MailSendService";
import { MatchBotDetailsCacheService } from "@spt-diffpatch/services/MatchBotDetailsCacheService";
import { MatchLocationService } from "@spt-diffpatch/services/MatchLocationService";
import { ModCompilerService } from "@spt-diffpatch/services/ModCompilerService";
import { NotificationService } from "@spt-diffpatch/services/NotificationService";
import { OpenZoneService } from "@spt-diffpatch/services/OpenZoneService";
import { PaymentService } from "@spt-diffpatch/services/PaymentService";
import { PlayerService } from "@spt-diffpatch/services/PlayerService";
import { PmcChatResponseService } from "@spt-diffpatch/services/PmcChatResponseService";
import { ProfileActivityService } from "@spt-diffpatch/services/ProfileActivityService";
import { ProfileFixerService } from "@spt-diffpatch/services/ProfileFixerService";
import { ProfileSnapshotService } from "@spt-diffpatch/services/ProfileSnapshotService";
import { RagfairCategoriesService } from "@spt-diffpatch/services/RagfairCategoriesService";
import { RagfairLinkedItemService } from "@spt-diffpatch/services/RagfairLinkedItemService";
import { RagfairOfferService } from "@spt-diffpatch/services/RagfairOfferService";
import { RagfairPriceService } from "@spt-diffpatch/services/RagfairPriceService";
import { RagfairRequiredItemsService } from "@spt-diffpatch/services/RagfairRequiredItemsService";
import { RagfairTaxService } from "@spt-diffpatch/services/RagfairTaxService";
import { RaidTimeAdjustmentService } from "@spt-diffpatch/services/RaidTimeAdjustmentService";
import { RepairService } from "@spt-diffpatch/services/RepairService";
import { SeasonalEventService } from "@spt-diffpatch/services/SeasonalEventService";
import { TraderAssortService } from "@spt-diffpatch/services/TraderAssortService";
import { TraderPurchasePersisterService } from "@spt-diffpatch/services/TraderPurchasePersisterService";
import { TraderServicesService } from "@spt-diffpatch/services/TraderServicesService";
import { BundleHashCacheService } from "@spt-diffpatch/services/cache/BundleHashCacheService";
import { ModHashCacheService } from "@spt-diffpatch/services/cache/ModHashCacheService";
import { CustomItemService } from "@spt-diffpatch/services/mod/CustomItemService";
import { DynamicRouterModService } from "@spt-diffpatch/services/mod/dynamicRouter/DynamicRouterModService";
import { HttpListenerModService } from "@spt-diffpatch/services/mod/httpListener/HttpListenerModService";
import { ImageRouteService } from "@spt-diffpatch/services/mod/image/ImageRouteService";
import { OnLoadModService } from "@spt-diffpatch/services/mod/onLoad/OnLoadModService";
import { OnUpdateModService } from "@spt-diffpatch/services/mod/onUpdate/OnUpdateModService";
import { StaticRouterModService } from "@spt-diffpatch/services/mod/staticRouter/StaticRouterModService";
import { App } from "@spt-diffpatch/utils/App";
import { AsyncQueue } from "@spt-diffpatch/utils/AsyncQueue";
import { CompareUtil } from "@spt-diffpatch/utils/CompareUtil";
import { DatabaseImporter } from "@spt-diffpatch/utils/DatabaseImporter";
import { EncodingUtil } from "@spt-diffpatch/utils/EncodingUtil";
import { HashUtil } from "@spt-diffpatch/utils/HashUtil";
import { HttpFileUtil } from "@spt-diffpatch/utils/HttpFileUtil";
import { HttpResponseUtil } from "@spt-diffpatch/utils/HttpResponseUtil";
import { ImporterUtil } from "@spt-diffpatch/utils/ImporterUtil";
import { JsonUtil } from "@spt-diffpatch/utils/JsonUtil";
import { MathUtil } from "@spt-diffpatch/utils/MathUtil";
import { ObjectId } from "@spt-diffpatch/utils/ObjectId";
import { RandomUtil } from "@spt-diffpatch/utils/RandomUtil";
import { TimeUtil } from "@spt-diffpatch/utils/TimeUtil";
import { VFS } from "@spt-diffpatch/utils/VFS";
import { Watermark, WatermarkLocale } from "@spt-diffpatch/utils/Watermark";
import { WinstonMainLogger } from "@spt-diffpatch/utils/logging/WinstonMainLogger";
import { WinstonRequestLogger } from "@spt-diffpatch/utils/logging/WinstonRequestLogger";

/**
 * Handle the registration of classes to be used by the Dependency Injection code
 */
export class Container
{
    public static registerPostLoadTypes(container: DependencyContainer, childContainer: DependencyContainer): void
    {
        container.register<AkiHttpListener>("AkiHttpListener", AkiHttpListener, { lifecycle: Lifecycle.Singleton });
        childContainer.registerType("HttpListener", "AkiHttpListener");
    }

    public static registerTypes(depContainer: DependencyContainer): void
    {
        depContainer.register("ApplicationContext", ApplicationContext, { lifecycle: Lifecycle.Singleton });
        Container.registerUtils(depContainer);

        Container.registerRouters(depContainer);

        Container.registerGenerators(depContainer);

        Container.registerHelpers(depContainer);

        Container.registerLoaders(depContainer);

        Container.registerCallbacks(depContainer);

        Container.registerServers(depContainer);

        Container.registerServices(depContainer);

        Container.registerControllers(depContainer);
    }

    public static registerListTypes(depContainer: DependencyContainer): void
    {
        depContainer.register("OnLoadModService", { useValue: new OnLoadModService(depContainer) });
        depContainer.register("HttpListenerModService", { useValue: new HttpListenerModService(depContainer) });
        depContainer.register("OnUpdateModService", { useValue: new OnUpdateModService(depContainer) });
        depContainer.register("DynamicRouterModService", { useValue: new DynamicRouterModService(depContainer) });
        depContainer.register("StaticRouterModService", { useValue: new StaticRouterModService(depContainer) });

        depContainer.registerType("OnLoad", "DatabaseImporter");
        depContainer.registerType("OnLoad", "PostDBModLoader");
        depContainer.registerType("OnLoad", "HandbookCallbacks");
        depContainer.registerType("OnLoad", "HttpCallbacks");
        depContainer.registerType("OnLoad", "PresetCallbacks");
        depContainer.registerType("OnLoad", "SaveCallbacks");
        depContainer.registerType("OnLoad", "TraderCallbacks"); // must occur prior to RagfairCallbacks
        depContainer.registerType("OnLoad", "RagfairPriceService");
        depContainer.registerType("OnLoad", "RagfairCallbacks");
        depContainer.registerType("OnLoad", "ModCallbacks");
        depContainer.registerType("OnLoad", "GameCallbacks");
        depContainer.registerType("OnUpdate", "DialogueCallbacks");
        depContainer.registerType("OnUpdate", "HideoutCallbacks");
        depContainer.registerType("OnUpdate", "TraderCallbacks");
        depContainer.registerType("OnUpdate", "RagfairCallbacks");
        depContainer.registerType("OnUpdate", "InsuranceCallbacks");
        depContainer.registerType("OnUpdate", "SaveCallbacks");

        depContainer.registerType("StaticRoutes", "BotStaticRouter");
        depContainer.registerType("StaticRoutes", "ClientLogStaticRouter");
        depContainer.registerType("StaticRoutes", "CustomizationStaticRouter");
        depContainer.registerType("StaticRoutes", "DataStaticRouter");
        depContainer.registerType("StaticRoutes", "DialogStaticRouter");
        depContainer.registerType("StaticRoutes", "GameStaticRouter");
        depContainer.registerType("StaticRoutes", "HealthStaticRouter");
        depContainer.registerType("StaticRoutes", "InraidStaticRouter");
        depContainer.registerType("StaticRoutes", "InsuranceStaticRouter");
        depContainer.registerType("StaticRoutes", "ItemEventStaticRouter");
        depContainer.registerType("StaticRoutes", "LauncherStaticRouter");
        depContainer.registerType("StaticRoutes", "LocationStaticRouter");
        depContainer.registerType("StaticRoutes", "WeatherStaticRouter");
        depContainer.registerType("StaticRoutes", "MatchStaticRouter");
        depContainer.registerType("StaticRoutes", "QuestStaticRouter");
        depContainer.registerType("StaticRoutes", "RagfairStaticRouter");
        depContainer.registerType("StaticRoutes", "BundleStaticRouter");
        depContainer.registerType("StaticRoutes", "AchievementStaticRouter");
        depContainer.registerType("StaticRoutes", "BuildsStaticRouter");
        depContainer.registerType("StaticRoutes", "NotifierStaticRouter");
        depContainer.registerType("StaticRoutes", "ProfileStaticRouter");
        depContainer.registerType("StaticRoutes", "TraderStaticRouter");
        depContainer.registerType("DynamicRoutes", "BotDynamicRouter");
        depContainer.registerType("DynamicRoutes", "BundleDynamicRouter");
        depContainer.registerType("DynamicRoutes", "CustomizationDynamicRouter");
        depContainer.registerType("DynamicRoutes", "DataDynamicRouter");
        depContainer.registerType("DynamicRoutes", "HttpDynamicRouter");
        depContainer.registerType("DynamicRoutes", "InraidDynamicRouter");
        depContainer.registerType("DynamicRoutes", "LocationDynamicRouter");
        depContainer.registerType("DynamicRoutes", "NotifierDynamicRouter");
        depContainer.registerType("DynamicRoutes", "TraderDynamicRouter");

        depContainer.registerType("IERouters", "CustomizationItemEventRouter");
        depContainer.registerType("IERouters", "HealthItemEventRouter");
        depContainer.registerType("IERouters", "HideoutItemEventRouter");
        depContainer.registerType("IERouters", "InsuranceItemEventRouter");
        depContainer.registerType("IERouters", "InventoryItemEventRouter");
        depContainer.registerType("IERouters", "NoteItemEventRouter");
        depContainer.registerType("IERouters", "QuestItemEventRouter");
        depContainer.registerType("IERouters", "RagfairItemEventRouter");
        depContainer.registerType("IERouters", "RepairItemEventRouter");
        depContainer.registerType("IERouters", "TradeItemEventRouter");
        depContainer.registerType("IERouters", "WishlistItemEventRouter");

        depContainer.registerType("Serializer", "ImageSerializer");
        depContainer.registerType("Serializer", "BundleSerializer");
        depContainer.registerType("Serializer", "NotifySerializer");
        depContainer.registerType("SaveLoadRouter", "HealthSaveLoadRouter");
        depContainer.registerType("SaveLoadRouter", "InraidSaveLoadRouter");
        depContainer.registerType("SaveLoadRouter", "InsuranceSaveLoadRouter");
        depContainer.registerType("SaveLoadRouter", "ProfileSaveLoadRouter");

        // Chat Bots
        depContainer.registerType("DialogueChatBot", "SptDialogueChatBot");
        depContainer.registerType("DialogueChatBot", "CommandoDialogueChatBot");

        // Commando Commands
        depContainer.registerType("CommandoCommand", "SptCommandoCommands");

        // SptCommando Commands
        depContainer.registerType("SptCommand", "GiveSptCommand");
        depContainer.registerType("SptCommand", "TraderSptCommand");
        depContainer.registerType("SptCommand", "ProfileSptCommand");
    }

    private static registerUtils(depContainer: DependencyContainer): void
    {
        // Utils
        depContainer.register<App>("App", App, { lifecycle: Lifecycle.Singleton });
        depContainer.register<DatabaseImporter>("DatabaseImporter", DatabaseImporter, {
            lifecycle: Lifecycle.Singleton,
        });
        depContainer.register<HashUtil>("HashUtil", HashUtil, { lifecycle: Lifecycle.Singleton });
        depContainer.register<ImporterUtil>("ImporterUtil", ImporterUtil, { lifecycle: Lifecycle.Singleton });
        depContainer.register<HttpResponseUtil>("HttpResponseUtil", HttpResponseUtil);
        depContainer.register<EncodingUtil>("EncodingUtil", EncodingUtil, { lifecycle: Lifecycle.Singleton });
        depContainer.register<JsonUtil>("JsonUtil", JsonUtil);
        depContainer.register<WinstonMainLogger>("WinstonLogger", WinstonMainLogger, {
            lifecycle: Lifecycle.Singleton,
        });
        depContainer.register<WinstonRequestLogger>("RequestsLogger", WinstonRequestLogger, {
            lifecycle: Lifecycle.Singleton,
        });
        depContainer.register<MathUtil>("MathUtil", MathUtil, { lifecycle: Lifecycle.Singleton });
        depContainer.register<ObjectId>("ObjectId", ObjectId);
        depContainer.register<RandomUtil>("RandomUtil", RandomUtil, { lifecycle: Lifecycle.Singleton });
        depContainer.register<TimeUtil>("TimeUtil", TimeUtil, { lifecycle: Lifecycle.Singleton });
        depContainer.register<VFS>("VFS", VFS, { lifecycle: Lifecycle.Singleton });
        depContainer.register<WatermarkLocale>("WatermarkLocale", WatermarkLocale, { lifecycle: Lifecycle.Singleton });
        depContainer.register<Watermark>("Watermark", Watermark, { lifecycle: Lifecycle.Singleton });
        depContainer.register<IAsyncQueue>("AsyncQueue", AsyncQueue, { lifecycle: Lifecycle.Singleton });
        depContainer.register<HttpFileUtil>("HttpFileUtil", HttpFileUtil, { lifecycle: Lifecycle.Singleton });
        depContainer.register<ModLoadOrder>("ModLoadOrder", ModLoadOrder, { lifecycle: Lifecycle.Singleton });
        depContainer.register<ModTypeCheck>("ModTypeCheck", ModTypeCheck, { lifecycle: Lifecycle.Singleton });
        depContainer.register<CompareUtil>("CompareUtil", CompareUtil, { lifecycle: Lifecycle.Singleton });
    }

    private static registerRouters(depContainer: DependencyContainer): void
    {
        // Routers
        depContainer.register<HttpRouter>("HttpRouter", HttpRouter, { lifecycle: Lifecycle.Singleton });
        depContainer.register<ImageRouter>("ImageRouter", ImageRouter);
        depContainer.register<EventOutputHolder>("EventOutputHolder", EventOutputHolder, {
            lifecycle: Lifecycle.Singleton,
        });
        depContainer.register<ItemEventRouter>("ItemEventRouter", ItemEventRouter);

        // Dynamic routes
        depContainer.register<BotDynamicRouter>("BotDynamicRouter", { useClass: BotDynamicRouter });
        depContainer.register<BundleDynamicRouter>("BundleDynamicRouter", { useClass: BundleDynamicRouter });
        depContainer.register<CustomizationDynamicRouter>("CustomizationDynamicRouter", {
            useClass: CustomizationDynamicRouter,
        });
        depContainer.register<DataDynamicRouter>("DataDynamicRouter", { useClass: DataDynamicRouter });
        depContainer.register<HttpDynamicRouter>("HttpDynamicRouter", { useClass: HttpDynamicRouter });
        depContainer.register<InraidDynamicRouter>("InraidDynamicRouter", { useClass: InraidDynamicRouter });
        depContainer.register<LocationDynamicRouter>("LocationDynamicRouter", { useClass: LocationDynamicRouter });
        depContainer.register<NotifierDynamicRouter>("NotifierDynamicRouter", { useClass: NotifierDynamicRouter });
        depContainer.register<TraderDynamicRouter>("TraderDynamicRouter", { useClass: TraderDynamicRouter });

        // Item event routes
        depContainer.register<CustomizationItemEventRouter>("CustomizationItemEventRouter", {
            useClass: CustomizationItemEventRouter,
        });
        depContainer.register<HealthItemEventRouter>("HealthItemEventRouter", { useClass: HealthItemEventRouter });
        depContainer.register<HideoutItemEventRouter>("HideoutItemEventRouter", { useClass: HideoutItemEventRouter });
        depContainer.register<InsuranceItemEventRouter>("InsuranceItemEventRouter", {
            useClass: InsuranceItemEventRouter,
        });
        depContainer.register<InventoryItemEventRouter>("InventoryItemEventRouter", {
            useClass: InventoryItemEventRouter,
        });
        depContainer.register<NoteItemEventRouter>("NoteItemEventRouter", { useClass: NoteItemEventRouter });
        depContainer.register<QuestItemEventRouter>("QuestItemEventRouter", { useClass: QuestItemEventRouter });
        depContainer.register<RagfairItemEventRouter>("RagfairItemEventRouter", { useClass: RagfairItemEventRouter });
        depContainer.register<RepairItemEventRouter>("RepairItemEventRouter", { useClass: RepairItemEventRouter });
        depContainer.register<TradeItemEventRouter>("TradeItemEventRouter", { useClass: TradeItemEventRouter });
        depContainer.register<WishlistItemEventRouter>("WishlistItemEventRouter", {
            useClass: WishlistItemEventRouter,
        });

        // save load routes
        depContainer.register<HealthSaveLoadRouter>("HealthSaveLoadRouter", { useClass: HealthSaveLoadRouter });
        depContainer.register<InraidSaveLoadRouter>("InraidSaveLoadRouter", { useClass: InraidSaveLoadRouter });
        depContainer.register<InsuranceSaveLoadRouter>("InsuranceSaveLoadRouter", {
            useClass: InsuranceSaveLoadRouter,
        });
        depContainer.register<ProfileSaveLoadRouter>("ProfileSaveLoadRouter", { useClass: ProfileSaveLoadRouter });

        // Route serializers
        depContainer.register<BundleSerializer>("BundleSerializer", { useClass: BundleSerializer });
        depContainer.register<ImageSerializer>("ImageSerializer", { useClass: ImageSerializer });
        depContainer.register<NotifySerializer>("NotifySerializer", { useClass: NotifySerializer });

        // Static routes
        depContainer.register<BotStaticRouter>("BotStaticRouter", { useClass: BotStaticRouter });
        depContainer.register<BundleStaticRouter>("BundleStaticRouter", { useClass: BundleStaticRouter });
        depContainer.register<ClientLogStaticRouter>("ClientLogStaticRouter", { useClass: ClientLogStaticRouter });
        depContainer.register<CustomizationStaticRouter>("CustomizationStaticRouter", {
            useClass: CustomizationStaticRouter,
        });
        depContainer.register<DataStaticRouter>("DataStaticRouter", { useClass: DataStaticRouter });
        depContainer.register<DialogStaticRouter>("DialogStaticRouter", { useClass: DialogStaticRouter });
        depContainer.register<GameStaticRouter>("GameStaticRouter", { useClass: GameStaticRouter });
        depContainer.register<HealthStaticRouter>("HealthStaticRouter", { useClass: HealthStaticRouter });
        depContainer.register<InraidStaticRouter>("InraidStaticRouter", { useClass: InraidStaticRouter });
        depContainer.register<InsuranceStaticRouter>("InsuranceStaticRouter", { useClass: InsuranceStaticRouter });
        depContainer.register<ItemEventStaticRouter>("ItemEventStaticRouter", { useClass: ItemEventStaticRouter });
        depContainer.register<LauncherStaticRouter>("LauncherStaticRouter", { useClass: LauncherStaticRouter });
        depContainer.register<LocationStaticRouter>("LocationStaticRouter", { useClass: LocationStaticRouter });
        depContainer.register<MatchStaticRouter>("MatchStaticRouter", { useClass: MatchStaticRouter });
        depContainer.register<NotifierStaticRouter>("NotifierStaticRouter", { useClass: NotifierStaticRouter });
        depContainer.register<ProfileStaticRouter>("ProfileStaticRouter", { useClass: ProfileStaticRouter });
        depContainer.register<QuestStaticRouter>("QuestStaticRouter", { useClass: QuestStaticRouter });
        depContainer.register<RagfairStaticRouter>("RagfairStaticRouter", { useClass: RagfairStaticRouter });
        depContainer.register<TraderStaticRouter>("TraderStaticRouter", { useClass: TraderStaticRouter });
        depContainer.register<WeatherStaticRouter>("WeatherStaticRouter", { useClass: WeatherStaticRouter });
        depContainer.register<AchievementStaticRouter>("AchievementStaticRouter", {
            useClass: AchievementStaticRouter,
        });
        depContainer.register<BuildsStaticRouter>("BuildsStaticRouter", { useClass: BuildsStaticRouter });
    }

    private static registerGenerators(depContainer: DependencyContainer): void
    {
        // Generators
        depContainer.register<BotGenerator>("BotGenerator", BotGenerator);
        depContainer.register<BotWeaponGenerator>("BotWeaponGenerator", BotWeaponGenerator);
        depContainer.register<BotLootGenerator>("BotLootGenerator", BotLootGenerator);
        depContainer.register<BotInventoryGenerator>("BotInventoryGenerator", BotInventoryGenerator);
        depContainer.register<LocationGenerator>("LocationGenerator", { useClass: LocationGenerator });
        depContainer.register<PMCLootGenerator>("PMCLootGenerator", PMCLootGenerator, {
            lifecycle: Lifecycle.Singleton,
        });
        depContainer.register<ScavCaseRewardGenerator>("ScavCaseRewardGenerator", ScavCaseRewardGenerator, {
            lifecycle: Lifecycle.Singleton,
        });
        depContainer.register<RagfairAssortGenerator>("RagfairAssortGenerator", { useClass: RagfairAssortGenerator });
        depContainer.register<RagfairOfferGenerator>("RagfairOfferGenerator", { useClass: RagfairOfferGenerator });
        depContainer.register<WeatherGenerator>("WeatherGenerator", { useClass: WeatherGenerator });
        depContainer.register<PlayerScavGenerator>("PlayerScavGenerator", { useClass: PlayerScavGenerator });
        depContainer.register<LootGenerator>("LootGenerator", { useClass: LootGenerator });
        depContainer.register<FenceBaseAssortGenerator>("FenceBaseAssortGenerator", {
            useClass: FenceBaseAssortGenerator,
        });
        depContainer.register<BotLevelGenerator>("BotLevelGenerator", { useClass: BotLevelGenerator });
        depContainer.register<BotEquipmentModGenerator>("BotEquipmentModGenerator", {
            useClass: BotEquipmentModGenerator,
        });
        depContainer.register<RepeatableQuestGenerator>("RepeatableQuestGenerator", {
            useClass: RepeatableQuestGenerator,
        });
        depContainer.register<RepeatableQuestRewardGenerator>("RepeatableQuestRewardGenerator", {
            useClass: RepeatableQuestRewardGenerator,
        });

        depContainer.register<BarrelInventoryMagGen>("BarrelInventoryMagGen", { useClass: BarrelInventoryMagGen });
        depContainer.register<ExternalInventoryMagGen>("ExternalInventoryMagGen", {
            useClass: ExternalInventoryMagGen,
        });
        depContainer.register<InternalMagazineInventoryMagGen>("InternalMagazineInventoryMagGen", {
            useClass: InternalMagazineInventoryMagGen,
        });
        depContainer.register<UbglExternalMagGen>("UbglExternalMagGen", { useClass: UbglExternalMagGen });

        depContainer.registerType("InventoryMagGen", "BarrelInventoryMagGen");
        depContainer.registerType("InventoryMagGen", "ExternalInventoryMagGen");
        depContainer.registerType("InventoryMagGen", "InternalMagazineInventoryMagGen");
        depContainer.registerType("InventoryMagGen", "UbglExternalMagGen");
    }

    private static registerHelpers(depContainer: DependencyContainer): void
    {
        // Helpers
        depContainer.register<AssortHelper>("AssortHelper", { useClass: AssortHelper });
        depContainer.register<BotHelper>("BotHelper", { useClass: BotHelper });
        depContainer.register<BotGeneratorHelper>("BotGeneratorHelper", { useClass: BotGeneratorHelper });
        depContainer.register<ContainerHelper>("ContainerHelper", ContainerHelper);
        depContainer.register<DialogueHelper>("DialogueHelper", { useClass: DialogueHelper });
        depContainer.register<DurabilityLimitsHelper>("DurabilityLimitsHelper", { useClass: DurabilityLimitsHelper });
        depContainer.register<GameEventHelper>("GameEventHelper", GameEventHelper);
        depContainer.register<HandbookHelper>("HandbookHelper", HandbookHelper, { lifecycle: Lifecycle.Singleton });
        depContainer.register<HealthHelper>("HealthHelper", { useClass: HealthHelper });
        depContainer.register<HideoutHelper>("HideoutHelper", { useClass: HideoutHelper });
        depContainer.register<InRaidHelper>("InRaidHelper", { useClass: InRaidHelper });
        depContainer.register<InventoryHelper>("InventoryHelper", { useClass: InventoryHelper });
        depContainer.register<PaymentHelper>("PaymentHelper", PaymentHelper);
        depContainer.register<ItemHelper>("ItemHelper", { useClass: ItemHelper });
        depContainer.register<PresetHelper>("PresetHelper", PresetHelper, { lifecycle: Lifecycle.Singleton });
        depContainer.register<ProfileHelper>("ProfileHelper", { useClass: ProfileHelper });
        depContainer.register<QuestHelper>("QuestHelper", { useClass: QuestHelper });
        depContainer.register<QuestConditionHelper>("QuestConditionHelper", QuestConditionHelper);
        depContainer.register<RagfairHelper>("RagfairHelper", { useClass: RagfairHelper });
        depContainer.register<RagfairSortHelper>("RagfairSortHelper", { useClass: RagfairSortHelper });
        depContainer.register<RagfairSellHelper>("RagfairSellHelper", { useClass: RagfairSellHelper });
        depContainer.register<RagfairOfferHelper>("RagfairOfferHelper", { useClass: RagfairOfferHelper });
        depContainer.register<RagfairServerHelper>("RagfairServerHelper", { useClass: RagfairServerHelper });
        depContainer.register<RepairHelper>("RepairHelper", { useClass: RepairHelper });
        depContainer.register<TraderHelper>("TraderHelper", TraderHelper);
        depContainer.register<TraderAssortHelper>("TraderAssortHelper", TraderAssortHelper, {
            lifecycle: Lifecycle.Singleton,
        });
        depContainer.register<TradeHelper>("TradeHelper", { useClass: TradeHelper });
        depContainer.register<NotifierHelper>("NotifierHelper", { useClass: NotifierHelper });
        depContainer.register<UtilityHelper>("UtilityHelper", UtilityHelper);
        depContainer.register<WeightedRandomHelper>("WeightedRandomHelper", { useClass: WeightedRandomHelper });
        depContainer.register<HttpServerHelper>("HttpServerHelper", { useClass: HttpServerHelper });
        depContainer.register<NotificationSendHelper>("NotificationSendHelper", { useClass: NotificationSendHelper });
        depContainer.register<SecureContainerHelper>("SecureContainerHelper", { useClass: SecureContainerHelper });
        depContainer.register<ProbabilityHelper>("ProbabilityHelper", { useClass: ProbabilityHelper });
        depContainer.register<BotWeaponGeneratorHelper>("BotWeaponGeneratorHelper", {
            useClass: BotWeaponGeneratorHelper,
        });
        depContainer.register<BotDifficultyHelper>("BotDifficultyHelper", { useClass: BotDifficultyHelper });
        depContainer.register<RepeatableQuestHelper>("RepeatableQuestHelper", { useClass: RepeatableQuestHelper });

        // ChatBots
        depContainer.register<SptDialogueChatBot>("SptDialogueChatBot", SptDialogueChatBot);
        depContainer.register<CommandoDialogueChatBot>("CommandoDialogueChatBot", CommandoDialogueChatBot, {
            lifecycle: Lifecycle.Singleton,
        });
        // SptCommando
        depContainer.register<SptCommandoCommands>("SptCommandoCommands", SptCommandoCommands, {
            lifecycle: Lifecycle.Singleton,
        });
        // SptCommands
        depContainer.register<GiveSptCommand>("GiveSptCommand", GiveSptCommand, { lifecycle: Lifecycle.Singleton });
        depContainer.register<TraderSptCommand>("TraderSptCommand", TraderSptCommand, {
            lifecycle: Lifecycle.Singleton,
        });
        depContainer.register<ProfileSptCommand>("ProfileSptCommand", ProfileSptCommand, {
            lifecycle: Lifecycle.Singleton,
        });
    }

    private static registerLoaders(depContainer: DependencyContainer): void
    {
        // Loaders
        depContainer.register<BundleLoader>("BundleLoader", BundleLoader, { lifecycle: Lifecycle.Singleton });
        depContainer.register<PreAkiModLoader>("PreAkiModLoader", PreAkiModLoader, { lifecycle: Lifecycle.Singleton });
        depContainer.register<PostAkiModLoader>("PostAkiModLoader", PostAkiModLoader, {
            lifecycle: Lifecycle.Singleton,
        });
    }

    private static registerCallbacks(depContainer: DependencyContainer): void
    {
        // Callbacks
        depContainer.register<BotCallbacks>("BotCallbacks", { useClass: BotCallbacks });
        depContainer.register<BundleCallbacks>("BundleCallbacks", { useClass: BundleCallbacks });
        depContainer.register<ClientLogCallbacks>("ClientLogCallbacks", { useClass: ClientLogCallbacks });
        depContainer.register<CustomizationCallbacks>("CustomizationCallbacks", { useClass: CustomizationCallbacks });
        depContainer.register<DataCallbacks>("DataCallbacks", { useClass: DataCallbacks });
        depContainer.register<DialogueCallbacks>("DialogueCallbacks", { useClass: DialogueCallbacks });
        depContainer.register<GameCallbacks>("GameCallbacks", { useClass: GameCallbacks });
        depContainer.register<HandbookCallbacks>("HandbookCallbacks", { useClass: HandbookCallbacks });
        depContainer.register<HealthCallbacks>("HealthCallbacks", { useClass: HealthCallbacks });
        depContainer.register<HideoutCallbacks>("HideoutCallbacks", { useClass: HideoutCallbacks });
        depContainer.register<HttpCallbacks>("HttpCallbacks", { useClass: HttpCallbacks });
        depContainer.register<InraidCallbacks>("InraidCallbacks", { useClass: InraidCallbacks });
        depContainer.register<InsuranceCallbacks>("InsuranceCallbacks", { useClass: InsuranceCallbacks });
        depContainer.register<InventoryCallbacks>("InventoryCallbacks", { useClass: InventoryCallbacks });
        depContainer.register<ItemEventCallbacks>("ItemEventCallbacks", { useClass: ItemEventCallbacks });
        depContainer.register<LauncherCallbacks>("LauncherCallbacks", { useClass: LauncherCallbacks });
        depContainer.register<LocationCallbacks>("LocationCallbacks", { useClass: LocationCallbacks });
        depContainer.register<MatchCallbacks>("MatchCallbacks", { useClass: MatchCallbacks });
        depContainer.register<ModCallbacks>("ModCallbacks", { useClass: ModCallbacks });
        depContainer.register<PostDBModLoader>("PostDBModLoader", { useClass: PostDBModLoader });
        depContainer.register<NoteCallbacks>("NoteCallbacks", { useClass: NoteCallbacks });
        depContainer.register<NotifierCallbacks>("NotifierCallbacks", { useClass: NotifierCallbacks });
        depContainer.register<PresetCallbacks>("PresetCallbacks", { useClass: PresetCallbacks });
        depContainer.register<ProfileCallbacks>("ProfileCallbacks", { useClass: ProfileCallbacks });
        depContainer.register<QuestCallbacks>("QuestCallbacks", { useClass: QuestCallbacks });
        depContainer.register<RagfairCallbacks>("RagfairCallbacks", { useClass: RagfairCallbacks });
        depContainer.register<RepairCallbacks>("RepairCallbacks", { useClass: RepairCallbacks });
        depContainer.register<SaveCallbacks>("SaveCallbacks", { useClass: SaveCallbacks });
        depContainer.register<TradeCallbacks>("TradeCallbacks", { useClass: TradeCallbacks });
        depContainer.register<TraderCallbacks>("TraderCallbacks", { useClass: TraderCallbacks });
        depContainer.register<WeatherCallbacks>("WeatherCallbacks", { useClass: WeatherCallbacks });
        depContainer.register<WishlistCallbacks>("WishlistCallbacks", { useClass: WishlistCallbacks });
        depContainer.register<AchievementCallbacks>("AchievementCallbacks", { useClass: AchievementCallbacks });
        depContainer.register<BuildsCallbacks>("BuildsCallbacks", { useClass: BuildsCallbacks });
    }

    private static registerServices(depContainer: DependencyContainer): void
    {
        // Services
        depContainer.register<ImageRouteService>("ImageRouteService", ImageRouteService, {
            lifecycle: Lifecycle.Singleton,
        });

        depContainer.register<FenceService>("FenceService", FenceService, { lifecycle: Lifecycle.Singleton });
        depContainer.register<PlayerService>("PlayerService", { useClass: PlayerService });
        depContainer.register<PaymentService>("PaymentService", { useClass: PaymentService });
        depContainer.register<InsuranceService>("InsuranceService", InsuranceService, {
            lifecycle: Lifecycle.Singleton,
        });
        depContainer.register<TraderAssortService>("TraderAssortService", TraderAssortService, {
            lifecycle: Lifecycle.Singleton,
        });
        depContainer.register<TraderServicesService>("TraderServicesService", TraderServicesService, {
            lifecycle: Lifecycle.Singleton,
        });

        depContainer.register<RagfairPriceService>("RagfairPriceService", RagfairPriceService, {
            lifecycle: Lifecycle.Singleton,
        });
        depContainer.register<RagfairCategoriesService>("RagfairCategoriesService", RagfairCategoriesService, {
            lifecycle: Lifecycle.Singleton,
        });
        depContainer.register<RagfairOfferService>("RagfairOfferService", RagfairOfferService, {
            lifecycle: Lifecycle.Singleton,
        });
        depContainer.register<RagfairLinkedItemService>("RagfairLinkedItemService", RagfairLinkedItemService, {
            lifecycle: Lifecycle.Singleton,
        });
        depContainer.register<RagfairRequiredItemsService>("RagfairRequiredItemsService", RagfairRequiredItemsService, {
            lifecycle: Lifecycle.Singleton,
        });

        depContainer.register<NotificationService>("NotificationService", NotificationService, {
            lifecycle: Lifecycle.Singleton,
        });
        depContainer.register<MatchLocationService>("MatchLocationService", MatchLocationService, {
            lifecycle: Lifecycle.Singleton,
        });
        depContainer.register<ModCompilerService>("ModCompilerService", ModCompilerService);
        depContainer.register<BundleHashCacheService>("BundleHashCacheService", BundleHashCacheService, {
            lifecycle: Lifecycle.Singleton,
        });
        depContainer.register<ModHashCacheService>("ModHashCacheService", ModHashCacheService, {
            lifecycle: Lifecycle.Singleton,
        });
        depContainer.register<LocaleService>("LocaleService", LocaleService, { lifecycle: Lifecycle.Singleton });
        depContainer.register<ProfileFixerService>("ProfileFixerService", ProfileFixerService);
        depContainer.register<RepairService>("RepairService", RepairService);
        depContainer.register<BotLootCacheService>("BotLootCacheService", BotLootCacheService, {
            lifecycle: Lifecycle.Singleton,
        });
        depContainer.register<CustomItemService>("CustomItemService", CustomItemService);
        depContainer.register<BotEquipmentFilterService>("BotEquipmentFilterService", BotEquipmentFilterService);
        depContainer.register<ProfileSnapshotService>("ProfileSnapshotService", ProfileSnapshotService, {
            lifecycle: Lifecycle.Singleton,
        });
        depContainer.register<ItemFilterService>("ItemFilterService", ItemFilterService, {
            lifecycle: Lifecycle.Singleton,
        });
        depContainer.register<BotGenerationCacheService>("BotGenerationCacheService", BotGenerationCacheService, {
            lifecycle: Lifecycle.Singleton,
        });
        depContainer.register<LocalisationService>("LocalisationService", LocalisationService, {
            lifecycle: Lifecycle.Singleton,
        });
        depContainer.register<CustomLocationWaveService>("CustomLocationWaveService", CustomLocationWaveService, {
            lifecycle: Lifecycle.Singleton,
        });
        depContainer.register<OpenZoneService>("OpenZoneService", OpenZoneService, { lifecycle: Lifecycle.Singleton });
        depContainer.register<ItemBaseClassService>("ItemBaseClassService", ItemBaseClassService, {
            lifecycle: Lifecycle.Singleton,
        });
        depContainer.register<BotEquipmentModPoolService>("BotEquipmentModPoolService", BotEquipmentModPoolService, {
            lifecycle: Lifecycle.Singleton,
        });
        depContainer.register<BotWeaponModLimitService>("BotWeaponModLimitService", BotWeaponModLimitService, {
            lifecycle: Lifecycle.Singleton,
        });
        depContainer.register<SeasonalEventService>("SeasonalEventService", SeasonalEventService, {
            lifecycle: Lifecycle.Singleton,
        });
        depContainer.register<MatchBotDetailsCacheService>("MatchBotDetailsCacheService", MatchBotDetailsCacheService, {
            lifecycle: Lifecycle.Singleton,
        });
        depContainer.register<RagfairTaxService>("RagfairTaxService", RagfairTaxService, {
            lifecycle: Lifecycle.Singleton,
        });
        depContainer.register<TraderPurchasePersisterService>(
            "TraderPurchasePersisterService",
            TraderPurchasePersisterService,
        );
        depContainer.register<PmcChatResponseService>("PmcChatResponseService", PmcChatResponseService);
        depContainer.register<GiftService>("GiftService", GiftService);
        depContainer.register<MailSendService>("MailSendService", MailSendService);
        depContainer.register<RaidTimeAdjustmentService>("RaidTimeAdjustmentService", RaidTimeAdjustmentService);

        depContainer.register<ProfileActivityService>("ProfileActivityService", ProfileActivityService, {
            lifecycle: Lifecycle.Singleton,
        });
    }

    private static registerServers(depContainer: DependencyContainer): void
    {
        // Servers
        depContainer.register<DatabaseServer>("DatabaseServer", DatabaseServer, { lifecycle: Lifecycle.Singleton });
        depContainer.register<HttpServer>("HttpServer", HttpServer, { lifecycle: Lifecycle.Singleton });
        depContainer.register<WebSocketServer>("WebSocketServer", WebSocketServer, { lifecycle: Lifecycle.Singleton });
        depContainer.register<RagfairServer>("RagfairServer", RagfairServer);
        depContainer.register<SaveServer>("SaveServer", SaveServer, { lifecycle: Lifecycle.Singleton });
        depContainer.register<ConfigServer>("ConfigServer", ConfigServer, { lifecycle: Lifecycle.Singleton });
    }

    private static registerControllers(depContainer: DependencyContainer): void
    {
        // Controllers
        depContainer.register<BotController>("BotController", { useClass: BotController });
        depContainer.register<ClientLogController>("ClientLogController", { useClass: ClientLogController });
        depContainer.register<CustomizationController>("CustomizationController", {
            useClass: CustomizationController,
        });
        depContainer.register<DialogueController>("DialogueController", { useClass: DialogueController }, {
            lifecycle: Lifecycle.Singleton,
        });
        depContainer.register<GameController>("GameController", { useClass: GameController });
        depContainer.register<HandbookController>("HandbookController", { useClass: HandbookController });
        depContainer.register<HealthController>("HealthController", { useClass: HealthController });
        depContainer.register<HideoutController>("HideoutController", { useClass: HideoutController });
        depContainer.register<InraidController>("InraidController", { useClass: InraidController });
        depContainer.register<InsuranceController>("InsuranceController", { useClass: InsuranceController });
        depContainer.register<InventoryController>("InventoryController", { useClass: InventoryController });
        depContainer.register<LauncherController>("LauncherController", { useClass: LauncherController });
        depContainer.register<LocationController>("LocationController", { useClass: LocationController });
        depContainer.register<MatchController>("MatchController", MatchController);
        depContainer.register<NoteController>("NoteController", { useClass: NoteController });
        depContainer.register<NotifierController>("NotifierController", { useClass: NotifierController });
        depContainer.register<BuildController>("BuildController", { useClass: BuildController });
        depContainer.register<PresetController>("PresetController", { useClass: PresetController });
        depContainer.register<ProfileController>("ProfileController", { useClass: ProfileController });
        depContainer.register<QuestController>("QuestController", { useClass: QuestController });
        depContainer.register<RagfairController>("RagfairController", { useClass: RagfairController });
        depContainer.register<RepairController>("RepairController", { useClass: RepairController });
        depContainer.register<RepeatableQuestController>("RepeatableQuestController", {
            useClass: RepeatableQuestController,
        });
        depContainer.register<TradeController>("TradeController", { useClass: TradeController });
        depContainer.register<TraderController>("TraderController", { useClass: TraderController });
        depContainer.register<WeatherController>("WeatherController", { useClass: WeatherController });
        depContainer.register<WishlistController>("WishlistController", WishlistController);
        depContainer.register<AchievementController>("AchievementController", AchievementController);
    }
}
