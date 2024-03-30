import Image from "next/image";
import meteo from '../public/meteo3.jpg'
import Link from "next/link";
import Icon from '@ant-design/icons';
import {SearchOutlined,ArrowRightOutlined } from '@ant-design/icons'
import Meteo from './Meteo/page';
export default function Home() {
  return (
      <div>
      <Image src={meteo} alt="ok" className="w-screen h-screen object-cover" />
      <h1 className="text-xl absolute top-0 text-white font-bold pt-8 px-5">| météoCG</h1>
      <Link className="text-6xl absolute bottom-0 right-0 text-white pb-10 px-12" href="/Meteo"><ArrowRightOutlined /></Link>
      </div>
    
  );
}
