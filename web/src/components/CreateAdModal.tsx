import * as Dialog from '@radix-ui/react-dialog'
import { Check, GameController } from 'phosphor-react'
import Input from '../components/form/Input'
import * as Checkbox from '@radix-ui/react-checkbox'
import { useEffect, useState } from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import axios from 'axios';


interface Game {
    id: string;
    title: string;
}

export function CreateAdModal() {

    const [games, setGames] = useState<Game[]>([])
    const [weekDays, setWeekDays] = useState<string[]>([])
    const [useVoiceChannel, setUseVoiceChannel] = useState<boolean>(false)


    useEffect(() => {
        axios('http://localhost:3333/games')
            .then(response => setGames(response.data))
    }, [])

    async function handleCreateAd(e: React.FormEvent) {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const data = Object.fromEntries(formData)
        console.log(data)


        try {
            await axios.post(`http://localhost:3333/games/${data.game}/ads`, {
                name: data.nick,
                yearsPlaying: Number(data.time),
                discord: data.discord,
                weekDays: weekDays.map(Number),
                hourStart: data.hourStart,
                hourEnd: data.hourEnd,
                useVoiceChannel: useVoiceChannel
            })
            alert('Anúncio criado com sucesso!')
        } catch (error) {
            console.log(error);
            alert('Erro ao criar anúncio!')
        }

    }

    return (
        <Dialog.Portal>
            <Dialog.Overlay className='fixed inset-0 bg-black/60' />
            <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/40 '>
                <Dialog.Title className='text-3xl text-white font-black' >Publique um anúncio</Dialog.Title>


                <form onSubmit={handleCreateAd} className='mt-8 flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="game" className='font-semibold'>Qual o game?</label>
                        <select
                            defaultValue=""
                            id='game'
                            name='game'
                            className='py-3 px-4 bg-zinc-900 rounded-md placeholder:text-zinc-500 appearance-none'
                        >
                            <option disabled value="" >Informe o jogo que deseja jogar</option>
                            {games.map(game => (
                                <option key={game.id} value={game.id}>{game.title}</option>
                            ))}
                        </select>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="nick">Seu nome (ou nickname)</label>
                        <Input
                            id='nick'
                            name='nick'
                            type="text"
                            placeholder='como te chamam dentro do game?' />
                    </div>

                    <div className='grid grid-cols-2 gap-6'>
                        <div className='flex flex-col gap-2' >
                            <label htmlFor="time">Joga há quantos anos?</label>
                            <Input
                                id='time'
                                name='time'
                                type="text"
                                placeholder='Tudo bem ser Zero!' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="discord">Qual o seu Discord?</label>
                            <Input
                                id='discord'
                                name='discord'
                                type="text"
                                placeholder='Usuario#0000' />
                        </div>
                    </div>

                    <div className='flex gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="weekDays">Quando costuma jogar?</label>
                            <div>
                                <ToggleGroup.Root
                                    type='multiple'
                                    className='grid grid-cols-4 gap-2'
                                    value={weekDays}
                                    onValueChange={setWeekDays}
                                >
                                    <ToggleGroup.Item
                                        value='0'
                                        title='domingo'
                                        className={`w-8 h-8 rounded ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    >
                                        D
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        value='1'
                                        title='segunda'
                                        className={`w-8 h-8 rounded ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    >
                                        S
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        title='terça'
                                        className={`w-8 h-8 rounded ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                        value='2'
                                    >
                                        T
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        title='quarta'
                                        className={`w-8 h-8 rounded ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                        value='3'
                                    >
                                        Q
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        title='quinta'
                                        className={`w-8 h-8 rounded ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                        value='4'
                                    >
                                        Q
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        title='sexta'
                                        className={`w-8 h-8 rounded ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                        value='5'
                                    >
                                        S
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        value='6'
                                        title='sábado'
                                        className={`w-8 h-8 rounded  ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    >
                                        S
                                    </ToggleGroup.Item>
                                </ToggleGroup.Root>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 flex-1' >
                            <label htmlFor="hourStart">Qual horário do dia?</label>
                            <div className='grid grid-cols-2 gap-2'>
                                <Input
                                    id='hourStart'
                                    name='hourStart'
                                    type="time"
                                    placeholder='de' />
                                <Input
                                    id='hourEnd'
                                    name='hourEnd'
                                    type="time"
                                    placeholder='até' />
                            </div>
                        </div>
                    </div>

                    <label className='mt-2 flex items-center gap-2 text-sm'>
                        <Checkbox.Root
                            checked={useVoiceChannel}
                            onCheckedChange={(checked) => {
                                checked ? setUseVoiceChannel(true) : setUseVoiceChannel(false)
                            }}
                            className='w-6 h-6 rounded border border-zinc-900'>
                            <Checkbox.Indicator>
                                <Check className='w-4 h-4 text-emerald-400' />
                            </Checkbox.Indicator>
                        </Checkbox.Root>
                        Costumo me conectar ao chat de voz!
                    </label>

                    <footer className='flex justify-end mt-4 gap-4'>
                        <Dialog.Close
                            type='button'
                            className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>Cancelar</Dialog.Close>
                        <button
                            type='submit'
                            className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'>
                            <GameController size={24} />
                            Publicar
                        </button>
                    </footer>

                </form>

            </Dialog.Content>
        </Dialog.Portal >
    )
}