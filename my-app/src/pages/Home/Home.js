import React from "react";
import "../Main.css";
import iconChat from "../../img/icon-chat.webp";
import iconMoney from "../../img/icon-money.webp";
import iconSecurity from "../../img/icon-security.webp";
import Features from '../../components/Features/Features'

const Home = () => 

{
 
  return (
    <div>
      
      <main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">
              Open a savings account with Argent Bank today!
            </p>
          </section>
        </div>
        <section className="features">
              <Features title={"You are our #1 priority"} image={iconChat} content={"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone"}/> 
              <Features title={"More savings means higher rates"} image={iconMoney} content={"The more you save with us, the higher your interest rate will be!"}/> 
              <Features title={"Security you can trust"} image={iconSecurity} content={"We use top of the line encryption to make sure your data and money is always safe."}/> 
        </section>
      </main>
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </div>
  );

};

export default Home;