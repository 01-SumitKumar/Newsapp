import './App.css';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import News from './components/news'
function App() {
  return (
   <>
   <Router>
   <Navbar/>
   <Routes>
   <Route path="/" element={<News country="in" category="general" />} />
   <Route path="/business" element={<News key=" business" country="in" category="business" />} />
   <Route path="/entertainment" element={<News key="entertainment " country="in" category="entertainment"/>} />
   <Route path="/general" element={<News country="in" category="general" />} />
   <Route path="/health" element={<News  key="health "country="in" category="health" />} />
   <Route path="/science" element={<News key="cience " country="in" category="science"/>} />
   <Route path="/sports" element={<News key="sports " country="in" category="sports" />} />
   <Route path="/technoloy" element={<News key="technoloy " country="in" category="technoloy" />} />
        </Routes>
   </Router>
   </>
  );
}

export default App;

