import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Main from './pages/Main'
import Who from './pages/Who'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/who' element={<Who />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
