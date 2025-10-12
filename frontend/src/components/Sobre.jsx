import React from 'react'
import img3 from '../img/img3.jpg'
import pata from '../img/pata.png'

const Sobre = () => {
  return (
    <div className='flex flex-col min-h-screen py-25'>
      {/* Seção Principal - Sobre a Empresa */}
      <div className='flex items-center justify-between px-10 py-20 gap-10'>
        <div className='flex-1'>
          <img 
            src={img3} 
            alt="PetShop Insight" 
            className='w-full rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300'
          />
        </div>
        <div className='flex-1 flex flex-col gap-8 px-10'>
          <h1 className='text-6xl font-bold text-slate-800 flex items-center gap-4'>
            <img src={pata} alt="" className='w-12 h-12'/>
            Sobre Nós
          </h1>
          <p className='text-2xl text-cyan-700 font-semibold'>
            Cuidando com amor desde 2015
          </p>
          <p className='text-lg text-slate-700 text-justify leading-relaxed'>
            O <span className='font-bold text-cyan-800 text-xl'>Insight PetClub</span> nasceu do amor incondicional que temos pelos animais. 
            Há mais de 8 anos no mercado, nos dedicamos a oferecer produtos de alta qualidade e 
            serviços especializados para garantir o bem-estar e a felicidade do seu melhor amigo.
          </p>
          <p className='text-lg text-slate-700 text-justify leading-relaxed'>
            Nossa equipe é formada por profissionais apaixonados e qualificados, incluindo veterinários, 
            pet groomers e consultores especializados em comportamento animal. Trabalhamos com as melhores 
            marcas do mercado e mantemos um rigoroso controle de qualidade em todos os nossos produtos.
          </p>
        </div>
      </div>

      {/* Seção Missão, Visão e Valores */}
      <div className='bg-slate-100 py-20 px-10'>
        <h2 className='text-4xl font-bold text-center text-slate-800 mb-16 uppercase'>
          Nossos Princípios
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto'>
          {/* Missão */}
          <div className='bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-t-4 border-cyan-500'>
            <div className='bg-cyan-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6'>
              <svg className='w-10 h-10 text-cyan-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
              </svg>
            </div>
            <h3 className='text-2xl font-bold text-slate-700 text-center mb-4 uppercase'>Missão</h3>
            <p className='text-slate-600 text-center leading-relaxed'>
              Proporcionar cuidados excepcionais e produtos de qualidade superior para pets, 
              promovendo saúde, bem-estar e momentos felizes entre animais e seus tutores.
            </p>
          </div>

          {/* Visão */}
          <div className='bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-t-4 border-blue-500'>
            <div className='bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6'>
              <svg className='w-10 h-10 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
              </svg>
            </div>
            <h3 className='text-2xl font-bold text-slate-700 text-center mb-4 uppercase'>Visão</h3>
            <p className='text-slate-600 text-center leading-relaxed'>
              Ser referência nacional em cuidados para pets, reconhecidos pela excelência no atendimento, 
              inovação em produtos e pelo compromisso com o bem-estar animal.
            </p>
          </div>

          {/* Valores */}
          <div className='bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-t-4 border-cyan-600'>
            <div className='bg-cyan-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6'>
              <svg className='w-10 h-10 text-cyan-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
              </svg>
            </div>
            <h3 className='text-2xl font-bold text-slate-700 text-center mb-4 uppercase'>Valores</h3>
            <p className='text-slate-600 text-center leading-relaxed'>
              Amor pelos animais, ética profissional, compromisso com a qualidade, 
              respeito ao meio ambiente e dedicação total à satisfação dos nossos clientes.
            </p>
          </div>
        </div>
      </div>

      {/* Seção Diferenciais */}
      <div className='py-20 px-10'>
        <h2 className='text-4xl font-bold text-center text-slate-800 mb-16 uppercase'>
          Por que escolher o Insight?
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto'>
          <div className='flex flex-col items-center text-center gap-4 p-6 hover:bg-slate-50 rounded-xl transition-colors'>
            <div className='bg-cyan-200 p-6 rounded-full'>
              <svg className='w-12 h-12 text-cyan-700' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
            </div>
            <h3 className='font-bold text-xl text-slate-700'>Produtos Certificados</h3>
            <p className='text-slate-600'>Trabalhamos apenas com marcas reconhecidas e produtos aprovados</p>
          </div>

          <div className='flex flex-col items-center text-center gap-4 p-6 hover:bg-slate-50 rounded-xl transition-colors'>
            <div className='bg-blue-200 p-6 rounded-full'>
              <svg className='w-12 h-12 text-blue-700' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' />
              </svg>
            </div>
            <h3 className='font-bold text-xl text-slate-700'>Equipe Especializada</h3>
            <p className='text-slate-600'>Profissionais capacitados e em constante atualização</p>
          </div>

          <div className='flex flex-col items-center text-center gap-4 p-6 hover:bg-slate-50 rounded-xl transition-colors'>
            <div className='bg-cyan-200 p-6 rounded-full'>
              <svg className='w-12 h-12 text-cyan-700' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
            </div>
            <h3 className='font-bold text-xl text-slate-700'>Atendimento Ágil</h3>
            <p className='text-slate-600'>Estamos sempre prontos para atender você e seu pet</p>
          </div>

          <div className='flex flex-col items-center text-center gap-4 p-6 hover:bg-slate-50 rounded-xl transition-colors'>
            <div className='bg-blue-200 p-6 rounded-full'>
              <svg className='w-12 h-12 text-blue-700' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' />
              </svg>
            </div>
            <h3 className='font-bold text-xl text-slate-700'>Ambiente Acolhedor</h3>
            <p className='text-slate-600'>Espaço confortável e seguro para seu pet</p>
          </div>
        </div>
      </div>

      {/* Seção Estatísticas */}
      <div className='bg-gradient-to-r from-cyan-600 to-blue-600 py-16 px-10'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center text-white'>
          <div className='flex flex-col items-center'>
            <p className='text-5xl font-bold mb-2'>8+</p>
            <p className='text-xl'>Anos de Experiência</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-5xl font-bold mb-2'>5000+</p>
            <p className='text-xl'>Clientes Satisfeitos</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-5xl font-bold mb-2'>500+</p>
            <p className='text-xl'>Produtos Disponíveis</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-5xl font-bold mb-2'>24/7</p>
            <p className='text-xl'>Suporte Online</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className='py-20 px-10 text-center'>
        <h2 className='text-4xl font-bold text-slate-800 mb-6'>
          Venha conhecer nossa loja!
        </h2>
        <p className='text-xl text-slate-600 mb-8 max-w-3xl mx-auto'>
          Estamos prontos para receber você e seu pet com todo carinho que vocês merecem. 
          Faça uma visita ou entre em contato conosco!
        </p>
        <div className='flex gap-6 justify-center'>
          <a href='/contatos'>
            <button className='bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-10 rounded-xl shadow-lg transition-all duration-300 uppercase hover:scale-105'>
              Entre em Contato
            </button>
          </a>
          <a href='/produtos'>
            <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-xl shadow-lg transition-all duration-300 uppercase hover:scale-105'>
              Ver Produtos
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sobre
