import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        {/*Product id, title, price, rating , image */}
        <img
          className="home__image"
          src="https://image.shutterstock.com/image-photo/szczecin-polandnovember-2018-amazon-logistics-260nw-1247288113.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12313"
            title="adasd"
            price={11.9}
            rating={3}
            image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80"
          />

          <Product
            id="12313"
            title="adasd"
            price={11.9}
            rating={3}
            image="https://www.shutterstock.com/image-photo/closeup-elegant-mens-shoes-on-260nw-156770609.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12313"
            title="adasd"
            price={11.9}
            rating={3}
            image="https://cplanetnp.com/wp-content/uploads/2021/10/zeus1.png"
          />

          <Product
            id="12313"
            title="adasd"
            price={11.9}
            rating={4}
            image="https://www.digitalstorm.com/img/products/avon/2020-overview-1-b.jpg"
          />

          <Product
            id="12313"
            title="adasd"
            price={11.9}
            rating={3}
            image="https://media.itpro.co.uk/image/upload/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1570816572/itpro/2018/08/ram_shutterstock.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12313"
            title="adasd"
            price={11.9}
            rating={3}
            image="https://imgs.search.brave.com/yKT6u-0zpcBnO_0USkPv3eBxWt8LFjSoP9WsocELkOU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9raXRj/aGVuY3JpdGljcy5j/b20vYXNzZXRzL3By/b2R1Y3RzLzk2Njkv/aW1hZ2VzL290aGVy/LWltYWdlLTEuanBn"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
