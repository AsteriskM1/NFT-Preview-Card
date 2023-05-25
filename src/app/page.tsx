"use client"

import { Inter } from 'next/font/google'
import Image from 'next/image'

import { clock, ethereum, hover, equilibrium, avatar } from '@/assets'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isHovering, setIsHovered] = useState<boolean>(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <main className="w-[350px] h-[569px] bg-[#14263D] rounded-[16px] drop-shadow-1">
      <div className="w-[306px] h-[545px] m-auto">
        <div className="w-[306px] h-[296px] mt-4 flex justify-center overflow-auto rounded-[16px] hover:cursor-pointer" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          {isHovering ?
          <Image 
            src={hover}
            alt='a picture of an NFT called equilibrium'
            className="fill"
          /> : 
          <Image 
            src={equilibrium}
            alt='a bluish background over the picture with a logo of an eye in the center'
            className="fill"
          /> 
          }
        </div>
        <div>
          <h1 className="text-2xl font-semibold mt-4 hover:text-[#00FFF6] cursor-pointer">Equilibrium #3429</h1>
          <p className="text-lg leading-6 font-light mt-4 opacity-60">Our Equilibrium collection promotes balance and calm.</p>
        </div>
        <div className="flex flex-row justify-between mt-3">
          <div className="flex flex-row">
            <Image src={ethereum} alt="ethereum" width={14} height={11} />
            <p className="text-lg font-semibold text-[#00FFF6] ml-1">0.041 ETH</p>
          </div>
          <div className="flex flex-row ">
            <Image src={clock} alt="ethereum" width={18} height={16} />
            <p className="text-lg font-normal ml-1">3 days left</p>
          </div>
        </div>
        <div className="border-t-[1px] border-t-[#8BACD9] mt-4" />
        <div className="flex flex-row items-center mt-4">
          <div className="w-[48px] h-[48px]">
            <Image 
              src={avatar}
              alt="picture of a person"
              className="ring-2 ring-white rounded-full"
            />
          </div>
          <h1 className="ml-4 text-lg font-light opacity-60">Creation of</h1> {" "}
          <h1 className="ml-[0.35rem] text-lg font-light hover:text-[#00FFF6] cursor-pointer">Jules Wyvern</h1>
        </div>
      </div>
    </main>
  )
}
