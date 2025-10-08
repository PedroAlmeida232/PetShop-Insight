import React from 'react'

const Header = () => {
  return (
    <div className='bg-yellow-300'>
        <div id="logo" className='text-center p-5 text-2xl font-semibold'> 
            <h2>Insight Pet Club</h2>
        </div>

        <hr className="my-0 border-black w-3/4 mx-auto" />

        <div id="navbar" className='font-medium'>
            <ul className="flex justify-center list-none p-5 m-0 space-x-4 gap-15 text-base">
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/produtos">Produtos</a>
                </li>
                <li>
                    <a href="/sobre">Sobre</a>
                </li>
                <li>
                    <a href="/contatos">Contato</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header