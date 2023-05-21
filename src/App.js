import './App.css';
import Editor from './components/Editor';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import '@fortawesome/fontawesome-svg-core/styles.css';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="content-container">
          <Editor />
        </div>
        <div className="sidebar-container">
          <Sidebar />
        </div>
      </div>
    </Router>
  );
}

export default App;
