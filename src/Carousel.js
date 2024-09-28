import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
 function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  let isFirst = currCardIdx == 0 ? true : false;
  let isLast = currCardIdx == photos.length - 1 ? true : false;
  //Increments currCardIdx state by 1
  function goForward() {
    setCurrCardIdx(currCardIdx + 1);
  }

  function goBackward() {
    setCurrCardIdx(currCardIdx - 1);
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        {!isFirst ? (        <i
          className="bi bi-arrow-left-circle"
          onClick={goBackward}
        />):(<i></i>)}

        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        {!isLast ? (
        <i
          className="bi bi-arrow-right-circle"
          onClick={goForward}
        />):(
          <i></i>
        )}
        
      </div>
    </div>
  );
}

export default Carousel;
