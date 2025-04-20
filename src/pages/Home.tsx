import { Star } from "lucide-react";
import Carousel from "../components/Carousel/Carousel";
import TopAnimes from "../components/TopAnimes/TopAnimes";

export default function Home(){
    return (
        <div>
         <section>
              <div className="flex justify-center mt-3 gap-5 h-[30em]">
                <div>
                    <p className="flex gap-1 text-[0.7rem] items-center text-amber-500">
                        <Star className="w-4"/> Os mais comentados
                    </p>
                    <Carousel/>
                </div>
                <div>
                     <p className="flex gap-1 text-[0.7rem] items-center text-amber-500">
                        <Star className="w-4"/> Top 5 Animes
                    </p>
                    <TopAnimes/>
                </div>
                
              </div>


            {/* Top 5 animes */}
              <div>

              </div>
         </section>
        </div>
    )
}