import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import CreateLinkShop from "./CreateLinkShop.jsx";

// createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <Routes>
//       <Route index element={<App />} />
//       <Route path="/post" element={<CreateLinkShop />} />
//     </Routes>
//   </BrowserRouter>
// );
const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <Routes>
          {/* '/' 경로 (index)에 App 컴포넌트 렌더링 */}
          <Route index element={<App />} />
          {/* '/post' 경로에 CreateLinkShop 컴포넌트 렌더링 */}
          <Route path="/post" element={<CreateLinkShop />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
} else {
  // root 엘리먼트를 찾지 못했을 경우의 오류 처리를 추가할 수 있습니다.
  console.error("Root element with ID 'root' not found.");
}
