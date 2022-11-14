import * as Dialog from '@radix-ui/react-dialog'
import { Check, GameController } from 'phosphor-react'
import Input from '../components/form/Input'
import * as Checkbox from '@radix-ui/react-checkbox'
import { useEffect, useState } from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

interface Game {
    id: string;
    title: string;
}

export function CreateAdModal() {

    const [games, setGames] = useState<Game[]>([])

    useEffect(() => {
        fetch('http://localhost:3333/games')
            .then(response => response.json())
            .then(data => setGames(data))
    }, [])

    return (
        <Dialog.Portal>
            <Dialog.Overlay className='fixed inset-0 bg-black/60' />
            <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/40 '>
                <Dialog.Title className='text-3xl text-white font-black' >Publique um anúncio</Dialog.Title>


                <form className='mt-8 flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="game" className='font-semibold'>Qual o game?</label>
                        <select
                            defaultValue=""
                            id='game'
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
                        <Input id='nick' type="text" placeholder='como te chamam dentro do game?' />
                    </div>

                    <div className='grid grid-cols-2 gap-6'>
                        <div className='flex flex-col gap-2' >
                            <label htmlFor="time">Joga há quantos anos?</label>
                            <Input id='time' type="text" placeholder='Tudo bem ser Zero!' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="discord">Qual o seu Discord?</label>
                            <Input id='discord' type="text" placeholder='Usuario#0000' />
                        </div>
                    </div>

                    <div className='flex gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="weekDays">Quando costuma jogar?</label>
                            <div>
                                <ToggleGroup.Root
                                    type='multiple'
                                    onValueChange={(value) => console.log(value)}
                                >
                                    <ToggleGroup.Item
                                        value='0'
                                        title='domingo'
                                        className='w-8 h-8 rounded bg-zinc-900'
                                    >
                                        D
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        value='1'
                                        title='segunda'
                                        className='w-8 h-8'
                                    >
                                        S
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        title='terça'
                                        className='w-8 h-8'
                                        value='2'
                                    >
                                        T
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        title='quarta'
                                        className='w-8 h-8'
                                        value='3'
                                    >
                                        Q
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        title='quinta'
                                        className='w-8 h-8'
                                        value='4'
                                    >
                                        Q
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        title='sexta'
                                        className='w-8 h-8'
                                        value='5'
                                    >
                                        S
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        value='6'
                                        title='sábado'
                                        className='w-8 h-8'
                                    >
                                        S
                                    </ToggleGroup.Item>
                                </ToggleGroup.Root>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 flex-1' >
                            <label htmlFor="hourStart">Qual horário do dia?</label>
                            <div className='grid grid-cols-2 gap-2'>
                                <Input id='hourStart' type="time" placeholder='de' />
                                <Input id='hourEnd' type="time" placeholder='até' />
                            </div>
                        </div>
                    </div>

                    <div className='mt-2 flex items-center gap-2 text-sm'>
                        <Checkbox.Root className='w-6 h-6 rounded border border-zinc-900'>
                            <Checkbox.Indicator>
                                <Check className='w-4 h-4 text-emerald-400' />
                            </Checkbox.Indicator>
                        </Checkbox.Root>
                        Costumo me conectar ao chat de voz!
                    </div>

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