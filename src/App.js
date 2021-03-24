import './App.css';
import TopMenu from './components/topmenu/TopMenu';
import Header from './components/topmenu/Header';
import Main from './components/content/Main';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <TopMenu/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
