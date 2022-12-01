import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CardAdsDetails from '../components/CardAdsDetails';
import GameList from '../interfaces/GameList';


export default function adsDetails() {
    const params = useParams();
    const [adsDetails, setAdsDetails] = useState([]);
    const [gameDetails, setGameDetails] = useState<GameList>();

    useEffect(() => {
        axios.get(`http://localhost:3333/games/${params.id}/ads`)
            .then(response => setAdsDetails(response.data))
    }, []);


    useEffect(() => {
        axios.get(`http://localhost:3333/games/${params.id}`)
            .then(response => setGameDetails(response.data))
    }, [])

    console.log("gamesDetail", gameDetails?.title);
    console.log("adsDetails", adsDetails);

    return (
        <div className='flex-col items-center justify-center' >
            <div className=' flex flex-col items-center justify-center content'>
                <h1 className='mt-10 font-bold text-[36px] text-teal-50'>{`Anúncios de ${gameDetails?.title}`}</h1>
                <img className='rounded-2xl w-[120px] mt-5 border-4 p-1  border-x-green-50 border-solid' src={gameDetails?.bannerUrl}></img>
                <h2 className='mt-10 font-bold text-[22px] text-teal-50' >Clique em um anúncio para agendar sua partida!</h2>
            </div>
            <div>
                <CardAdsDetails ads={adsDetails} game={gameDetails} />
            </div>
        </div>
    )
}
