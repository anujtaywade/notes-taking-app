import { BrowserRouter ,Router,Route, Routes} from "react-router-dom";
import NotePage from './components/notePage';
import DefaultNotepage from './components/defaultNotepage';

function App() {

  return (
  
      <div>
      
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<NotePage/>}/>
        <Route path="/defaultNotepage" element={<DefaultNotepage/>}/>
       </Routes>
       </BrowserRouter>
       
      </div>
    
  )
}

export default App
