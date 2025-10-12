import { useState } from 'react';
import axios from 'axios';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });
  const [enviando, setEnviando] = useState(false);
  const [sucesso, setSucesso] = useState(false);
  const [erro, setErro] = useState('');

  const API_URL = 'http://localhost:3000';

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
    if (!formData.nome || !formData.email || !formData.telefone || !formData.assunto || !formData.mensagem) {
      setErro('Todos os campos são obrigatórios');
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErro('Por favor, insira um email válido');
      return;
    }

    try {
      setEnviando(true);
      setErro('');
      
      await axios.post(`${API_URL}/contatos`, formData);
      
      setSucesso(true);
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        mensagem: ''
      });

      // Remover mensagem de sucesso após 5 segundos
      setTimeout(() => {
        setSucesso(false);
      }, 5000);

    } catch (error) {
      setErro('Erro ao enviar mensagem. Tente novamente.');
      console.error('Erro:', error);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className='min-h-screen py-10 px-10'>
      {/* Cabeçalho da Página */}
      <div className='text-center mb-16'>
        <h1 className='text-5xl font-bold text-slate-800 mb-4'>Entre em Contato</h1>
        <p className='text-xl text-slate-600 max-w-3xl mx-auto'>
          Estamos aqui para ajudar! Envie sua mensagem e responderemos o mais rápido possível.
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto'>
        {/* Formulário de Contato */}
        <div className='bg-white p-10 rounded-2xl shadow-2xl'>
          <h2 className='text-3xl font-bold text-slate-800 mb-6'>Envie sua Mensagem</h2>
          
          {/* Mensagens de Sucesso/Erro */}
          {sucesso && (
            <div className='bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded'>
              <p className='font-bold'>Mensagem enviada com sucesso!</p>
              <p>Entraremos em contato em breve.</p>
            </div>
          )}

          {erro && (
            <div className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded'>
              <p className='font-bold'>Erro!</p>
              <p>{erro}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
            {/* Nome */}
            <div className='flex flex-col gap-2'>
              <label htmlFor='nome' className='text-slate-700 font-semibold'>
                Nome Completo *
              </label>
              <input
                type='text'
                id='nome'
                name='nome'
                value={formData.nome}
                onChange={handleInputChange}
                placeholder='Digite seu nome completo'
                className='p-4 border-2 border-slate-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors'
                required
              />
            </div>

            {/* Email */}
            <div className='flex flex-col gap-2'>
              <label htmlFor='email' className='text-slate-700 font-semibold'>
                E-mail *
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                placeholder='seu.email@exemplo.com'
                className='p-4 border-2 border-slate-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors'
                required
              />
            </div>

            {/* Telefone */}
            <div className='flex flex-col gap-2'>
              <label htmlFor='telefone' className='text-slate-700 font-semibold'>
                Telefone *
              </label>
              <input
                type='tel'
                id='telefone'
                name='telefone'
                value={formData.telefone}
                onChange={handleInputChange}
                placeholder='(11) 98765-4321'
                className='p-4 border-2 border-slate-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors'
                required
              />
            </div>

            {/* Assunto */}
            <div className='flex flex-col gap-2'>
              <label htmlFor='assunto' className='text-slate-700 font-semibold'>
                Assunto *
              </label>
              <select
                id='assunto'
                name='assunto'
                value={formData.assunto}
                onChange={handleInputChange}
                className='p-4 border-2 border-slate-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors'
                required
              >
                <option value=''>Selecione um assunto</option>
                <option value='duvida'>Dúvida sobre Produtos</option>
                <option value='agendamento'>Agendamento de Serviços</option>
                <option value='reclamacao'>Reclamação</option>
                <option value='sugestao'>Sugestão</option>
                <option value='orcamento'>Orçamento</option>
                <option value='outro'>Outro</option>
              </select>
            </div>

            {/* Mensagem */}
            <div className='flex flex-col gap-2'>
              <label htmlFor='mensagem' className='text-slate-700 font-semibold'>
                Mensagem *
              </label>
              <textarea
                id='mensagem'
                name='mensagem'
                value={formData.mensagem}
                onChange={handleInputChange}
                placeholder='Digite sua mensagem aqui...'
                rows='6'
                className='p-4 border-2 border-slate-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors resize-none'
                required
              />
            </div>

            {/* Botão de Enviar */}
            <button
              type='submit'
              disabled={enviando}
              className={`
                py-4 px-8 rounded-lg font-bold text-white uppercase text-lg shadow-lg
                transition-all duration-300 hover:scale-105
                ${enviando 
                  ? 'bg-slate-400 cursor-not-allowed' 
                  : 'bg-cyan-600 hover:bg-cyan-700 cursor-pointer'
                }
              `}
            >
              {enviando ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
          </form>
        </div>

        {/* Informações de Contato */}
        <div className='flex flex-col gap-8'>
          {/* Informações Diretas */}
          <div className='bg-gradient-to-br from-cyan-600 to-blue-600 p-10 rounded-2xl shadow-2xl text-white'>
            <h2 className='text-3xl font-bold mb-8'>Informações de Contato</h2>
            
            <div className='flex flex-col gap-6'>
              {/* Endereço */}
              <div className='flex items-start gap-4'>
                <div className='bg-white bg-opacity-20 p-3 rounded-lg'>
                  <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                  </svg>
                </div>
                <div>
                  <h3 className='font-bold text-lg mb-1'>Endereço</h3>
                  <p>Rua dos Pets, 1234</p>
                  <p>Bairro Jardim dos Animais</p>
                  <p>São Paulo - SP, 01234-567</p>
                </div>
              </div>

              {/* Telefone */}
              <div className='flex items-start gap-4'>
                <div className='bg-white bg-opacity-20 p-3 rounded-lg'>
                  <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                  </svg>
                </div>
                <div>
                  <h3 className='font-bold text-lg mb-1'>Telefone</h3>
                  <p>(11) 3456-7890</p>
                  <p>(11) 98765-4321</p>
                </div>
              </div>

              {/* Email */}
              <div className='flex items-start gap-4'>
                <div className='bg-white bg-opacity-20 p-3 rounded-lg'>
                  <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                  </svg>
                </div>
                <div>
                  <h3 className='font-bold text-lg mb-1'>E-mail</h3>
                  <p>contato@insightpetclub.com.br</p>
                  <p>atendimento@insightpetclub.com.br</p>
                </div>
              </div>

              {/* Horário */}
              <div className='flex items-start gap-4'>
                <div className='bg-white bg-opacity-20 p-3 rounded-lg'>
                  <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                  </svg>
                </div>
                <div>
                  <h3 className='font-bold text-lg mb-1'>Horário de Funcionamento</h3>
                  <p>Segunda a Sexta: 8h às 19h</p>
                  <p>Sábado: 8h às 17h</p>
                  <p>Domingo: 9h às 13h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className='bg-slate-200 p-10 rounded-2xl shadow-xl'>
            <h2 className='text-2xl font-bold text-slate-800 mb-6'>Siga-nos nas Redes</h2>
            <div className='flex gap-4'>
              <a 
                href='#' 
                className='bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg transition-colors'
                aria-label='Facebook'
              >
                <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'/>
                </svg>
              </a>
              <a 
                href='#' 
                className='bg-pink-600 hover:bg-pink-700 text-white p-4 rounded-lg transition-colors'
                aria-label='Instagram'
              >
                <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'/>
                </svg>
              </a>
              <a 
                href='#' 
                className='bg-cyan-500 hover:bg-cyan-600 text-white p-4 rounded-lg transition-colors'
                aria-label='Twitter'
              >
                <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'/>
                </svg>
              </a>
              <a 
                href='#' 
                className='bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg transition-colors'
                aria-label='WhatsApp'
              >
                <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z'/>
                </svg>
              </a>
            </div>
          </div>

          {/* Mapa (Placeholder) */}
          <div className='bg-slate-300 h-64 rounded-2xl shadow-xl flex items-center justify-center'>
            <p className='text-slate-600 font-semibold'>📍 Mapa de Localização</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contato
