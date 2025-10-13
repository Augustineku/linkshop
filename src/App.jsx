import { useState, useEffect } from "react";

import "./App.css";
import Gallery from "./Gallery.jsx";

function App() {
  const [linkShops, setLinkshops] = useState([]);

  useEffect(() => {
    fetch("https://linkshop-api.vercel.app/19-10/linkshops")
      .then((res) => res.json())
      .then((data) => {
        setLinkshops(data.list);
      });
  }, []);

  return (
    <>
      <div className="container">
        <header>
          <h1>LINK SHOP</h1>
          <button class="create-button">
            <a>생성하기</a>
          </button>
        </header>

        <div>
          <img></img>
          {/* background-image로도 대체 가능 */}
          <input
            type="text"
            class="search-input"
            placeholder="샵 이름으로 검색해 보세요"
          />
        </div>

        <div>
          {linkShops.map((item) => (
            <Gallery
              key={item.id}
              name={item.name}
              urlName={item.shop.urlName}
              likes={item.likes}
              productsCount={item.productsCount}
              products={item.products}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
