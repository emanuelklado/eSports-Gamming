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
        <>
            <div>{`Anúncios do jogo ${gameDetails?.title}`}</div>
            <CardAdsDetails ads={adsDetails} game={gameDetails} />
        </>
    )
}
