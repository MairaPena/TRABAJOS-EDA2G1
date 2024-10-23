import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Login from './Login';
import Logout from './Logout';
import ImageList from './ImageList';
import DocumentList from './DocumentList';



const App = () => {
  return (
  <div>
    <h1>Firebase Image Management</h1>
    <ImageList />
    <h2>Firestore Document Management</h2>
      <DocumentList />
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </Provider>
  </div>
  );
};

export default App;
