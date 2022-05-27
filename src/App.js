import { Routes, Route } from 'react-router-dom';
import { StoreProvider, createStore } from 'easy-peasy';
import Scrollbars from 'react-custom-scrollbars';

import Navbar from 'components/Navbar/Navbar';
import Home from 'pages/Home';
import Projects from 'pages/Projects';
import About from 'pages/About';

import { model } from 'store/model';

const store = createStore(model);

const App = () => (
  <StoreProvider store={store}>
    <Scrollbars style={{ height: '100vh' }} universal={true} autoHide>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='projects' element={<Projects />} />
        <Route exact path='about' element={<About />} />
      </Routes>
    </Scrollbars>
  </StoreProvider>
);

export default App;
