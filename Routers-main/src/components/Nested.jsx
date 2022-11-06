import { Link, Outlet } from 'react-router-dom';


export const Nested = () => {
  return <>
    <h1 className="a">Nested Routes</h1>
    <div className="navella">
  <nav>
      <Link to= 'Nested1'>Nested Route 1</Link> 
      <Link to= 'Nested2'>Nested Route 2</Link>  
      
    </nav>
    <Outlet />
    </div>
  </>
    
}
