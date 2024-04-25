import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Main from './pages/Main'
import Who from './pages/Who'
import LetterPage from './pages/LetterPage';
import HotPlacePage from './pages/HotPlacePage';
import NoticeBoard from './components/NoticeBoard'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/who' element={<Who />}></Route>
          <Route path='/letter' element={<LetterPage />}></Route>
          <Route path='/hotplace' element={<HotPlacePage />}></Route>
          <Route path='/NoticeBoard' element={<NoticeBoard />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
