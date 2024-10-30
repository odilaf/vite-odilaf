import React from 'react'

export default function Herosection() {
  return (
    <div className = "flex justify-center gap-10 mt-20">
      <div>
        <h1 className = "text-[38px] font-bold">
        Hi, I am Odilaf, <br/>
        a Web Developer
        </h1>
        <p className ="mt-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit{" "}.  Earum ex beatae asperiores,blanditiis voluptaseaque, <br/> commodi error dolores laborum sequi sapiente inventore fuga perferendis veritatis aut consequatur <br/> ipsam incidunt cupiditate.
        </p>
        <button className = 'bg-red-500 p-2 mt-6 text-sm text-white hover: bg-red-600'>
            Download Resume

        </button>
      </div>
      <div>
        <img 
        src='/public/images/2baba.jpg'alt='photo'
        className='w-60 h-60 rounded-full'
        />

      </div>
    </div>
  )
}
