import { CircleDot, CircleDotDashed, Play, SquarePlus } from 'lucide-react'
import carouselImagem from '../../assets/1350256.jpeg'

export default function Carousel(){
    return(
        <div className='relative w-[70em] h-[95%] rounded-sm overflow-hidden font-montserrat shadow-amber-500 shadow-2xl/5'>
            <div className='bg-[#0000008f] z-10 w-[100%] h-[100%] absolute flex flex-col justify-end'>
               <div className='flex flex-col gap-2 justify-end mb-18 ml-5'>
                <h1>Jujutsu Kaizen</h1>
                <div className='flex gap-2'>
                    <small className='bg-amber-600 p-0.5 pl-1.5 pr-1.5 rounded-xs opacity-80'>Acao</small>
                    <small className='bg-amber-600 p-0.5 pl-1.5 pr-1.5 rounded-xs opacity-80'>Acao</small>
                    <small className='bg-amber-600 p-0.5 pl-1.5 pr-1.5 rounded-xs opacity-80'>Acao</small>
                </div>
                    <p className='text-xs font-normal w-[60%] text-amber-100'>
                        Um xamã estudando no primeiro ano na Escola
                        Técnica Superior de Jujutsu de Tóquio, sob
                        a tutela de Satoru Gojou. Ele conhece Yuji
                        ao tentar localizar um talismã de charme
                        amaldiçoado de alta qualidade em sua escola.
                        Ele é o único que convence Satoru a tentar
                        salvar Yuji de sua execução após sua posse por Sukuna.
                    </p>
                    <div className='flex gap-2 text-[0.6rem]'>
                        <button className='flex gap-1 items-center bg-amber-600 pr-1 pl-1 rounded-xs text-amber-100 opacity-80 duration-200 cursor-pointer hover:opacity-100'>
                            <SquarePlus className='w-4'/> Minha Lista</button>
                        <button className='flex gap-1 items-center bg-amber-600 pr-1 pl-1 rounded-xs text-amber-100 opacity-80 duration-200 cursor-pointer hover:opacity-100'>
                            <Play className='w-4'/> Assistir agora</button>
                    </div>
               </div>
            </div>
            
            <img className='w-[100%] h-[100%] ' src={carouselImagem}/>

            <div className='flex items-center gap-1 absolute bottom-5 left-[45%] z-20 '>
                <CircleDot className='text-amber-500 w-4'/>
                <CircleDotDashed className='w-4 text-amber-100'/>
                <CircleDotDashed className='w-4 text-amber-100'/>
                <CircleDotDashed className='w-4 text-amber-100'/>
            </div>
        </div>
    )
}