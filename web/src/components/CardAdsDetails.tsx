import '../styles/cardAds.css'
import numbersToDaysOfWeek from '../helpers/numbersToDaysOfWeek';
import GameAdsDetails from '../interfaces/GamesAdsDetails';
import GameList from '../interfaces/GameList';

// interface CardAdsDetailsProps {
//     ads: GameAdsDetails[];
//     game: GameList;
// }


export default function CardAdsDetails(props: any) {
    console.log("props", props);
    return (
        <div className='cardAds'>
            <p>CardAdsDetails</p>
            <div className="cardAds">
                {
                    props.ads.map((ad: any) => (
                        <div key={ad.id}>
                            <img
                                src={props.game?.bannerUrl}
                            />
                            <p>{ad.name}</p>
                            <p>{String(ad.useVoiceChannel)}</p>
                            <p>{ad.yearsPlaying}</p>
                            <p>{ad.hourStart}</p>
                            <p>{ad.hourEnd}</p>
                            <p>{numbersToDaysOfWeek(ad.weekDays)}</p>

                        </div>
                    ))
                }
            </div>
        </div >
    )
}
