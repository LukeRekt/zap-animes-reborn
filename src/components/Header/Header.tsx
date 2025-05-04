import logo from '../../assets/Zap Animes 2.png'
import avatar from '../../assets/47284018.jfif'
import SearchBar from './SearchBar/SearchBar'
import { Bell, Calendar, DiamondPlus, Ellipsis, Home, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

// #ff9900
export default function Header(){
    return (
        <div className='flex items-center justify-between p-4 font-montserrat'>
            <div className='flex items-center gap-5'>
                <Link to="/"><img src={logo} className='w-30 h-10 object-cover'/></Link>
                <SearchBar/>
            </div>

            <div className='flex gap-6'>
                <div className='flex items-center gap-5 text-xs'>
                <p className='flex gap-1 items-center text-amber-500 cursor-pointer drop-shadow-amber-500 drop-shadow-2xl'><Home className='w-4' strokeWidth={1.2}/>Home</p>
                    <p className='flex gap-1 items-center cursor-pointer duration-200 hover:text-amber-500 hover:drop-shadow-amber-500 drop-shadow-2xl'><TrendingUp className='w-4 ' strokeWidth={1.2}/>Animes do momento</p>
                    <p className='flex gap-1 items-center cursor-pointer duration-200 hover:text-amber-500 hover:drop-shadow-amber-500 drop-shadow-2xl'><DiamondPlus className='w-4' strokeWidth={1.2}/> Recem adicionados</p>
                    <p className='flex gap-1 items-center cursor-pointer duration-200 hover:text-amber-500 hover:drop-shadow-amber-500 drop-shadow-2xl'><Calendar className='w-4' strokeWidth={1.2}/> Calendario</p>
                </div>
                {/* usuario e sino notificacoes */}
                <div className='flex items-center gap-3'>
                    <Bell className='w-5' strokeWidth={1.2}/>
                    <img src={avatar} className='w-8 rounded-full'/>
                    <Ellipsis className='w-5'/>
                </div>
            </div>
        </div>
    )
}




