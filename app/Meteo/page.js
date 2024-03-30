"use client"
import Axios from 'axios'
// import 'animate.css';
import { useState } from 'react';
import Image from 'next/image';
import photo from '../../public/weather02-512.webp'
import Icon from '@ant-design/icons';
import {SearchOutlined } from '@ant-design/icons'
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
    return (
        <>
            <div className='bg-gray-50 h-screen  w-screen '>
                <p className='px-10 pt-4'> | {dateFormatee}</p>
                
                <div className='flex justify-center items-center pt-10 mx-5'>
                    <input
                        className='py-5 px-6 outline-none border-none rounded-l-lg bg-white text-black shadow-lg'
                        type='text'
                        placeholder='Veuillez entre une ville'
                        value={city}
                        onChange={e =>setCity(e.target.value)}
                    />
                    <button className='bg-black text-white rounded-r-lg py-4 px-6 text-2xl' onClick={fetchData}>
                        <SearchOutlined />
                    </button>

                </div>
                
                <div className='  text-center animate__animated animate__fadeIn' >
                    {
                        data && (
                            <div className='animate__animated animate__fadeIn'>
                                <h1 className='text-2xl font-bold py-8'>{data.name},{data.sys.country}</h1>
                                <Image src={photo} alt='ok' height={100} width={75} className='w-36 mx-auto'/>
                                <p className='text-2xl'>{data.weather.main}</p>
                                <p className='text-2xl'>{data.weather.description}</p>
                                <p className='text-6xl font-bold text-black py-8'>{Math.round(data.main.temp / 10 * 10)/ 10}°</p>
                                <p className='text-2xl'>Latitude: {Math.round(data.coord.lat)}</p>
                                <p className='text-2xl'>Longitude: {Math.round(data.coord.lon)}</p>
                                <p className='text-2xl'>Humidité: {data.main.humidity}%</p>

                            </div>
                            
                        )
                    }
                    <div className='absolute bottom-0 bg-black text-white font-extralight w-screen py-4'>
                        <p>Designed by Gloire Dev Web</p>
                    </div>
                </div>
            </div>
        </>
    )
}