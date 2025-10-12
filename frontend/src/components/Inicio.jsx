import React from 'react'
import img2 from '../img/imgDog.webp'
import Trofeu from "../img/trofeu.png"
import Estast from "../img/estatistica.png"
import Mao from "../img/mao.png"
import fiap from "../img/fiap.webp"


const Main = () =>{
    return(
        <div className='flex flex-col'>
            <div className='flex items-center justify-between p-25 px-50'>
                <div className='flex flex-col px-5 gap-15'>
                    <h1 className='text-8xl font-bold text-foreground text-slate-800'>Seja bem-vindo ao Petshop <span className='text-cyan-200'>Insight</span></h1>
                    <p className="text-3xl animate-fade-in-delayed text-slate-700 text-justify">
                        Cuidamos do seu pet com amor, carinho e dedicação. 
                        Produtos de qualidade, serviços especializados e muito mais 
                        para deixar seu melhor amigo sempre feliz e saudável.
                    </p>
                    <div className='flex gap-8 justify-start items-center'>
                        <a href='/sobre' className='group'>
                            <button className='relative cursor-pointer bg-gradient-to-r from-blue-600 to-blue-700 py-4 px-10 rounded-2xl shadow-2xl text-white font-bold text-base uppercase hover:from-blue-700 hover:to-blue-800 hover:scale-105 hover:shadow-cyan-500/50 transition-all duration-500 ease-out transform hover:-translate-y-1 border-2 border-blue-400/30 min-w-[180px]'>
                                <span className='relative z-10'>Conheça Mais</span>
                                <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 to-cyan-400/0 group-hover:from-cyan-400/20 group-hover:to-blue-400/20 transition-all duration-500'></div>
                            </button>
                        </a>
                        <a href='/contatos' className='group'>
                            <button className='relative cursor-pointer bg-gradient-to-r from-cyan-500 to-cyan-600 py-4 px-10 rounded-2xl shadow-2xl text-white font-bold text-base uppercase hover:from-cyan-600 hover:to-cyan-700 hover:scale-105 hover:shadow-blue-500/50 transition-all duration-500 ease-out transform hover:-translate-y-1 border-2 border-cyan-400/30 min-w-[180px]'>
                                <span className='relative z-10'>Contato</span>
                                <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/0 to-blue-400/0 group-hover:from-blue-400/20 group-hover:to-cyan-400/20 transition-all duration-500'></div>
                            </button>
                        </a>
                    </div>
                </div>
                <img src={img2} className='w-150' />
            </div> 
            <div className='flex p-20 py-35 items-center justify-center flex-col bg-black'> 
                <h1 className='font-bold uppercase text-3xl text-slate-100 text-shadow-md'>marcas parceiras</h1>
                <div
                    id="produtos"
                    className="py-20 flex flex-col justify-center items-center"
                >
                  <img src={fiap} alt="" /> 
                  <div className='w-300 h-2 bg-pink-800'></div>             
                </div>   
            </div>
            <div className='flex flex-col items-center p-2 py-20'>
                <h1 className='font-bold uppercase text-3xl text-slate-600 text-shadow-md'>Um pouco sobre nós</h1>
                <div className='grid grid-cols-3 gap-10 justify-center px-10 py-40'>
                    <div className='flex flex-col items-center p-10 gap-10 bg-slate-200 rounded-xl shadow-xl'>
                        <div className='bg-slate-100 p-10 rounded-full border-1 border-slate-200'>
                            <img src={Trofeu} alt="" className='w-25'/> 
                        </div>
                        <h1 className='uppercase text-slate-500 font-bold text-lg'>Cuidado de Campeão</h1>
                        <p className=' text-slate-800 text-md text-justify'>
                            Seu pet merece um tratamento premiado! Oferecemos serviços de alta qualidade, 
                            desde o banho e tosa até o atendimento veterinário, 
                            garantindo que seu melhor amigo receba o cuidado e o carinho de um verdadeiro campeão.
                        </p>
                    </div>
                    <div className='flex flex-col items-center p-10 gap-10 bg-slate-200 rounded-xl shadow-xl'>
                        <div className='bg-slate-100 p-10 rounded-full border-1 border-slate-200'>
                            <img src={Estast} alt="" className='w-25'/> 
                        </div>
                        <h1 className='uppercase text-slate-500 font-bold text-lg'>Saúde e Desenvolvimento</h1>
                        <p className=' text-slate-800 text-md text-justify'>
                            Acompanhamos a saúde e o bem-estar do seu pet em todas as fases da vida. 
                            Com nosso suporte nutricional, vacinação em dia e check-ups regulares, 
                            garantimos um crescimento saudável e feliz para o seu companheiro.
                        </p> 
                    </div>
                    <div className='flex flex-col items-center p-10 gap-10 bg-slate-200 rounded-xl shadow-xl'>
                        <div className='bg-slate-100 p-10 rounded-full border-1 border-slate-200'>
                            <img src={Mao} alt="" className='w-25'/> 
                        </div> 
                        <h1 className='uppercase text-slate-500 font-bold text-lg'>Parceria e Confiança</h1>
                        <p className=' text-slate-800 text-md text-justify'>
                            Somos mais que um petshop, somos seus parceiros no cuidado com quem você mais ama. 
                            Conte com nossa equipe para construir uma relação de confiança, 
                            oferecendo sempre o melhor atendimento e os produtos ideais para o seu pet.
                        </p>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main