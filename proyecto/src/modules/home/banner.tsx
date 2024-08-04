import Typewriter from "../utilities/typewriter.tsx";
import Planet from "../../assets/neutral/planet-orbit-neutral.svg";
import React from "react";

const greetings = [
    "Hi!, I am",
    "¡Hola!, Soy",
    "Bonjour!, Je suis",
    "Hallo!, Ich bin",
    "Ciao!, Sono",
    "Olá!, Eu sou",
    "Привет!, Я",
    "こんにちは!, 私は",
    "你好!, 我是",
    "안녕하세요!, 저는"
];

const Banner:React.FC<{ t: (key: string) => string }> = ({t}) => {
    return (
        <div className="p-10 text-neutral-800 w-full h-full flex max-[800px]:flex-col-reverse bg-gradient-to-r from-[#079ef6] via-[#1e2d6f] to-[#02081a]">
            <div className="min-[800px]:p-10 min-[800px]:w-1/2 text-white flex flex-col">
                <Typewriter strings={greetings} />
                <div className="text-8xl max-[800px]:text-6xl h-fit font-rubikMonoOne underline">Mena</div>
                <p className="pt-4 pb-4 font-extralight text-lg max-[800px]:text-sm">
                    {t('introduction')}
                </p>
            </div>
            <div className="overflow-hidden flex flex-row items-center justify-end w-1/2 max-[800px]:hidden">
                <img src={Planet} className="relative min-h-[300px] h-[300px]" alt="Planet" />
            </div>
        </div>
    )
}

export default Banner