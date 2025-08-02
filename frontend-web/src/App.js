import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
//import {BottomNav} from "./components/navbar/BottomNav";
import { Layout } from './components/layout/layout';
import { CreateLotteryTicketForm } from './components/forms/CreateLotteryTicketForm';

const App = () =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<CreateLotteryTicketForm />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
