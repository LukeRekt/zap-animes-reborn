

export default function AnimeItem({animes}){
    return (
        <div className="mt-3 grid grid-cols-8 w-[100%] gap-y-5 font-montserrat">
            {animes.map((item, index) => {
                return <div className="w-[10em] h-[15em] rounded-sm hover:border-2 p-0.5 overflow-hidden cursor-pointer relative duration-75 hover:shadow-[0_0_50px_1px_#ffffff52]">
                            <img className="w-[100%] h-[100%] rounded-sm" src={item.imagem}/>
                            <div className="absolute top-0.5 left-0.5 bg-[#ffffffea] rounded-tr-lg pr-1 text-[#000000] ">Novo Episodio</div>
                        </div>
            })}
        </div>
    )
}