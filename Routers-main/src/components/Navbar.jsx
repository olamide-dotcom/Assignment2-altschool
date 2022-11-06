
import { NavLink } from 'react-router-dom';
export const Navbar = () => {
  return( <div className="navel">
    <nav className="navel">
      
      <li><NavLink to= '/' className='z'>Home</NavLink></li> 
      <li><NavLink to= '/signup'>Signup</NavLink></li>  
      <li><NavLink to= '/nested'>Nested</NavLink></li> 
      <li><NavLink to= '/User'>Users</NavLink></li>
    </nav>
    </div>
    
  )
}
