import styles from './App.module.css';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import { Routes, Route } from 'react-router-dom';
import { createContext, useEffect, useState } from "react";
import './api/axiosDefaults';
import axios from 'axios';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import CreatePlace from './pages/CreatePlace';

export const CurrentUserContext = createContext();
export const setCurrentUserContext = createContext();


function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleMount = async () => {
    try {
      const { data } = await axios.get('dj-rest-auth/user/');
      setCurrentUser(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <setCurrentUserContext.Provider value={setCurrentUser}>
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Main}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/places" element={<CreatePlace />} />
              <Route exact path="/posts" element={<Posts />} />
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/logout" element={<Logout />} />
              <Route exact path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
        </div>
      </setCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}



function Places() {
  return (
    <div>
      <h1>Places</h1>
    </div>
  );
}

function Posts() {
  return (
    <div>
      <h1>Posts</h1>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
}

function Logout() {
  return (
    <div>
      <h1>Logout</h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}

function NotFound() {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for could not be found.</p>
    </>
  );
}

export default App;