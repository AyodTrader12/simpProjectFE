
import { Outlet } from 'react-router-dom'
import Header from '../static/Header'
const layout = () => {
  return (
    <div>
        <Header/>
      <Outlet />
      {/* <Footer/> */}
    </div>
  )
}

export default layout
