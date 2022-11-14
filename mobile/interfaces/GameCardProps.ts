import { ImageSourcePropType } from "react-native";

export default interface GameCardProps {
    id: string;
    title: string;
    _count: { ads: number };
    bannerUrl: string;
}