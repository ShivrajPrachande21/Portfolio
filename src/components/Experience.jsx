import React from 'react'
import {EXPERIENCES} from '../constants'
import {motion} from "framer-motion"
const Experience = () => {
  return (
    <div className='pb-4'>
        <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}} className='my-20 text-center text-4xl'> Experience  </motion.h2>
            <div>
                {EXPERIENCES.map((exp,index)=>(
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}} className="w-full lg:w-1/4">
                        <p className='mb-2 mt-3 text-xl text-stone-400'>
                            {exp.year}
                        </p>
                        </motion.div>
                        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className="w-full  lg:w-[56%]">
                            <h3 className='mb-2 font-semibold text-xl'>
                                {exp.role} - {''}
                                <span className='text-xl text-stone-500'>
                                    {exp.company}
                                </span>
                            </h3>
                           
                            {exp.technologies.map((tech,index)=>(
                                <span className='mr-2 mt-8  rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-399' key={index}>
                                    {tech}
                                </span>
                            ))}
                            <p className='mb-4 mt-4 text-stone-400'>{exp.description}</p>
                            <ul className="list-disc pl-5">
                                     <li>{exp.list1}</li>
                                 <li>{exp.list2}</li>
                            </ul>
                           
                        </motion.div>
                    </div>
                ))}
            </div>
     
    </div>
  )
}

export default Experience