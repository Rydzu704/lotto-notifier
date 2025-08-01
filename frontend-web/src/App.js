import BottomNavigation from '@mui/material/BottomNavigation';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import {BottomNav} from "./components/navbar/BottomNav";

const App = () =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BottomNav />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
