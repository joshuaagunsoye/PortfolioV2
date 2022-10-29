import './App.scss';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import NavBar from './Components/NavBar';
import WorkPage from './Pages/WorkPage';
import ProjectsPage from './Pages/ProjectsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/work' element={<WorkPage/>}/>
        <Route path='/projects' element={<ProjectsPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
