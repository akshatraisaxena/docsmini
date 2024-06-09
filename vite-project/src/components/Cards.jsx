import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { RiDownloadLine } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";

function Cards({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} className="flex-shrink-0 relative w-52 h-64 rounded-[40px] bg-zinc-600/90 text-white px-5 py-10 overflow-hidden">
        <FaFileAlt />
        <p className='text-sm font-semibold leading-tight mt-5'>{data.desc}</p>
        <div className="lower w-full h-28 py-4 absolute bottom-0 left-0 ">
            <div className="elements  flex items-center justify-between px-5 py-4">
                <h5>{data.filesize}</h5>
                <span className='w-5 h-5 rounded-full flex items-center justify-center bg-zinc-200 text-black' >
                 {data.close ? <IoCloseSharp /> : <RiDownloadLine /> }
                </span> 
            </div>
             {data.tag.isopen && (        
             <div className={`tag w-full py-3 ${data.tag.tagColor==="blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                 <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
             </div> )
            
             }

                  
        </div>
    </motion.div>
  )
}

export default Cards