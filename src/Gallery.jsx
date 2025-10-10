import styles from "./Gallery.module.css";

function Gallery({ images }) {
  return (
    <div className={styles.gallery}>
      {images.map((image) => (
        <img key={image} src={image} />
      ))}
    </div>
  );
}

export default Gallery;
