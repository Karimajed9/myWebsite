import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

import CreateOrUpdateWorkExperienceComponent from './components/CreateOrUpdateWorkExperienceComponent';
import ViewWorkExperienceComponent from './components/ViewWorkExperienceComponent';
import ListPersonalDetailsComponent from './components/ListPersonalDetailsComponent';

function App() {
  return (
    <div>
      <Router>

          <HeaderComponent />

          <div className="container">

            <Routes>
              <Route path = '/' exact element = {<ListPersonalDetailsComponent/>} />
              <Route path = '/workExperience' element = {<ListPersonalDetailsComponent/>} />
              <Route path = '/add-workExperience/:id' element = {<CreateOrUpdateWorkExperienceComponent/>} />
              <Route path = '/view-workExperience/:id' element = {<ViewWorkExperienceComponent/>} />
            </Routes>  

          </div>

          <FooterComponent />

      </Router>
    </div>
  );
}

export default App;
