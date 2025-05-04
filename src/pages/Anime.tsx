import { useEffect, useState } from "react";
import { getAnime } from "../api/animes";
import { useParams } from "react-router-dom";

export default function Anime(){
    const [animeData, setAnimeData] = useState()
    const [isLoading, setIsLoading] = useState(true);
    
    const params = useParams();
    
        useEffect(() => {
        async function getUserData() {
            try {
                    const res = await getAnime(params.nome); 
                    if (res.error) {
                      console.log(res.error);
       
                        }
                    else {
                        setAnimeData(res)
                      console.log(res)
                      setIsLoading(false)
                    }
                } catch (err) {
         
                    console.log(err);
                }
          }
          getUserData();
          }, []);

          if(isLoading){
            return <>Carregando</>
          }

    return(
        <>
        <img src={animeData.photoLarge} className="w-[100vw] h-[80vh] object-cover"/>
        {animeData.name}
        {animeData.slug}
        {animeData.descricao}
        {animeData.dataLancamento}
        
        </>
    )
}