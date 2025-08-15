import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
//import {BottomNav} from "./components/navbar/BottomNav";
import { Layout } from './components/layout/layout';
import { CreateLotteryTicketPage } from './pages/CreateLotteryTicketPage';
import { ticketCardPage} from './pages/ticketCardPage';

const App = () =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<CreateLotteryTicketPage />}/>
          <Route path="/" element={<ticketCardPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
