import { MagnifyingGlassPlus } from "phosphor-react"
import * as Dialog from "@radix-ui/react-dialog"

export default function CreateAdBanner() {
    return (
        <div className='pt-1 bg-gradientText self-stretch rounded-lg mt-8 overflow-hidden'>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-white text-2xl font-black block'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players.</span>
          </div>
          
            <Dialog.DialogTrigger className='py-3 px-4 bg-violet-500 text-white rounded-md hover:bg-violet-900 hover:transition-all flex items-center gap-3'>
                <MagnifyingGlassPlus size={24}/>
                Publicar Anúncio
            </Dialog.DialogTrigger>
        </div>
      </div>
    )
}