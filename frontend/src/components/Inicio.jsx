import React from 'react'
import img2 from '../img/imgDog.webp'
import racao from '../img/racao.jpg'
import Card from "../components/Card";
import Trofeu from "../img/trofeu.png"
import { FaTrophy } from 'react-icons/fa';

const Main = () =>{
    return(
        <div className='flex flex-col'>
            <div className='flex items-center justify-between p-20 px-50'>
                <div className='flex flex-col px-5 gap-15'>
                    <h1 className='text-8xl font-bold text-foreground text-slate-800'>Seja bem-vindo ao Petshop <span className='text-cyan-200'>Insight</span></h1>
                    <p className="text-3xl animate-fade-in-delayed text-slate-700 text-justify">
                        Cuidamos do seu pet com amor, carinho e dedicação. 
                        Produtos de qualidade, serviços especializados e muito mais 
                        para deixar seu melhor amigo sempre feliz e saudável.
                    </p>
                    <div className='flex gap-30 justify-start px-25'>
                        <button className='cursor-pointer bg-blue-600 py-3 px-10 rounded-xl shadow-lg shadow-blue-900 text-white font-bold uppercase'>Conheça Mais</button>
                        <button className='cursor-pointer bg-cyan-700 py-3 px-10 rounded-xl shadow-lg shadow-cyan-700 text-white font-bold uppercase'>Testando</button>
                    </div>
                </div>
                <img src={img2} className='w-150' />
            </div> 
            <div className='flex p-20 py-10 items-center justify-center flex-col'> 
                <h1 className='font-bold uppercase text-3xl text-slate-600 text-shadow-md'>produtos em destaque</h1>
                <div
                    id="produtos"
                    className="p-10 py-30 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
                >
                    {/* Exemplos de cards reutilizáveis */}
                    <Card
                    imagem={racao}
                    title="Serra Circular EK7651H"
                    description="100,00"
                    />
                    <Card
                    imagem={racao}
                    title="Serra Circular EK7651H"
                    description="100,00"
                    />
                    <Card
                    imagem={racao}
                    title="Serra Circular EK7651H"
                    description="100,00"
                    />
                    <Card
                    imagem={racao}
                    title="Serra Circular EK7651H"
                    description="100,00"
                    />                    
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='font-bold uppercase text-3xl text-slate-600 text-shadow-md'>Historia</h1>
                <div className='grid grid-cols-3 gap-10 justify-center px-10 py-40'>
                    <div className='flex flex-col items-center p-10 gap-10 bg-white rounded-xl shadow-xl'>
                        <div className='bg-slate-100 p-10 rounded-full border-1 border-slate-200'>
                            <img src={Trofeu} alt="" className='w-25'/> 
                        </div>
                        <h1 className='uppercase text-slate-500 font-bold text-lg'>Trabalho Web Dev</h1>
                        <p className=' text-slate-800 text-md text-justify'>
                            Somo alunos de Engenharia de Software da Fiap e realizamos esse trabalho para a materia de WebDev, 
                            Orientada pelo professor Wellington Cidade
                        </p>
                    </div>
                    <div className='flex flex-col items-center p-10 gap-10 bg-white rounded-xl shadow-xl'>
                        <div className='bg-slate-100 p-10 rounded-full border-1 border-slate-200'>
                            <img src={Trofeu} alt="" className='w-25'/> 
                        </div>
                        <h1 className='uppercase text-slate-500 font-bold text-lg'>Trabalho Web Dev</h1>
                        <p className=' text-slate-800 text-md text-justify'>
                            Somo alunos de Engenharia de Software da Fiap e realizamos esse trabalho para a materia de WebDev, 
                            Orientada pelo professor Wellington Cidade
                        </p> 
                    </div>
                    <div className='flex flex-col items-center p-10 gap-10 bg-white rounded-xl shadow-xl'>
                        <div className='bg-slate-100 p-10 rounded-full border-1 border-slate-200'>
                            <img src={Trofeu} alt="" className='w-25'/> 
                        </div> 
                        <h1 className='uppercase text-slate-500 font-bold text-lg'>Trabalho Web Dev</h1>
                        <p className=' text-slate-800 text-md text-justify'>
                            Somo alunos de Engenharia de Software da Fiap e realizamos esse trabalho para a materia de WebDev, 
                            Orientada pelo professor Wellington Cidade
                        </p>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main