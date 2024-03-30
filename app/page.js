import Image from "next/image";
import meteo from '../public/meteo3.jpg'
import Link from "next/link";
import Icon from '@ant-design/icons';
import {SearchOutlined,ArrowRightOutlined } from '@ant-design/icons'
import Meteo from './Meteo/page';
export default function Home() {
  return (
    <>
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/60 z-[1] flex justify-center items-center flex-col">
       <p className=" text-white text-xl text-start py-4 px-8 ">"Hydratez-vous régulièrement, Évitez les heures les plus chaudes, Utilisez un ventilateur ou la climatisation,  Prenez des douches fraîches, Évitez les endroits surpeuplés..."</p>
       
        <Link href={`/Meteo`} className="bg-cyan-600 mt-8 text-white hover:text-black duration-700 ease-in rounded-md outline-none border-none py-2 px-6 text-lg">Voir la météo</Link>
        <span className="loading loading-ring loading-lg"></span>
      </div>
      <Image src={meteo} alt="ok" className="w-screen h-screen object-cover" />
      
     
    
      </>
    
  );
}
