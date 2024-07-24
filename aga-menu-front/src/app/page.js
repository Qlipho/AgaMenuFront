import React from 'react'
import Image from 'next/image'

const Page = () => {
  const items = [
    { icone: 'icone 1', nome: 'nome 1', link: 'link 1' },
    { icone: 'icone 2', nome: 'nome 2', link: 'link 2' },
    { icone: 'icone 3', nome: 'nome 3', link: 'link 3' },
    { icone: 'icone 4', nome: 'nome 4', link: 'link 4' }
  ]

  return (
    <div className='flex h-screen w-screen bg-gradient-to-r from-cyan-500 via-blue-400 to-blue-500 justify-center items-center'>
      <div className='h-4/5 pt-9 text-center  w-3/5'>
        <div className='flex justify-center items-center mb-6 bg-white shadow-lg'>
          <Image
            src="/icone.png"
            alt="Ícone AgaMenu"
            width={50}
            height={50}
            className='mr-3'
          />
          <h1 className='p-2 text-3xl text-gray-800'>AgaMenu</h1>
        </div>
        <div className='justify-start'>
          <ul>
            {items.map((item, index) => (
              <li key={index} className='shadow-lg p-4 mb-4 bg-white rounded-md'>
                <a href={item.link}>
                  <span>{item.icone}</span>
                  <span className='pl-8'>{item.nome}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Page
