import Header from "../components/Header.jsx"
import Inicio from "../components/Inicio.jsx"
import Footer from "../components/Footer.jsx"

const Home = () => {
  return (
    <div className="bg-linear-to-br from-cyan-600 from-40% to-cyan-300">
        <Header/>
        <Inicio />
        <Footer />
    </div>
  );
};

export default Home;