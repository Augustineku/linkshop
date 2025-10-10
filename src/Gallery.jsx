import styles from "./Gallery.module.css";

function Gallery({ name, urlName, likes, productsCount, products }) {
  return (
    <div className={styles.gallery}>
      <div>
        <div>
          <img />
          <div>
            <div>{name}</div>
            <div>{urlName}</div>
          </div>
        </div>
        <div>{likes}</div>
      </div>
      <div>대표 상품 {productsCount}</div>
      <div>
        {products.map((product) => (
          <img src={product.imageUrl} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
// {
//   "list": [
//     {
//       "id": 920,
//       "name": "너구리 직구 상점",
//       "userId": "dddd111",
//       "shop": {
//         "id": 940,
//         "shopUrl": "https://example.com/...",
//         "urlName": "string",
//         "imageUrl": "https://example.com/..."
//       },
//       "likes": 0,
//       "teamId": "19-10",
//       "productsCount": 1,
//       "products": [
//         {
//           "id": 3504,
//           "imageUrl": "https://example.com/...",
//           "name": "너구리 직구상점"
//         }
//       ]
//     },
//     {
//       "id": 919,
//       "name": "너구리 직구 상점",
//       "userId": "dddd",
//       "shop": {
//         "id": 939,
//         "shopUrl": "https://example.com/...",
//         "urlName": "string",
//         "imageUrl": "https://example.com/..."
//       },
//       "likes": 0,
//       "teamId": "19-10",
//       "productsCount": 1,
//       "products": [
//         {
//           "id": 3503,
//           "imageUrl": "https://example.com/...",
//           "name": "너구리 직구상점"
//         }
//       ]
//     },
//     {
//       "id": 918,
//       "name": "dfdf111",
//       "userId": "fdjf83hfid",
//       "shop": {
//         "id": 938,
//         "shopUrl": "https://example.com/...",
//         "urlName": "string",
//         "imageUrl": "https://example.com/..."
//       },
//       "likes": 0,
//       "teamId": "19-10",
//       "productsCount": 1,
//       "products": [
//         {
//           "id": 3502,
//           "imageUrl": "https://example.com/...",
//           "name": "string"
//         }
//       ]
//     }
//   ],
//   "nextCursor": null
// }
