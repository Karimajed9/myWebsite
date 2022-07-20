import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import FooterComponent from './components/Structure/FooterComponent';
import SideBarComponent from './components/SideBar/SideBarComponent'

import CreateOrUpdateWorkExperienceComponent from './components/WorkExperience/CreateOrUpdateWorkExperienceComponent';
import ViewWorkExperienceComponent from './components/WorkExperience/ViewWorkExperienceComponent';
import MainPageComponent from './components/MainPageComponent';
import ListWorkExperienceComponent from './components/WorkExperience/ListWorkExperienceComponent';
import ListEducationComponent from './components/Education/ListEducationComponent';
import CreateOrUpdateEducationComponent from './components/Education/CreateOrUpdateEducation';

function App() {
  return (
    <div>
      <Router>
          <SideBarComponent/>
          <div className="container">

            <Routes>
              <Route path = '/' exact element = {<MainPageComponent/>} />
              <Route path = '/home' element = {<MainPageComponent/>} />

              <Route path = '/education' element = {<ListEducationComponent/>} />
              <Route path = '/add-education/:id' element = {<CreateOrUpdateEducationComponent/>} />

              <Route path = '/workExperience' element = {<ListWorkExperienceComponent/>} />
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
