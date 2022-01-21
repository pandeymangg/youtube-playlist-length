"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var googleapis_1 = require("googleapis");
var dotenv_1 = require("dotenv");
var express_1 = require("express");
var path_1 = require("path");
var app = (0, express_1["default"])();
var youtube = googleapis_1.google.youtube("v3");
(0, dotenv_1.config)({ path: "./config.env" });
app.use(express_1["default"].json());
var api_key = process.env.API_KEY;
var playlistId = "PLz3-lGEW1dbKWdGKzEqwmrlZaQa45HLBz";
var videoIds = [];
var hourRegex = /(\d+)H/g;
var minuteRegex = /(\d+)M/g;
var secondRegex = /(\d+)S/g;
var nextPageToken = null;
var durationSeconds = 0;
var totalSeconds = 0;
function getResponse() {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var plResponse, vidResponseParams, vidResponse, _b, minutes, seconds, hours, e_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 5, , 6]);
                    _c.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 4];
                    return [4 /*yield*/, youtube.playlistItems.list({
                            key: api_key,
                            part: ["contentDetails, snippet"],
                            playlistId: playlistId,
                            maxResults: 50,
                            pageToken: nextPageToken
                        })];
                case 2:
                    plResponse = _c.sent();
                    videoIds = [];
                    (_a = plResponse === null || plResponse === void 0 ? void 0 : plResponse.data) === null || _a === void 0 ? void 0 : _a.items.forEach(function (item) { var _a; return videoIds.push((_a = item === null || item === void 0 ? void 0 : item.contentDetails) === null || _a === void 0 ? void 0 : _a.videoId); });
                    vidResponseParams = {
                        key: api_key,
                        part: ["contentDetails"],
                        id: videoIds
                    };
                    return [4 /*yield*/, youtube.videos.list(vidResponseParams)];
                case 3:
                    vidResponse = _c.sent();
                    vidResponse.data.items.forEach(function (item, index) {
                        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
                        var hour = ((_d = (_c = (_b = (_a = item === null || item === void 0 ? void 0 : item.contentDetails) === null || _a === void 0 ? void 0 : _a.duration) === null || _b === void 0 ? void 0 : _b.match(hourRegex)) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.replace("H", "")) || "0";
                        var min = ((_h = (_g = (_f = (_e = item === null || item === void 0 ? void 0 : item.contentDetails) === null || _e === void 0 ? void 0 : _e.duration) === null || _f === void 0 ? void 0 : _f.match(minuteRegex)) === null || _g === void 0 ? void 0 : _g[0]) === null || _h === void 0 ? void 0 : _h.replace("M", "")) || "0";
                        var sec = ((_m = (_l = (_k = (_j = item === null || item === void 0 ? void 0 : item.contentDetails) === null || _j === void 0 ? void 0 : _j.duration) === null || _k === void 0 ? void 0 : _k.match(secondRegex)) === null || _l === void 0 ? void 0 : _l[0]) === null || _m === void 0 ? void 0 : _m.replace("S", "")) || "0";
                        durationSeconds =
                            parseInt(hour) * 3600 + parseInt(min) * 60 + parseInt(sec);
                        totalSeconds += durationSeconds;
                    });
                    nextPageToken = plResponse.data.nextPageToken;
                    if (!nextPageToken) {
                        return [3 /*break*/, 4];
                    }
                    return [3 /*break*/, 1];
                case 4:
                    _b = [
                        Math.floor(totalSeconds / 60),
                        Math.floor(totalSeconds % 60),
                    ], minutes = _b[0], seconds = _b[1];
                    hours = Math.floor(minutes / 60);
                    minutes = Math.floor(minutes % 60);
                    return [3 /*break*/, 6];
                case 5:
                    e_1 = _c.sent();
                    console.log(e_1.message);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
app.post("/api/calculate", getResponse);
var port = process.env.PORT || 8000;
if (process.env.NODE_ENV === "production") {
    app.use(express_1["default"].static("client/build"));
    app.get("*", function (req, res) {
        res.sendFile(path_1["default"].resolve(__dirname, "client", "build", "index.html"));
    });
}
app.listen(port, function () {
    console.log("server started at port: ".concat(port));
});
