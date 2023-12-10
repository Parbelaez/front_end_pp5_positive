import styles from './App.module.css';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* COMO?????????????????????
          <Route exact path="/places" element={<Places />} /> */}
          <Route exact path="/posts" element={<Posts />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/about" element={<About />} />
          <Route path="*" render={() => <h1>404 Not Found</h1>} />
        </Routes>
      </Container>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
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

export default App;