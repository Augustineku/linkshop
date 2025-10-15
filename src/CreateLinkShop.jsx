import React, { useState } from "react";
import "./linkpost.css";

/**
 * 새로운 샵을 생성하는 폼 컴포넌트
 * @param {object} props
 * @param {function} props.onCreateLinkShop - 폼 제출 시 호출될 함수 (예: API에 데이터 전송)
 * @param {function} props.onClose - 폼을 닫을 때 호출될 함수
 */
function CreateLinkShop({ onCreateLinkShop, onClose }) {
  // 폼 필드 상태 관리
  const [name, setName] = useState("");
  const [urlName, setUrlName] = useState("");
  // 필요하다면 다른 필드(예: likes, productsCount 등)도 추가

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 폼 제출 동작 방지

    // 유효성 검사 (간단하게)
    if (!name.trim() || !urlName.trim()) {
      alert("샵 이름과 URL은 필수 항목입니다.");
      return;
    }

    // 부모 컴포넌트에서 전달받은 생성 함수 호출
    // 실제 API 호출 로직은 보통 App.js와 같은 상위 컴포넌트에서 처리
    onCreateLinkShop({
      name,
      urlName,
      // 초기값 설정 (API 스펙에 따라 달라질 수 있음)
      likes: 0,
      productsCount: 0,
      products: [],
    });

    // 폼 닫기
    onClose();
  };

  return (
    <div className="create-linkshop-modal">
      <div className="create-linkshop-content">
        <h2>새로운 LINKSHOP 생성</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="shopName">샵 이름:</label>
            <input
              id="shopName"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="샵 이름을 입력하세요"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="urlName">URL 별명:</label>
            <input
              id="urlName"
              type="text"
              value={urlName}
              onChange={(e) => setUrlName(e.target.value)}
              placeholder="URL에 사용할 별명을 입력하세요"
              required
            />
          </div>

          {/* 여기에 추가적인 필드를 넣을 수 있습니다. */}

          <div className="form-actions">
            <button type="submit" className="save-button">
              생성하기
            </button>
            <button type="button" className="cancel-button" onClick={onClose}>
              취소
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateLinkShop;
