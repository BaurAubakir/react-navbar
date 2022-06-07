import { Routes, Route } from 'react-router-dom';
import Scrollbars from 'react-custom-scrollbars';
import { ToastContainer } from 'react-toastify';

import Navbar from 'components/Navbar/Navbar';
import HomePage from 'pages/Home';
import ProjectsPage from 'pages/Projects';
import AboutPage from 'pages/About';

const App = () => (
  <Scrollbars style={{ height: '100vh' }} universal={true} autoHide>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route exact path='projects' element={<ProjectsPage />} />
      <Route exact path='about' element={<AboutPage />} />
    </Routes>
    <ToastContainer />
  </Scrollbars>
);

export default App;
