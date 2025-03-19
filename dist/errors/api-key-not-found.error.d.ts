import { IErrors } from '.';
/**
 * Not api key found
 */
export declare class ApiKeyNotFound extends Error implements IErrors {
    readonly status: any;
    readonly name = "ApiKeyNotFound";
    constructor();
}
