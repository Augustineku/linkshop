import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Gallery from "./Gallery.jsx";

function App() {
  const [linkShops, setLinkshops] = useState([]);

  useEffect(() => {
    fetch("https://linkshop-api.vercel.app/19-10/linkshops").then((res) => {
      setLinkshops(res.list);
    });
  }, []);

  return (
    <>
      <div className="container">
        <header>
          <h1>LINK SHOP</h1>
          <a>생성하기</a>
        </header>

        <input type="text" value="샵 이름으로 겁색해 보세요"></input>
        {linkShops.map((item) => (
          <Gallery
            key={item.id}
            name={item.name}
            urlName={item.shop.urlName}
            likes={item.likes}
            productsCount={item.products}
            products={item.products}
          />
        ))}
      </div>
    </>
  );
}

export default App;

var mockdata = [
  {
    id: 920,
    name: "너구리 직구 상점",
    userId: "dddd111",
    shop: {
      id: 940,
      shopUrl: "https://example.com/...",
      urlName: "string",
      imageUrl: "https://example.com/...",
    },
    likes: 0,
    teamId: "19-10",
    productsCount: 1,
    products: [
      {
        id: 3504,
        imageUrl: "https://example.com/...",
        name: "너구리 직구상점",
      },
    ],
  },
  {
    id: 919,
    name: "너구리 직구 상점",
    userId: "dddd",
    shop: {
      id: 939,
      shopUrl: "https://example.com/...",
      urlName: "string",
      imageUrl: "https://example.com/...",
    },
    likes: 0,
    teamId: "19-10",
    productsCount: 1,
    products: [
      {
        id: 3503,
        imageUrl: "https://example.com/...",
        name: "너구리 직구상점",
      },
    ],
  },
  {
    id: 918,
    name: "dfdf111",
    userId: "fdjf83hfid",
    shop: {
      id: 938,
      shopUrl: "https://example.com/...",
      urlName: "string",
      imageUrl: "https://example.com/...",
    },
    likes: 0,
    teamId: "19-10",
    productsCount: 1,
    products: [
      {
        id: 3502,
        imageUrl: "https://example.com/...",
        name: "string",
      },
    ],
  },
];
