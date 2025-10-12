import Header from "../components/Header.jsx"
import Sobre from "../components/Sobre.jsx"
import Footer from "../components/Footer.jsx"

const SobrePage = () => {
  return (
    <div className="bg-linear-to-br from-cyan-600 from-40% to-cyan-300">
        <Header/>
        <Sobre />
        <Footer />
    </div>
  );
};

export default SobrePage;
