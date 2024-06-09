import React from 'react'

function Background() {
  return (
    <>
      <div className='fixed z-[2] w-full h-screen'>
       <div className="navbar absolute top-16 w-full py-6 font-semibold text-zinc-600 text-2xl flex justify-center items-center ">Documnets.</div>
       <h1 className= 'absolute left-72 top-1/3 translate-x-[50%] translate-y-[50%] text-zinc-900 font-semibold text-[13vw] tracking-tighter leading-none'>Docs.</h1>
      </div>
     </>
  )
}

export default Background