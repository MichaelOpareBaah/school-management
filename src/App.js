import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/dark.scss';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import List from './pages/list/List';
import View from './pages/view/View';
import New from './pages/new/New';
import { studentInputs } from './formSource';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="students">
            <Route index element={<List />} />
            <Route path=":studentsId" element={<View />} />
            <Route
              path="new"
              element={<New inputs={studentInputs} title="Add New Student" />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
