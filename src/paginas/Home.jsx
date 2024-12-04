import React from 'react';
import './Styles/Home.css'; 

const Home = () => {
  return (
    <div>
      <section className="home-banner">
        <h1>Bem-vindo à Gym Nation</h1>
        <a href="serviços" className="button">Conheça nossos serviços</a>
      </section>
    </div>
  );
}

export default Home;
