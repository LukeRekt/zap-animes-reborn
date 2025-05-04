import { Star } from "lucide-react";
import Carousel from "../components/Carousel/Carousel";
import TopAnimes from "../components/TopAnimes/TopAnimes";
import AnimeItem from "../components/AnimeItem/AnimeItem";
import { useEffect, useState } from "react";
import { getAnimes } from "../api/animes";

export default function Home(){
    const [animesData, setAnimes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    async function getUserData() {
        try {
                const res = await getAnimes(); 
                if (res.error) {
                  console.log(res.error);
   
                    }
                else {
                    setAnimes(res)
                  console.log(res)
                  setIsLoading(false)
                }
            } catch (err) {
     
                console.log(err);
            }
      }
      getUserData();
      }, []);



    const listaAnimes = [
        {
            nome: "Berserk",
            nota: "5.0",
            imagem: "https://m.media-amazon.com/images/I/81RxEOuY-XL._AC_UF894,1000_QL80_.jpg",
        },
        {
            nome: "Jujutso Kaizen",
            nota: "5.0",
            imagem: "https://m.media-amazon.com/images/I/81s+jxE5KEL._AC_SL1500_.jpg",
        },
        {
            nome: "Demon Slayer",
            nota: "5.0",
            imagem: "https://picfiles.alphacoders.com/647/thumb-800-647488.webp",
        },
        {
            nome: "Fullmetal Alchemist",
            nota: "5.0",
            imagem: "https://m.media-amazon.com/images/I/71YYVENqPaL._AC_UF894,1000_QL80_.jpg",
        },
      
        {
            nome: "Hunter x Hunter",
            nota: "5.0",
            imagem: "https://mfiles.alphacoders.com/994/thumb-350-994367.jpg",
        },
        {
            nome: "Demon Slayer",
            nota: "5.0",
            imagem: "https://picfiles.alphacoders.com/647/thumb-800-647488.webp",
        },
        {
            nome: "Fullmetal Alchemist",
            nota: "5.0",
            imagem: "https://m.media-amazon.com/images/I/71YYVENqPaL._AC_UF894,1000_QL80_.jpg",
        },
      
        {
            nome: "Hunter x Hunter",
            nota: "5.0",
            imagem: "https://mfiles.alphacoders.com/994/thumb-350-994367.jpg",
        },
        {
            nome: "Berserk",
            nota: "5.0",
            imagem: "https://m.media-amazon.com/images/I/81RxEOuY-XL._AC_UF894,1000_QL80_.jpg",
        },
        {
            nome: "Jujutso Kaizen",
            nota: "5.0",
            imagem: "https://m.media-amazon.com/images/I/81s+jxE5KEL._AC_SL1500_.jpg",
        },
        {
            nome: "Demon Slayer",
            nota: "5.0",
            imagem: "https://picfiles.alphacoders.com/647/thumb-800-647488.webp",
        },
        {
            nome: "Fullmetal Alchemist",
            nota: "5.0",
            imagem: "https://m.media-amazon.com/images/I/71YYVENqPaL._AC_UF894,1000_QL80_.jpg",
        },
      
        {
            nome: "Hunter x Hunter",
            nota: "5.0",
            imagem: "https://mfiles.alphacoders.com/994/thumb-350-994367.jpg",
        },
        {
            nome: "Demon Slayer",
            nota: "5.0",
            imagem: "https://picfiles.alphacoders.com/647/thumb-800-647488.webp",
        },
        {
            nome: "Fullmetal Alchemist",
            nota: "5.0",
            imagem: "https://m.media-amazon.com/images/I/71YYVENqPaL._AC_UF894,1000_QL80_.jpg",
        },
      
        {
            nome: "Hunter x Hunter",
            nota: "5.0",
            imagem: "https://mfiles.alphacoders.com/994/thumb-350-994367.jpg",
        }
    ]


    return (
        <div className="flex flex-col items-center font-montserrat bg-linear-to-t from-[#213547] to-amber-500/0.01">
         <section className="h-[30em] ">
              <div className="flex justify-center gap-5 h-[100%]">
                <div className="h-[100%] ">
                    <p className="flex gap-1 text-[0.7rem] items-center text-amber-500">
                        <Star className="w-4"/> Os mais comentados
                    </p>
                    <Carousel/>
                </div>
                <div className="h-[100%] ">
                     <p className="flex gap-1 text-[0.7rem] items-center text-amber-500">
                        <Star className="w-4"/> Top 5 Animes
                    </p>
                    <TopAnimes/>
                </div>
                
              </div>

         </section>


         {/* Conteudo de animes */}
            <div className="w-[95%] flex flex-col mt-7">
                <div>
                    <h1 className="text-xl font-medium text-amber-500 opacity-90">Os que nao saem da boca do povo</h1>
                    <p className="text-gray-600 text-xs">Com base nos animes mais comentados do momento.</p>
                </div>
                <AnimeItem animes={animesData}/>
    
            </div>
        </div>
    )
}