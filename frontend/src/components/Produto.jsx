import { useState, useEffect } from 'react';
import axios from 'axios';

const Produto = () => {
  const [produtos, setProdutos] = useState([]);
  const [produtoEditando, setProdutoEditando] = useState(null);
  const [mostrarForm, setMostrarForm] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');
  
  // Estado do formulário
  const [formData, setFormData] = useState({
    nome: '',
    descricao: '',
    preco: '',
    categoria: ''
  });

  const API_URL = 'http://localhost:3000';

  // Carregar produtos
  const carregarProdutos = async () => {
    try {
      setCarregando(true);
      setErro('');
      const response = await axios.get(`${API_URL}/produtos`);
      setProdutos(response.data);
    } catch (error) {
      setErro('Erro ao carregar produtos');
      console.error('Erro:', error);
    } finally {
      setCarregando(false);
    }
  };

  // Buscar produto por ID
  const buscarProdutoPorId = async (id) => {
    try {
      setCarregando(true);
      const response = await axios.get(`${API_URL}/produtos/${id}`);
      return response.data;
    } catch (error) {
      setErro('Erro ao buscar produto');
      console.error('Erro:', error);
      throw error;
    } finally {
      setCarregando(false);
    }
  };

  // Criar produto
  const criarProduto = async (produtoData) => {
    try {
      setErro('');
      const response = await axios.post(`${API_URL}/produtos`, produtoData);
      setProdutos(prev => [...prev, response.data]);
      return response.data;
    } catch (error) {
      setErro('Erro ao criar produto');
      console.error('Erro:', error);
      throw error;
    }
  };

  // Editar produto
  const editarProduto = async (id, produtoData) => {
    try {
      setErro('');
      const response = await axios.put(`${API_URL}/produtos/${id}`, produtoData);
      setProdutos(prev => prev.map(p => p.id === id ? response.data : p));
      return response.data;
    } catch (error) {
      setErro('Erro ao editar produto');
      console.error('Erro:', error);
      throw error;
    }
  };

  // Deletar produto
  const deletarProduto = async (id) => {
    try {
      setErro('');
      await axios.delete(`${API_URL}/produtos/${id}`);
      setProdutos(prev => prev.filter(p => p.id !== id));
    } catch (error) {
      setErro('Erro ao deletar produto');
      console.error('Erro:', error);
      throw error;
    }
  };

  // Handlers do formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.nome || !formData.descricao || !formData.preco || !formData.categoria) {
      setErro('Todos os campos são obrigatórios');
      return;
    }

    try {
      if (produtoEditando) {
        // Editar produto existente
        await editarProduto(produtoEditando.id, {
          ...formData,
          preco: parseFloat(formData.preco).toFixed(2)
        });
      } else {
        // Criar novo produto
        await criarProduto({
          ...formData,
          preco: parseFloat(formData.preco).toFixed(2)
        });
      }

      // Limpar formulário e estado
      setFormData({
        nome: '',
        descricao: '',
        preco: '',
        categoria: ''
      });
      setProdutoEditando(null);
      setMostrarForm(false);
      setErro('');
    } catch (error) {
      console.error('Erro no submit:', error);
    }
  };

  const handleEditar = (produto) => {
    setProdutoEditando(produto);
    setFormData({
      nome: produto.nome,
      descricao: produto.descricao,
      preco: produto.preco,
      categoria: produto.categoria
    });
    setMostrarForm(true);
    setErro('');
  };

  const handleDeletar = async (id) => {
    if (window.confirm('Tem certeza que deseja deletar este produto?')) {
      try {
        await deletarProduto(id);
        setErro('');
      } catch (error) {
        console.error('Erro ao deletar:', error);
      }
    }
  };

  const handleCancelar = () => {
    setFormData({
      nome: '',
      descricao: '',
      preco: '',
      categoria: ''
    });
    setProdutoEditando(null);
    setMostrarForm(false);
    setErro('');
  };

  const handleVerDetalhes = async (id) => {
    try {
      const produto = await buscarProdutoPorId(id);
      alert(`Detalhes do Produto:\n\nID: ${produto.id}\nNome: ${produto.nome}\nDescrição: ${produto.descricao}\nPreço: R$ ${produto.preco}\nCategoria: ${produto.categoria}`);
    } catch (error) {
      console.error('Erro ao buscar detalhes:', error);
    }
  };

  // Carregar produtos quando o componente montar
  useEffect(() => {
    carregarProdutos();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Cabeçalho */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Gerenciador de Produtos
          </h1>
          <p className="text-gray-600">
            Crie, edite, liste e delete produtos
          </p>
        </div>

        {/* Mensagem de Erro */}
        {erro && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {erro}
          </div>
        )}

        {/* Botão Novo Produto */}
        {!mostrarForm && (
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Produtos Cadastrados ({produtos.length})
            </h2>
            <button
              onClick={() => setMostrarForm(true)}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              + Novo Produto
            </button>
          </div>
        )}

        {/* Formulário */}
        {mostrarForm && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {produtoEditando ? 'Editar Produto' : 'Criar Novo Produto'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nome *
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Nome do produto"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preço (R$) *
                  </label>
                  <input
                    type="number"
                    name="preco"
                    step="0.01"
                    min="0"
                    value={formData.preco}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0.00"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Descrição *
                </label>
                <textarea
                  name="descricao"
                  value={formData.descricao}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Descrição do produto"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Categoria *
                </label>
                <input
                  type="text"
                  name="categoria"
                  value={formData.categoria}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Categoria do produto"
                  required
                />
              </div>

              <div className="flex space-x-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors"
                >
                  {produtoEditando ? 'Atualizar Produto' : 'Criar Produto'}
                </button>
                
                <button
                  type="button"
                  onClick={handleCancelar}
                  className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Lista de Produtos */}
        {!mostrarForm && (
          <div className="space-y-6">
            {carregando ? (
              <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
              </div>
            ) : produtos.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg shadow">
                <p className="text-gray-500 text-lg">Nenhum produto cadastrado</p>
                <button
                  onClick={() => setMostrarForm(true)}
                  className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg"
                >
                  Criar Primeiro Produto
                </button>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {produtos.map((produto) => (
                  <div
                    key={produto.id}
                    className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {produto.nome}
                    </h3>
                    
                    <p className="text-gray-600 mb-3 line-clamp-2">
                      {produto.descricao}
                    </p>
                    
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-bold text-green-600">
                        R$ {parseFloat(produto.preco).toFixed(2)}
                      </span>
                      <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
                        {produto.categoria}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => handleVerDetalhes(produto.id)}
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded text-sm transition-colors"
                      >
                        Detalhes
                      </button>
                      
                      <button
                        onClick={() => handleEditar(produto)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-3 rounded text-sm transition-colors"
                      >
                        Editar
                      </button>
                      
                      <button
                        onClick={() => handleDeletar(produto.id)}
                        className="bg-red-500 hover:bg-red-600 text-white py-2 px-3 rounded text-sm transition-colors col-span-2"
                      >
                        Deletar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Produto;