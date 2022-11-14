import express from 'express';
import {Request, Response} from 'express';
import { PrismaClient } from '@prisma/client';
import convertHourToMinutes from './utils/convertHourToMinutes';
import convertMinutesToHour from './utils/convertMinutesToHour';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());


const prisma = new PrismaClient({
    log: ['query', 'info', 'warn'],
});

app.get('/games', async (request:Request, response:Response) => {
    const games = await  prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true,
                }
            }
        }
    })
    return response.status(200).json(games);
});

app.post('/games/:id/ads', async (request:Request, response:Response) => {
    const gameId = request.params.id;
    const body: any = request.body;
    const adCreated = await prisma.ad.create({
        data: {
            gameId,
            name: body.name,
            yearsPlaying: body.yearsPlaying,
            discord: body.discord,
            weekDays: body.weekDays.join(','),
            hourStart: convertHourToMinutes(body.hourStart) ,
            hourEnd: convertHourToMinutes(body.hourEnd),
            useVoiceChannel: body.useVoiceChannel,
        }
});
    return response.status(201).json(adCreated);
});

app.get('/games/:id/ads', async (request:Request, response:Response) => {
    const { id: gameId } = request.params;
    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourStart: true,
            hourEnd: true,
        },
        where: {
            gameId: gameId,
        },
        orderBy: {
            createdAt: 'asc',
        }
    }
    );
    const adsFormated = ads.map((ad) => {
        return {
            ...ad,
            weekDays: ad.weekDays.split(','),
            hourStart: convertMinutesToHour(ad.hourStart),
            hourEnd: convertMinutesToHour(ad.hourEnd),
        }
    });
    return response.json(adsFormated);
});

app.get('/ads/:id/discord', async (request:Request, response:Response) => {
    const { id } = request.params;
    const ad = await prisma.ad.findUniqueOrThrow({
        where: {
            id: id,
        },
        select: {
            discord: true,
        },
        
    });
    return response.json(ad);
});

app.listen(3333, () => {
    console.log('Example app listening on port 3333!');
});
