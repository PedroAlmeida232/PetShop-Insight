import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import Produto from "../components/Produto.jsx";

const Produtos = () => {
  return (
    <div className="bg-linear-to-br from-cyan-600 from-40% to-cyan-300">
        <Header/>
        <Produto/>
        <Footer />
    </div>
  );
};

export default Produtos;