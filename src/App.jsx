import { useState, useEffect } from "react";
import "./App.css";
import Gallery from "./Gallery.jsx";
import CreateLinkShop from "./CreateLinkShop.jsx";
import { Link } from "react-router-dom";

function App() {
  const [linkShops, setLinkshops] = useState([]);

  useEffect(() => {
    fetch("https://linkshop-api.vercel.app/19-10/linkshops")
      .then((res) => res.json())
      .then((data) => {
        setLinkshops(data.list);
      });
  }, []);

  // 4. 새 샵 생성 핸들러 (API 호출 로직은 여기에 구현되어야 함)
  const handleCreateLinkShop = (newShopData) => {
    // 임시로 클라이언트 상태에 추가하는 로직 (실제로는 API에 POST 요청을 보내야 함)
    const newId = Date.now(); // 임시 ID 생성
    const newShop = {
      id: newId,
      ...newShopData,
    };

    // 상태 업데이트
    setLinkshops([newShop, ...linkShops]); // 새 항목을 맨 앞에 추가

    // **TODO:** 실제 API에 데이터를 POST하는 로직이 필요합니다.
    // 예:
    /*
    fetch('https://your-api-endpoint/linkshops', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newShopData),
    })
    .then(res => res.json())
    .then(data => {
        // 성공적으로 생성된 샵을 상태에 반영
        setLinkshops([data, ...linkShops]);
    });
    */

    setIsCreating(false); // 폼/모달 닫기
  };

  return (
    <>
      <div className="container">
        <header>
          <h1>LINKSHOP</h1>
          {/* <button
            className="create-button"
            onClick={handleCreateButtonClick} // 3. 이벤트 핸들러 연결
          >
            
          </button> */}
          <Link to={"/"}>생성하기</Link>
        </header>

        <div>
          <input
            type="text"
            className="search-input"
            placeholder="샵 이름으로 검색해 보세요"
          />
        </div>

        <div className="list">
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
