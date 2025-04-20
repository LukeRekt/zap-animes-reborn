import { Search } from "lucide-react";

export default function SearchBar(){
    return(
    <div className="flex items-center gap-2">
        <Search className="text-[#ffffff] w-5"/>
        <input type="text" placeholder=""
         className="bg-[#35353542] text-[#ffffff] w-[30em] p-0.5 pl-2 text-sm rounded-sm placeholder:font-normal" />
    </div>        
    )
}