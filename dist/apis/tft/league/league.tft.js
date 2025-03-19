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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeagueTFTApi = void 0;
const base_api_tft_1 = require("../base/base.api.tft");
const endpoints_1 = require("../../../endpoints");
class LeagueTFTApi extends base_api_tft_1.BaseApiTft {
    // Public methods
    /**
     * Get league entries for a given summoner ID
     * @param encryptedSummonerId
     * @param region
     */
    get(encryptedSummonerId, region) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                encryptedSummonerId
            };
            return this.request(region, endpoints_1.endpointsTFTV1.LeagueBySummoner, params);
        });
    }
    /**
     * Get the master league
     * @param region
     */
    getMasterLeague(region) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(region, endpoints_1.endpointsTFTV1.LeagueMaster);
        });
    }
    /**
     * Get the grandmaster league
     * @param region
     */
    getGrandMasterLeague(region) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(region, endpoints_1.endpointsTFTV1.LeagueGrandMaster);
        });
    }
    /**
     * Get the challenger league
     * @param region
     */
    getChallengerLeague(region) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(region, endpoints_1.endpointsTFTV1.LeagueChallenger);
        });
    }
    /**
     * Get league entries for given tier and division
     * @param region
     * @param tier
     * @param division
     * @param page defaults to 1
     * @param queue defaults to RANKED_TFT
     */
    getByTierDivision(region_1, tier_1, division_1) {
        return __awaiter(this, arguments, void 0, function* (region, tier, division, page = 1, queue = 'RANKED_TFT') {
            const params = {
                tier,
                division
            };
            return this.request(region, endpoints_1.endpointsTFTV1.LeagueByTierDivision, params, false, { queue, page });
        });
    }
}
exports.LeagueTFTApi = LeagueTFTApi;
