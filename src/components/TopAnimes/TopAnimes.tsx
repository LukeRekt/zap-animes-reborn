import { Heart, Repeat, Share, Star } from "lucide-react"

export default function TopAnimes(){

    const listaAnimes = [
        {
            nome: "Berserk",
            nota: "5.0",
            imagem: "https://images5.alphacoders.com/135/thumb-440-1359381.webp",
        },
        {
            nome: "Jujutso Kaizen",
            nota: "5.0",
            imagem: "https://images4.alphacoders.com/134/thumbbig-1349705.webp",
        },
        {
            nome: "Demon Slayer",
            nota: "5.0",
            imagem: "https://picfiles.alphacoders.com/647/thumb-800-647488.webp",
        },
        {
            nome: "Fullmetal Alchemist",
            nota: "5.0",
            imagem: "https://images5.alphacoders.com/830/thumb-440-830362.webp",
        },
      
        {
            nome: "Hunter x Hunter",
            nota: "5.0",
            imagem: "https://mfiles.alphacoders.com/994/thumb-350-994367.jpg",
        },
        
    ]

    return (
        <div className="flex flex-col  h-[95%] justify-between  pl-2 pr-2 pt-1 pb-1 rounded-sm font-montserrat ">
           {listaAnimes.map((item, index) =>{
            return <div className="flex items-center gap-4 ">
                <p>{index + 1}</p>
                        <div className="w-24 h-15 overflow-hidden rounded-sm">
                            <img className="" src={item.imagem}/>
                        </div>
                        <div className="flex justify-between text-[0.7em] flex-col ml-1">
                            <p >{item.nome}</p>
                            <p className="flex items-center gap-0.5 text-[0.68em] text-amber-500"><Star className="w-3"/> {item.nota}</p>
                             <div className="flex gap-2">
                            <p className="flex items-center gap-0.5 text-[0.68em]"><Heart className="w-3 text-red-500"/> 5.000</p>
                            <p className="flex items-center gap-0.5 text-[0.68em]"><Repeat className="w-3 text-lime-200"/> 1.000</p>
                             </div>
                        </div> 
                    </div>
            
            
           } )}
        </div>
    )
}