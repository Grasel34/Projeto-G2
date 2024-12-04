import React, { useState } from 'react';
import './Styles/Serviços.css';
import { useCart } from '../assets/Components/CartContext';

const Serviços = () => {
  const { addToCart } = useCart();
  const [addedIndex, setAddedIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); // Estado para armazenar o termo de pesquisa

  const produtos = [
    { nome: 'Halteres Ajustáveis', descricao: 'Ideal para treino de força e resistência. Ajuste fácil para diferentes pesos.', preco: 299.0, imagem: '/haltes.jpg' },
    { nome: 'Bicicleta Ergométrica', descricao: 'Perfeita para treinos cardio e emagrecimento. Ajuste de resistência.', preco: 1299.0, imagem: '/bike.jpg' },
    { nome: 'Máquina de Musculação', descricao: 'Equipamento completo para treinos de força e definição muscular.', preco: 3499.0, imagem: '/maquina musc.jpg' },
    { nome: 'Esteira Elétrica', descricao: 'Para corridas e caminhadas. Monitoramento de batimentos cardíacos e calorias queimadas.', preco: 2199.0, imagem: '/esteira.jpg' },
    { nome: 'Kettlebell', descricao: 'Excelente para treinos de força, resistência e equilíbrio.', preco: 149.0, imagem: '/kettbel.jpg' },
    { nome: 'Banco de Supino', descricao: 'Indicado para treinos de peito, ombro e tríceps. Ajuste de altura.', preco: 899.0, imagem: '/Bancosupino.jpg' }
  ];

  // Função para filtrar os produtos com base no termo de pesquisa
  const filteredProducts = produtos.filter(produto =>
    produto.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    produto.descricao.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (produto, index) => {
    addToCart(produto);
    setAddedIndex(index);
    setTimeout(() => setAddedIndex(null), 2000); // Remove a mensagem após 2 segundos
  };

  return (
    <div>
      <section className="serviços-banner">
        <h1>Catálogo de Equipamentos</h1>
        <p>Confira os melhores equipamentos para sua academia</p>

        <input
          type="text"
          placeholder="Pesquisar produtos..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o termo de pesquisa
        />
      </section>

      <section id="equipamentos" className="equipamentos">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((produto, index) => (
            <div className="equipamento" key={index}>
              <img className="equipamento-img" src={produto.imagem} alt={produto.nome} />
              <div className="info">
                <h3 className="equipamento-nome">{produto.nome}</h3>
                <p className="equipamento-descricao">{produto.descricao}</p>
                <p className="preco">R$ {produto.preco.toFixed(2)}</p>
                <button 
                  className="add-button" 
                  onClick={() => handleAddToCart(produto, index)}>
                  {addedIndex === index ? 'Adicionado!' : 'Adicionar ao Carrinho'}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Não encontramos nenhum produto com esse termo.</p> // Mensagem caso nenhum produto seja encontrado
        )}
      </section>
    </div>
  );
};

export default Serviços;
