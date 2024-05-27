"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestStatus = void 0;
var QuestStatus;
(function (QuestStatus) {
    QuestStatus[QuestStatus["Locked"] = 0] = "Locked";
    QuestStatus[QuestStatus["AvailableForStart"] = 1] = "AvailableForStart";
    QuestStatus[QuestStatus["Started"] = 2] = "Started";
    QuestStatus[QuestStatus["AvailableForFinish"] = 3] = "AvailableForFinish";
    QuestStatus[QuestStatus["Success"] = 4] = "Success";
    QuestStatus[QuestStatus["Fail"] = 5] = "Fail";
    QuestStatus[QuestStatus["FailRestartable"] = 6] = "FailRestartable";
    QuestStatus[QuestStatus["MarkedAsFailed"] = 7] = "MarkedAsFailed";
    QuestStatus[QuestStatus["Expired"] = 8] = "Expired";
    QuestStatus[QuestStatus["AvailableAfter"] = 9] = "AvailableAfter";
})(QuestStatus || (exports.QuestStatus = QuestStatus = {}));
;
