import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Quiz from './pages/Quiz';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quiz' element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
