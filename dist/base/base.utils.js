"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.waiter = waiter;
exports.getUrlFromOptions = getUrlFromOptions;
const querystring_1 = __importDefault(require("querystring"));
function waiter(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}
function getUrlFromOptions(options) {
    let uri = options.url;
    if (options.params) {
        uri += '?';
        uri += querystring_1.default.stringify(options.params);
    }
    return uri;
}
