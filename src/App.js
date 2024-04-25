import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Main from './pages/Main'
import Who from './pages/Who'
<<<<<<< HEAD
import LetterPage from './pages/LetterPage'
import Hot_place_Page from './pages/Hot_place_Page'
import NoticeBoard from './components/NoticeBoard'
=======
import Letterpage from './pages/Letterpage';
import HotPlacePage from './pages/HotPlacePage';
>>>>>>> d6576c978e3c82692647514e31499d7c5be58c77

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/who' element={<Who />}></Route>
<<<<<<< HEAD
          <Route path='/letter' element={<LetterPage />}></Route>
          <Route path='/hotplace' element={<Hot_place_Page />}></Route>
          <Route path='/NoticeBoard' element={<NoticeBoard />}></Route>
=======
          <Route path='/letter' element={<Letterpage />}></Route>
          <Route path='/hotplace' element={<HotPlacePage />}></Route>
>>>>>>> d6576c978e3c82692647514e31499d7c5be58c77
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
