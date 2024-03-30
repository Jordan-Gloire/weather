"use client"
import Axios from 'axios'
// import 'animate.css';
import { useState } from 'react';
import Image from 'next/image';
import photo from '../../public/weather02-512.webp'
import Icon from '@ant-design/icons';
import {SearchOutlined,ClockCircleOutlined } from '@ant-design/icons'
export default function Meteo() {
    const dateActuelle = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const dateFormatee = dateActuelle.toLocaleDateString('fr-FR', options);
    const [city,setCity] = useState("")
    const [data,setData] = useState()
    const key = "8ae78a17c1238a3798ca84fc120a71fa" 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    const fetchData = async () => {
        let errreur = "Veuillez vérifier l'hortographe ou entrer une ville  svp !"
        try {
            const response = await Axios.get(url)
            setData(response.data);
            console.log(data);
        } catch (error) {
            alert(errreur );
        }
    }
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    console.log(`Il est actuellement ${hours}:${minutes}:${seconds}`);
    return (
        <>
            <div className='bg-gray-50 h-screen'>
                <p className='px-10 pt-4'> | {dateFormatee} / {hours}h</p>
                
                <div className='flex justify-center items-center pt-10'>
                    <input
                        className='py-5 pl-2 outline-none border-none rounded-l-lg bg-white text-black shadow-lg placeholder:text-black'
                        type='text'
                        placeholder='Veuillez entrez une ville'
                        value={city}
                        onChange={e =>setCity(e.target.value)}
                    />
                    <button className='bg-black text-white rounded-r-lg py-4 pl-5 text-2xl text-center' onClick={fetchData}>
                        <SearchOutlined className='pr-2'/>
                    </button>
                </div>
                
                <div className='  text-center ' >
                    {
                        data && (
                            <div className=''>
                                <h1 className='text-2xl font-bold pt-8'>{data.name},{data.sys.country}</h1>
                                <Image src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt='ok' height={100} width={75} className='w-36 mx-auto' />
                                <p className='text-2xl'>{data.weather[0].main}</p>
                                <p className='text-2xl'>{data.weather[0].description}</p>
                                <p className='text-2xl'>{data.weather.main}</p>
                                <p className='text-2xl'>{data.weather.description}</p>
                                <p className='text-6xl font-bold text-black pt-8'>{Math.round(data.main.temp / 10 * 10)/ 10}°</p>
                                <p className='text-2xl'>Humidité: {data.main.humidity}%</p>
                                <p className='text-2xl'>Vent: {data.wind.speed}</p>
                                
                            </div>
                            
                        )
                    }
                    
                </div>
                    
            </div>
        </>
    )
}