import './App.css'
import CountContainer from './components/CountContainer';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
 

  return (
    <>
      <header>
        <Navbar />
      </header>

      <section>
        <CountContainer></CountContainer>
      </section>

      <Footer />
    </>
  );
}

export default App
