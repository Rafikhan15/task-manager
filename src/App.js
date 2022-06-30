
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Calendars from './components/Calendars';
import CompleteTask from './components/CompleteTask';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/completeTask" element={<CompleteTask></CompleteTask>}></Route>
        <Route path="/calendars" element={<Calendars></Calendars>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
