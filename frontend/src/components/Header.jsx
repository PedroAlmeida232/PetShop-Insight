import React from 'react'

const Header = () => {
  return (
    <div className='bg-none flex justify-between items-center p-5 px-10'>
        <div id="logo" className='text-center p-5 text-2xl font-semibold'> 
            <h2 className='uppercase text-cyan-500'>Insight PetClub</h2>
        </div>
        <div id="navbar" className='font-medium'>
            <ul className="flex justify-center list-none p-5 m-0 space-x-4 gap-15 text-base">
                <li>
                    <a href="/home" className='uppercase text-cyan-500'>Home</a>
                </li>
                <li>
                    <a href="/produtos" className='uppercase text-cyan-500'>Produtos</a>
                </li>
                <li>
                    <a href="/sobre" className='uppercase text-cyan-500'>Sobre</a>
                </li>
                <li>
                    <a href="/contatos" className='uppercase text-cyan-500'>Contato</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header