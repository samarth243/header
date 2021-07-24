import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' 
import Header from './components/layout/header/Header';
import Navigationbar from './components/layout/navbar/Navigationbar';
import Footer from './components/layout/footer/Footer';
function App() {
  return (
    <div className="App">
       <Header />
       <br />
       <br />
       <Navigationbar />
       <br >
       </br>
     <Footer />
    </div>
  );
}

export default App;
