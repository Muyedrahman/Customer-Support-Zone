import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CountContainer from "./components/CountContainer";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import Loading from "./components/Loading";



const loadTickets = () => fetch("/tickets.json").then((res) => res.json());

function App() {
  const ticketsPromise = loadTickets();
  // console.log(ticketsPromise)

  return (
    <div className="">
      <header>
        <Navbar />
      </header>

      <section>
        <Suspense fallback={<Loading />}>
          <CountContainer promise={ticketsPromise}></CountContainer>
        </Suspense>
      </section>

      <ToastContainer />

      <Footer />
    </div>
  );
}

export default App;

// import './App.css'
// import CountContainer from './components/CountContainer';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';

// function App() {

//   return (
//     <>
//       <header>
//         <Navbar />
//       </header>

//       <section>
//         <Suspense fallback={<Loading />}>
//           <CountContainer promise={ticketsPromise}></CountContainer>
//         </Suspense>
//       </section>

//       <ToastContainer />

//       <Footer />
//     </>
//   );
// }

// export default App
