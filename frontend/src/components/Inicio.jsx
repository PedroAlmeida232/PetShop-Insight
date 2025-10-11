import React from 'react'
import img2 from '../img/imgDog.webp'
import racao from '../img/racao.jpg'
import Card from "../components/Card";

const Main = () =>{
    return(
        <div className='flex flex-col '>
            <div className='flex items-center justify-between p-20 px-50'>
                <div className='flex flex-col px-5 gap-15'>
                    <h1 className='text-8xl font-bold text-foreground text-slate-800'>Seja bem-vindo ao Petshop <span className='text-cyan-200'>Insight</span></h1>
                    <p className="text-3xl animate-fade-in-delayed text-slate-700 text-justify">
                        Cuidamos do seu pet com amor, carinho e dedicação. 
                        Produtos de qualidade, serviços especializados e muito mais 
                        para deixar seu melhor amigo sempre feliz e saudável.
                    </p>
                    <div className='flex gap-30 justify-start px-25'>
                        <button className='cursor-pointer bg-blue-600 py-3 px-10 rounded-xl  text-white font-bold uppercase'>Conheça Mais</button>
                        <button className='cursor-pointer bg-cyan-500 py-3 px-10 rounded-xl border-1 border-cyan-700 text-white font-bold uppercase'>Testando</button>
                    </div>
                </div>
                <img src={img2} className='w-150' />
            </div> 
            <div className='flex p-20 items-center justify-center flex-col'> 
                <h1 className='font-bold uppercase text-3xl text-cyan-600 text-shadow-md'>produtos</h1>
                <div className='p-20 grid gap-10 md:grid-cols-2 lg:grid-cols-4'>
                    
                </div>
            </div>
        </div>
    )
}

export default Main