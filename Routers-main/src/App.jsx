import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import  Signup   from './components/Signup'
import { Navbar } from './components/Navbar'
import { Nested } from './components/Nested'
import { Nested1 } from './components/Nested1'
import { Nested2 } from './components/Nested2'
import { Nomatch } from './components/Nomatch'
import  ErrorBoundary  from './components/ErrorBoundary'
import  User  from './components/User'
import 'bootstrap/dist/css/bootstrap.min.css';



export default function App() {
  
  return (
    <div className="routes">
    <ErrorBoundary>
      <Navbar />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='signup' element={<Signup />} />
    <Route path='nested' element={<Nested />}>
      <Route path='nested1' element={<Nested1 />} />
      <Route path='nested2' element={<Nested2 />} />
    </Route>
    <Route path='User' element={<User />} />
    <Route path='*' element={<Nomatch />} />
      
    </Routes>
      </ErrorBoundary>
    </div>
  );
}
 