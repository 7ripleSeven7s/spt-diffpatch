export enum BackendErrorCodes
{
    NONE = 0,
    UNKNOWN_ERROR = 200,
    NOT_AUTHORIZED = 201,
    NEED_AUTHORIZATION_CODE = 209,
    WRONG_AUTHORIZATION_CODE = 211,
    NEED_CAPTCHA = 214,
    NO_NEED_CAPTCHA = 215,
    CAPTCHA_INVALID_ANSWER = 216,
    CAPTCHA_FAILED = 218,
    CAPTCHA_BRUTE_FORCED = 219,
    NO_ROOM_IN_STASH = 223,
    NICKNAME_NOT_UNIQUE = 225,
    NICKNAME_NOT_VALID = 226,
    UNSUPPORTED_CLIENT_VERSION = 232,
    REPORT_NOT_ALLOWED = 238,
    NICKNAME_IS_ABUSIVE = 241,
    NICKNAME_CHANGE_TIMEOUT = 242,
    NOT_ENOUGH_SPACE_TO_UNPACK = 257,
    NOT_MODIFIED = 304,
    HTTP_BAD_REQUEST = 400,
    HTTP_NOT_AUTHORIZED = 401,
    HTTP_FORBIDDEN = 403,
    HTTP_NOT_FOUND = 404,
    HTTP_METHOD_NOT_ALLOWED = 405,
    UNKNOWN_TRADING_ERROR = 500,
    HTTPNOTIMPLEMENTED = 501,
    HTTPBADGATEWAY = 502,
    HTTPSERVICEUNAVAILABLE = 503,
    HTTPGATEWAYTIMEOUT = 504,
    TRADEROUTOFMONEY = 505,
    HTTPVARIANTALSONEGOTIATES = 506,
    PRICECHANGED = 509,
    TRADERDISABLED = 512,
    ITEMHASBEENSOLD = 513,
    NOTENOUGHSPACEFORMONEY = 518,
    HTTPINVALIDSSLCERTIFICATE = 526,
    UNKNOWNRAGFAIRERROR = 550,
    UNKNOWNRAGFAIRERROR2 = 551,
    UNKNOWNMATCHMAKERERROR = 600,
    SESSIONPARAMETERSERROR = 601,
    SESSIONLOST = 602,
    SERVERNOTREGISTERED = 604,
    UNKNOWNQUESTERROR = 700,
    QUESTBADPARAM = 702,
    QUESTNOTFOUND = 703,
    QUESTISUNAVAILABLE = 704,
    NOFREESPACEFORREWARDS = 705,
    WRONGQUESTSTATUS = 706,
    CANTCOMPLETEQUEST = 707,
    UNKNOWNMAILERROR = 900,
    TOOMANYFRIENDREQUESTS = 925,
    UNKNOWNSCRIPTEXECUTIONERROR = 1000,
    UNKNOWNREPAIRINGERROR = 1200,
    UNKNOWNINSURANCEERROR = 1300,
    UNKNOWNCURRENCYEXCHANGEERROR = 1400,
    OFFERNOTFOUND = 1503,
    NOTENOUGHSPACE = 1505,
    OFFEROUTOFSTOCK = 1506,
    OFFERSOLD = 1507,
    RAGFAIRUNAVAILABLE = 1511,
    BANNEDERRORCODE = 1513,
    INSUFFICIENTNUMBERINSTOCK = 1516,
    TOOMANYITEMSTOSELL = 1517,
    INCORRECTCLIENTPRICE = 1519,
    EXAMINATIONFAILED = 22001,
    ITEMALREADYEXAMINED = 22002,
    UNKNOWNNGINXERROR = 9000,
    PARSERESPONSEERROR = 9001,
    UNKNOWNMATCHMAKERERROR2 = 503000, // They have two of these...why :/
    UNKNOWNGROUPERROR = 502000,
    GROUPREQUESTNOTFOUND = 502002,
    GROUPFULL = 502004,
    PLAYERALREADYINGROUP = 502005,
    PLAYERNOTINGROUP = 502006,
    PLAYERNOTLEADER = 502007,
    CANTCHANGEREADYSTATE = 502010,
    PLAYERFORBIDDENGROUPINVITES = 502011,
    LEADERALREADYREADY = 502012,
    GROUPSENDINVITEERROR = 502013,
    PLAYERISOFFLINE = 502014,
    PLAYERISNOTSEARCHINGFORGROUP = 502018,
    PLAYERALREADYLOOKINGFORGAME = 503001,
    PLAYERINRAID = 503002,
    LIMITFORPRESETSREACHED = 504001,
    PLAYERPROFILENOTFOUND = 505001,
}
