import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Card from './card.jsx';
import Footer from './Footer/Footer.jsx';
import Menu from './Menu/Menu.jsx';
import Mission from './Mission.jsx';
import Project from './Projects/Project.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu/>}>
          <Route index element={<Mission/>}></Route>
          <Route path='/about-us' element={<Card/>}></Route>
          <Route path='/project' element={<Project/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App