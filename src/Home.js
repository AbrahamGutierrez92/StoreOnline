import React from "react";
import "./Home.css";
import Product from "./Product";
import FondoSlider from "./ImgSlider";

function Home(){
    return(
      <div className="home">
        
        <div className="home_container">
          <img className="home_image" src="https://m.media-amazon.com/images/I/61tX6L542kL._SX3000_.jpg" />
          

          <div className="home_row">
             <Product
              id="00001" 
              title="Logitech Brio, webcam Ultra HD para videoconferencias, de videos y transmisi" image="https://m.media-amazon.com/images/I/615PHGxiucL._AC_UL320_.jpg" 
              price={19.99} 
              rating={5}
             />
             <Product
              id="00002" 
              title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
              image="https://m.media-amazon.com/images/I/61-PblYntsL._AC_UL320_.jpg" 
              price={99.99} 
              rating={5}
             />

             <Product
              id="00003" 
              title="Sceptre 20 1600x900 75Hz Monitor LED ultradelgado 2x"
              image="https://m.media-amazon.com/images/I/51Q2-EXm7RS._AC_UL320_.jpg" 
              price={30.99} 
              rating={5}
             />
             
          </div>

          <div className="home_row">
            <Product
              id="00004" 
              title="Portátil Acer Aspire 5 Slim A515-46-R14K, pantalla IPS"
              image="https://m.media-amazon.com/images/I/71AmKW4yuMS._AC_UL320_.jpg" 
              price={30.99} 
              rating={5}
             />

             <Product
              id="00005" 
              title="AMD Ryzen 5 5600X 6 núcleos y 12 hilos desbloqueados procesador de escritorio con Wraith Stealth Cooler"
              image="https://m.media-amazon.com/images/I/61FA9BbugzL._AC_UL320_.jpg" 
              price={30.99} 
              rating={4}
             />

             <Product
              id="00006" 
              title="NETGEAR - router wifi Nighthawk R6700 - AC1750"
              image="https://m.media-amazon.com/images/I/61vGQNUEsGL._AC_UL320_.jpg" 
              price={30.99} 
              rating={5}
             />

             <Product
              id="00007" 
              title="Fujitsu ScanSnap iX1600 Escáner de documentos"
              image="https://m.media-amazon.com/images/I/71sigG+08HL._AC_UL320_.jpg" 
              price={30.99} 
              rating={5}
             />
          </div>

          <div className="home_row">
            <Product
              id="00008" 
              title="Pomeat - Contenedores de almacenamiento de frutas"
              image="https://m.media-amazon.com/images/I/71-f9DA9i6S._AC_UL320_.jpg" 
              price={30.99} 
              rating={5}
             />
             <Product
              id="00009" 
              title="Midea WHS-65LB1 Refrigerador y congelador compacto reversible de una puerta, Puerta doble"
              image="https://m.media-amazon.com/images/I/61aX4qdnUVL._AC_UY218_.jpg" 
              price={400.99} 
              rating={5}
             />
             
             <Product
              id="00010" 
              title="VASAGLE Sofá, sofá para sala de estar moderno tapizado"
              image="https://m.media-amazon.com/images/I/81Y9MFzFgKL._AC_UL320_.jpg" 
              price={400.99} 
              rating={5}
             />
             
             <Product
              id="00011" 
              title="Conjunto de comedor"
              image="https://m.media-amazon.com/images/I/61m37YU8JuL._AC_UL320_.jpg" 
              price={150.99} 
              rating={5}
             />
          </div>

          <div className="home_row">
          
          <Product
              id="00012" 
              title="Autel Robotics EVO 2 Quadcopter UAV - EVO II"
              image="https://m.media-amazon.com/images/I/51TEcohAqHS._AC_UL320_.jpg" 
              price={200.99} 
              rating={5}
             />
          </div>

        </div>
      </div>
    )
};

export default Home;

