import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Main from './pages/Main'
import Who from './pages/Who'
import Letterpage from './pages/Letterpage';
import Hot_place from './components/Hot_place'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/who' element={<Who />}></Route>
          <Route path='/letter' element={<Letterpage />}></Route>
          <Route path='/hotplace' element={<Hot_place />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
