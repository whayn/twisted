"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SummonerApi = void 0;
const _ = __importStar(require("lodash"));
const endpoints_1 = require("../../../endpoints/endpoints");
const summoner_find_1 = require("../../../constants/summoner.find");
const base_api_lol_1 = require("../base/base.api.lol");
/**
 * Summoner methods
 */
class SummonerApi extends base_api_lol_1.BaseApiLol {
    parsePath(endpoint, by) {
        let { path } = endpoint;
        if (by === summoner_find_1.FindSummonerBy.ID) {
            path = path.replace('/$(by)/', '/');
        }
        return path;
    }
    genericRequest(by, value, region) {
        const endpoint = _.cloneDeep(endpoints_1.endpointsV4.Summoner);
        endpoint.path = this.parsePath(endpoint, by);
        const params = {
            summonerName: value,
            by
        };
        return this.request(region, endpoint, params);
    }
    /**
     * Get by id
     * @param id Summoner id
     * @param region Riot region
     */
    getById(id, region) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.genericRequest(summoner_find_1.FindSummonerBy.ID, id, region);
        });
    }
    /**
     * Get by PUUID
     * @param puuid
     * @param region Riot region
     */
    getByPUUID(puuid, region) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.genericRequest(summoner_find_1.FindSummonerBy.PUUID, puuid, region);
        });
    }
    /**
     * Get by PUUID
     * @param puuid
     * @param region Riot region
     */
    getByAccountID(accountId, region) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.genericRequest(summoner_find_1.FindSummonerBy.ACCOUNT_ID, accountId, region);
        });
    }
}
exports.SummonerApi = SummonerApi;
