import Image from "next/image";
import { Carousel } from 'antd';
import meteo from '../public/meteo3.jpg'
import Link from "next/link";
import Icon from '@ant-design/icons';
import {SearchOutlined,ArrowRightOutlined } from '@ant-design/icons'
import Meteo from './Meteo/page';
export default function Home() {
const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();

const formattedTime = `${hours < 10 ? '0' : ''}${hours}h:${minutes < 10 ? '0' : ''}${minutes}`;
const dateActuelle = new Date();
const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  const dateFormatee = dateActuelle.toLocaleDateString('fr-FR', options);
  const contentStyle = {
  color: '#fff',
    textAlign: 'center',
    marginRight: "20px",
    marginLeft: "20px",
};
  return (
    <>
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/60 z-[1] flex justify-center items-center flex-col">
        <Carousel autoplay className="w-screen mx-8 text-white text-2xl">
            <div>
            <h3 style={contentStyle}>
                Restez hydraté
              Évitez les activités physiques intenses
                
              Utilisez un écran solaire
              </h3>
            </div>
            <div>
            <h3 style={contentStyle}>
                            Portez des vêtements légers 

              Mangez léger
              Surveillez les signes de coup de chaleur 
              </h3>
            </div>
           
            <div>
             <h3 style={contentStyle}>
              Évitez les heures les plus chaudes
              Utilisez un ventilateur ou la climatisation
              </h3>
            </div>
             <div>
            <h3 style={contentStyle}>
            Pour plus d'astuces
              consultez un professionnel de santé.
              </h3>
            </div>
        </Carousel>
       </div>
        <Link href={`/Meteo`} className="bg-cyan-600 mt-8 text-white hover:text-black duration-700 ease-in rounded-md outline-none border-none py-2 px-6 text-lg">Voir la météo</Link>
  
      </div>
      <Image src={meteo} alt="ok" className="w-screen h-screen object-cover" />
      
     
    
      </>
    
  );
}
