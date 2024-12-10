import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { SiJavascript } from 'react-icons/si';
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';
import {animate, inView, motion} from 'framer-motion'
const Technologies = () => {
    const iconVariants=(duration)=>({
        initial:{y:-10},
        animate:{
            y:[10,-10],
            transition:{
                duration:duration,
                ease:"linear",
                repeat:Infinity,
                repeatType:"reverse"
            }
        }
    })
    return (
        <div className="pb-24">
            <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className="my-20 text-center text-4xl">Technologies</motion.h2>
            <motion.div whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className="flex flex-wrap items-center justify-center gap-4">
                <motion.div initial="initial" animate="animate" variants={iconVariants(2.4)}>
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="p-4">
                    <SiJavascript size={50} color="yellow" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(5)} className="p-4">
                    <AiFillHtml5 size={50} color="#E34F26" title="HTML" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(2)} className="p-4">
                    <DiCss3 size={50} color="#1572B6" title="CSS" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(6)} className="p-4">
                    <SiTailwindcss
                        size={50}
                        color="#06B6D4"
                        title="TailwindCSS"
                    />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(4)} className="p-4">
                    <AiFillGithub size={50} color="white" title="GitHub" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies;
