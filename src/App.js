import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Main from './pages/Main'
import Who from './pages/Who'
import Letterpage from './pages/Letterpage';
import Hot_place_Page from './pages/Hot_place_Page';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/who' element={<Who />}></Route>
          <Route path='/letter' element={<Letterpage />}></Route>
          <Route path='/hotplace' element={<Hot_place_Page />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
