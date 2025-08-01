import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
//import {BottomNav} from "./components/navbar/BottomNav";
import { Layout } from './components/layout/layout';

const App = () =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
