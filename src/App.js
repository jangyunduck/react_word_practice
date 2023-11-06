
import "./App.css";
import Header from "./component/Header.js";
import DayList from "./component/DayList.js";
import Day from "./component/Day.js";
import EmptyPage from "./component/EmptyPage.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CreateWord from "./component/CreateWord.js";
import CreateDay from "./component/CreateDay.js";




function App() {
 
  return (
    <BrowserRouter>
  <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={ <DayList /> } />
    <Route path="/Day/:day" element={ <Day /> } />
    <Route path="/EmptyPage" element={ <EmptyPage /> }/>
    <Route path="/create_word" element={<CreateWord/>}/>
    <Route path="/create_day" element={<CreateDay/>}/>
    </Routes>
    </div>
    </BrowserRouter>
    );
}

export default App;
