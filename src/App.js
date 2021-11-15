import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

import HomePage from "./components/HomePage/HomePage"
import EventList from "./components/EventList/EventList"
import Information from "./components/Information/Information"
import QuestionList from "./components/QuestionList/QuestionList"
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/events">EVENTS</Link>
            </li>
            <li>
              <Link to="/infomations">INFORMATION</Link>
            </li>
            <li>
              <Link to="/questions">QUESTIONS</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path='/events' element={<EventList />} />
          <Route path='/information' element={<Information />} />
          <Route path='/questions' element={<QuestionList />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
