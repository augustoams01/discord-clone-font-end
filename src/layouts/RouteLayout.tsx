import { Outlet } from 'react-router-dom'
import Sidebar from '../components/navigation/Sidebar'



function RouteLayout() {
  return (
    <div className='bg-slate-800'>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default RouteLayout