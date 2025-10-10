import React from 'react'
import img2 from '../img/img2.jpg'
import racao from '../img/racao.jpg'
import Card from "../components/Card";

const Main = () =>{
    return(
        <div className=''>
            <div>
                <img src={img2} className='w-full h-170' />
            </div>
            <div className='flex p-20 items-center justify-center flex-col'> 
                <h1 className='font-bold uppercase text-3xl text-cyan-700'>produtos</h1>
                <div className='p-20 grid gap-10 md:grid-cols-2 lg:grid-cols-4'>
                    <Card
                    imagem={racao}
                    title="Ração Golden Mini Bits"
                    description="Uma ferramenta potente e compacta para cortes secos em materiais como azulejo, mármore e concreto."
                    />
                    <Card
                    imagem={racao}
                    title="Serra Circular EK7651H"
                    description="Uma ferramenta potente e compacta para cortes secos em materiais como azulejo, mármore e concreto."
                    />
                    <Card
                    imagem={racao}
                    title="Serra Circular EK7651H"
                    description="Uma ferramenta potente e compacta para cortes secos em materiais como azulejo, mármore e concreto."
                    />
                    <Card
                    imagem={racao}
                    title="Serra Circular EK7651H"
                    description="Uma ferramenta potente e compacta para cortes secos em materiais como azulejo, mármore e concreto."
                    />
                    <Card
                    imagem={racao}
                    title="Serra Circular EK7651H"
                    description="Uma ferramenta potente e compacta para cortes secos em materiais como azulejo, mármore e concreto."
                    />
                    <Card
                    imagem={racao}
                    title="Serra Circular EK7651H"
                    description="Uma ferramenta potente e compacta para cortes secos em materiais como azulejo, mármore e concreto."
                    />
                    <Card
                    imagem={racao}
                    title="Serra Circular EK7651H"
                    description="Uma ferramenta potente e compacta para cortes secos em materiais como azulejo, mármore e concreto."
                    />
                    <Card
                    imagem={racao}
                    title="Serra Circular EK7651H"
                    description="Uma ferramenta potente e compacta para cortes secos em materiais como azulejo, mármore e concreto."
                    />
                    <Card
                    imagem={racao}
                    title="Serra Circular EK7651H"
                    description="Uma ferramenta potente e compacta para cortes secos em materiais como azulejo, mármore e concreto."
                    />
                    <Card
                    imagem={racao}
                    title="Serra Circular EK7651H"
                    description="Uma ferramenta potente e compacta para cortes secos em materiais como azulejo, mármore e concreto."
                    />
                    <Card
                    imagem={racao}
                    title="Serra Circular EK7651H"
                    description="Uma ferramenta potente e compacta para cortes secos em materiais como azulejo, mármore e concreto."
                    />
                    <Card
                    imagem={racao}
                    title="Serra Circular EK7651H"
                    description="Uma ferramenta potente e compacta para cortes secos em materiais como azulejo, mármore e concreto."
                    />
                </div>
            </div>
        </div>
    )
}

export default Main