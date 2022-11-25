import { Link } from "phosphor-react"
import GameBannerProps from "../interfaces/GameBannerProps"

export default function GameBanner(props: GameBannerProps) {
  return (

    <a href={`/ads/${props.id}`} className='relative rounded-lg overflow-hidden'
    >
      <img src={props.bannerUrl} alt="" />
      <div className='w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0'>
        <strong className='font-bold text-white block'>{props.title}</strong>
        <span className='text-zinc-300 text-sm block'>{props.adsCount} anúncio(s)</span>
      </div>
    </a>

  )
}
