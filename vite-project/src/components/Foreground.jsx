import React from 'react'
import Cards from './Cards'


function Foreground() {
    const ref = useRef(null);

    const data =[
        {
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, voluptates? jai shree",
        filesize : ".9mb",
        close : false,
        tag:{ isopen: true , tagTitle: "Download now", tagColor :"blue"},
    },
        {
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, voluptates? jai shree",
        filesize : ".9mb",
        close : false,
        tag:{ isopen: true , tagTitle: "Download now", tagColor :"green"},
    },
        {
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, voluptates? jai shree",
        filesize : ".9mb",
        close : false,
        tag:{ isopen: true , tagTitle: "Upload", tagColor :"blue"},
    }
   ]
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
       {data.map((item,index)=>(
        <Cards data={item} reference={ref}/>
       ))}
    </div>
  )
}

export default Foreground