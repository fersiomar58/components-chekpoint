import './App.css';
import ProfilePage from './components/ProfilePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbare from './components/Navbare';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbare/>
     <ProfilePage/>
     <Footer/>
    </div>
  );
}

export default App;
