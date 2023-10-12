import { Route ,Routes} from 'react-router-dom';
// import './App.css';
// import {Content} from './Content';
import Home from './Home';
import About from './About';
function App() {
  return (
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/about'element={<About/>}/>
    </Routes>
  );
}

export default App;