import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Main from './pages/Main'
import Who from './pages/Who'
import LetterPage from './pages/LetterPage';
import HotPlacePage from './pages/HotPlacePage';
import Question from './pages/Question';
import ResultPage from './pages/ResultPage';

import NoticeBoard from './components/NoticeBoard'
import EnterSchool from './components/enterInfo/EnterSchool'
import EnterOutsider from './components/enterInfo/EnterOutsider'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/who' element={<Who />}></Route>
          <Route path='/letter' element={<LetterPage />}></Route>
          <Route path='/hotplace' element={<HotPlacePage />}></Route>
          <Route path='/noticeboard' element={<NoticeBoard />}></Route>
          <Route path='/enterschool' element={<EnterSchool />}></Route>
          <Route path='/enteroutsider' element={<EnterOutsider />}></Route>
          <Route path='/question' element={<Question />}></Route>
          <Route path='/result' element={<ResultPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
