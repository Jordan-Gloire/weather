"use client"
import Axios from 'axios'
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import photo from '../../public/weather02-512.webp'
import Icon from '@ant-design/icons';
import { SearchOutlined, ClockCircleOutlined,ArrowLeftOutlined  } from '@ant-design/icons'

export default function Meteo() {
    
    const [city,setCity] = useState("")
    const [data, setData] = useState()
    const [iserro, setIserro] = useState(false)
    const key = "8ae78a17c1238a3798ca84fc120a71fa" 
    const lang = "fr"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=${key}`
    
    const fetchData = async () => {
        let errreur = "Erreur! Veuillez verifier l'hortographe ou saississez le nom d'une ville valable."
        try {
            const response = await Axios.get(url)
            setData(response.data);
            console.log(data);    
        } catch (error) {
           // alert(errreur);
            alert(errreur)
        }
        
    }
    
    return (
        <>
            <div className='bg-gray-50 h-screen'>
                <div className='flex justify-between items-center'>
                    <Link className='px-10 pt-4 text-2xl' href={`/`}><ArrowLeftOutlined /></Link>
                    <p className='px-10 pt-4'> | météoCG</p>
                </div>
                
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
                                <div className=''>
                                    <h1 className='text-2xl font-bold pt-8'>{data.name},{data.sys.country}</h1>
                                    <Image src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} alt='ok' height={100} width={75} className='w-36 mx-auto' />
                                    <p className='text-2xl'>{data.weather[0].main}</p>
                                    <p className='text-2xlfont-semibold'>{data.weather[0].description}</p>
                                    

                                </div>
                                <p className='text-2xl font-semibold'>{data.weather.main}</p>
                                <p className='text-6xl font-bold text-black pt-8'>{Math.round(data.main.temp / 10 * 10)/ 10}°</p>
                                <p className='text-2xl font-semibold'>Humidité: {data.main.humidity}%</p>
                                <p className='text-2xl font-semibold'>Lever du soleil: {new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                                <p className='text-2xl font-semibold'>Coucher du soleil {new Date(data.sys.sunset * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                                
                                <p className='text-2xl font-semibold'>Vent: {data.wind.speed} m/s</p>
                            </div>
                        )
                    }
                </div>
                
                    
            </div>
        </>
    )
}
