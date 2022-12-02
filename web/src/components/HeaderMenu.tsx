import { BsMegaphoneFill } from "react-icons/bs";
import { AiFillHome } from 'react-icons/ai';


export default function HeaderMenu() {
    return (
        <div className="flex flex-row gap-10 p-4 w-[40%] justify-center border-2 border-t-[0px] border-solid rounded-b-xl border-gray-300 ">
            <div className="flex flex-row gap-2 items-center cursor-pointer"
                onClick={() => window.location.href = "/"}
            >
                <AiFillHome className="h-6 w-6" color="#5562EA" />

                <p className="text-white font-bold">Home</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
                <BsMegaphoneFill className="h-6 w-6" color="#5562EA" />
                <p className="text-white font-bold">Anúncios</p>
            </div>
        </div>
    );
}