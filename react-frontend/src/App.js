import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import MainPageComponent from './components/MainPageComponent';

import ViewAdminPageComponent from './components/admin/ViewAdminPageComponent'

import FooterComponent from './components/Structure/FooterComponent';
import SideBarComponent from './components/SideBar/SideBarComponent'

import CreateOrUpdateWorkExperienceComponent from './components/WorkExperience/CreateOrUpdateWorkExperienceComponent';
import ViewWorkExperienceComponent from './components/WorkExperience/ViewWorkExperienceComponent';
import ListWorkExperienceComponent from './components/WorkExperience/ListWorkExperienceComponent';

import ListEducationComponent from './components/Education/ListEducationComponent';
import CreateOrUpdateEducationComponent from './components/Education/CreateOrUpdateEducationComponent';
import ViewEducationComponent from './components/Education/ViewEducationComponent';

import ListProjectsComponent from './components/Projects/ListProjectsComponent';
import CreateOrUpdateProjectsComponent from './components/Projects/CreateOrUpdateProjectsComponent'
import ViewProjectComponent from './components/Projects/ViewProjectComponent';

import ListToolsComponent from './components/Tools/ListToolsComponent';
import CreateOrUpdateToolsComponent from './components/Tools/CreateOrUpdateToolsComponent'
import ViewToolsComponent from './components/Tools/ViewToolComponent';

function App() {
  return (
    <div>
      <Router>
          <SideBarComponent/>
          <div className="container">

            <Routes>
              <Route path = '/' exact element = {<MainPageComponent/>} />
              <Route path = '/home' element = {<MainPageComponent/>} />

              <Route path = '/admin' element = {<ViewAdminPageComponent/>} />

              <Route path = '/workExperience' element = {<ListWorkExperienceComponent/>} />
              <Route path = '/add-workExperience/:id' element = {<CreateOrUpdateWorkExperienceComponent/>} />
              <Route path = '/view-workExperience/:id' element = {<ViewWorkExperienceComponent/>} />

              <Route path = '/education' element = {<ListEducationComponent/>} />
              <Route path = '/add-education/:id' element = {<CreateOrUpdateEducationComponent/>} />
              <Route path = '/view-education/:id' element = {<ViewEducationComponent/>} />

              <Route path = '/projects' element = {<ListProjectsComponent/>} />
              <Route path = '/add-project/:id' element = {<CreateOrUpdateProjectsComponent/>} />
              <Route path = '/view-project/:id' element = {<ViewProjectComponent/>} />

              <Route path = '/tools' element = {<ListToolsComponent/>} />
              <Route path = '/add-tool/:id' element = {<CreateOrUpdateToolsComponent/>} />
              <Route path = '/view-tool/:id' element = {<ViewToolsComponent/>} />
            </Routes>  

          </div>

          <FooterComponent />

      </Router>
    </div>
  );
}

export default App;
