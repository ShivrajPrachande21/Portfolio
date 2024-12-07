import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { SiJavascript } from 'react-icons/si';
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';
const Technologies = () => {
    return (
        <div className="pb-24">
            <h2 className="my-20 text-center text-4xl">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div>
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </div>
                <div className="p-4">
                    <SiJavascript size={50} color="yellow" />
                </div>
                <div className="p-4">
                    <AiFillHtml5 size={50} color="#E34F26" title="HTML" />
                </div>
                <div className="p-4">
                    <DiCss3 size={50} color="#1572B6" title="CSS" />
                </div>
                <div className="p-4">
                    <SiTailwindcss
                        size={50}
                        color="#06B6D4"
                        title="TailwindCSS"
                    />
                </div>
                <div className="p-4">
                    <AiFillGithub size={50} color="white" title="GitHub" />
                </div>
            </div>
        </div>
    );
};

export default Technologies;
