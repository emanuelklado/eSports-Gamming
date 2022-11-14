import './styles/main.css'
import logoImage from './assets/logo-nlw-esports.svg'
import GameBanner from './components/GameBanner'
import CreateAdBanner from './components/CreateAdBanner'
import { useEffect, useState } from 'react'
import GameList from './interfaces/GameList'
import * as Dialog from '@radix-ui/react-dialog'
import { CreateAdModal } from './components/CreateAdModal'


function App() {

  const [games, setGames] = useState<GameList[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/games').then(response => response.json()).then(data => setGames(data))
  }, [])

  console.log(games)

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImage} alt="" />
      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-gradientText text-transparent bg-clip-text'>duo</span> está aqui!
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(game => (
          <GameBanner
            key={game.id}
            title={game.title}
            bannerUrl={game.bannerUrl}
            adsCount={game._count.ads}
          />
        ))}
      </div>
      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

export default App
