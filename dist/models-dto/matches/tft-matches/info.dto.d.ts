import { ParticipantDto } from './participant-tft.dto';
export declare class InfoDto {
    /**
     * Unix timestamp.
     */
    readonly game_datetime: number;
    /**
     * Participants.
     */
    readonly participants: ParticipantDto[];
    /**
     * Teamfight Tactics set number.
     */
    readonly tft_set_number: number;
    /**
     * Teamfight Taxtics game variant
     */
    readonly game_variation: string;
    /**
     * Game length in seconds.
     */
    readonly game_length: number;
    /**
     * Please refer to the League of Legends documentation.
     */
    readonly queue_id: number;
    /**
     * Game client version.
     */
    readonly game_version: string;
}
