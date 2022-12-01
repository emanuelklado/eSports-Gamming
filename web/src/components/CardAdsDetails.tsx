import numbersToDaysOfWeek from '../helpers/numbersToDaysOfWeek';
import GameAdsDetails from '../interfaces/GamesAdsDetails';
import GameList from '../interfaces/GameList';
import { arrayOfAvatars } from '../helpers/arrayOfAvatars';
import { BsDiscord } from 'react-icons/bs'
import { CgSandClock } from 'react-icons/cg'
import { FaRegClock } from 'react-icons/fa'
import { BsMicFill } from 'react-icons/bs'

// interface CardAdsDetailsProps {
//     ads: GameAdsDetails[];
//     game: GameList;
// }


export default function CardAdsDetails(props: any) {
    console.log("props", props);
    return (
        <div>
            <div className=' mt-16 flex gap-12 justify-center flex-wrap'>
                {
                    props.ads.map((ad: any) => (
                        <div
                            className='hover:bg-transparent hover:border-green-800 hover:transition-all bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100
                            m-0 border-solid p-3 text-white w-52 max-w-md flex flex-col items-center justify-center '
                            key={ad.id}>
                            <img
                                className='w-16 rounded-full mx-auto my-auto mt-4 border-4 border-solid border-white'
                                src={arrayOfAvatars[Math.floor(Math.random() * arrayOfAvatars.length)]}
                            />
                            <p className='text-2xl m-2 text-neutral-50 font-extrabold'>{ad.name}</p>
                            <div className='flex gap-1 items-center pb-2 justify-center w-[100%] h-[10%]'>
                                <BsMicFill className='h-5 w-5' color='#5562EA' />

                                <p
                                    className={`${ad.useVoiceChannel === true ? "bg-lime-600" : "bg-red-800"} rounded-lg pl-1 w-10`}
                                >
                                    {String(ad.useVoiceChannel) === "true" ? "Sim" : "Não"}</p>
                            </div>
                            <div className='flex gap-1 w-[100%] items-center justify-center'>
                                <BsDiscord className='h-6 w-6' color='#5562EA' />
                                <p>{ad.discord}</p>
                            </div>
                            <div className=' w-[100%] justify-center flex gap-1 mt-1 items-center'>
                                <CgSandClock className='h-8 w-6' color='#F5C002' />
                                <p className='flex items-center'>{`${ad.yearsPlaying} Ano(s)`}</p>
                            </div>
                            <section className='flex w-[100%] mb-2 items-center justify-center gap-2'>
                                <FaRegClock className='ml-[2px] h-7 w-5' color='#F5C002' />
                                <p>{ad.hourStart}</p>
                                <p> - </p>
                                <p>{ad.hourEnd}</p>
                            </section>
                            <div className='text-gray-500 flex flex-wrap gap-1 justify-center h-14'>{numbersToDaysOfWeek(ad.weekDays)}</div>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}
