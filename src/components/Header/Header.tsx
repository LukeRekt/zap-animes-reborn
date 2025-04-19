import logo from '../../assets/Zap Animes.png'
import avatar from '../../assets/47284018.jfif'
import SearchBar from './SearchBar/SearchBar'
import { Bell, Calendar, DiamondPlus, TrendingUp } from 'lucide-react'

// #ff9900
export default function Header(){
    return (
        <div className='flex items-center justify-between p-4'>
            <div className='flex items-center gap-5'>
                <img src={logo} className='w-30 h-10 object-cover'/>
                <SearchBar/>
            </div>

            <div className='flex gap-6'>
                <div className='flex items-center gap-5 text-xs'>
                    <p className='flex gap-2 items-center'><TrendingUp className='w-4 '/>Animes do momento</p>
                    <p className='flex gap-2 items-center'><DiamondPlus className='w-4'/> Recem adicionados</p>
                    <p className='flex gap-2 items-center'><Calendar className='w-4'/> Calendario</p>
                </div>
                {/* usuario e sino notificacoes */}
                <div className='flex items-center gap-3'>
                    <Bell className='w-5' strokeWidth={1.2}/>
                    <img src={avatar} className='w-8 rounded-full'/>
                </div>
            </div>
        </div>
    )
}