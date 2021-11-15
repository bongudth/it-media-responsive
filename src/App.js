import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import HomePage from "./components/HomePage/HomePage"
import EventList from "./components/EventList/EventList"
import Information from "./components/Information/Information"
import QuestionList from "./components/QuestionList/QuestionList"
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/events' element={<EventList />} />
        <Route path='/information' element={<Information />} />
        <Route path='/questions' element={<QuestionList />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
