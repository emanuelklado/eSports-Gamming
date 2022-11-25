interface GameAdsDetails {
    id: string;
    name: string;
    useVoiceChannel: boolean;
    hourStart: string;
    hourEnd: string;
    weekDays: string[];
    yearsPlaying: number;
}

export default GameAdsDetails;