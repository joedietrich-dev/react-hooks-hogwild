import { useState } from "react";

function HogCard({ name, specialty, greased, weight, image, medal }) {
  const [isDataHidden, setIsDataHidden] = useState(true);
  const hiddenClass = (otherClasses = "") => `${isDataHidden ? 'hidden' : ''} ${otherClasses}`;
  return (
    <li className="card" onClick={() => setIsDataHidden((oldIsHidden) => !oldIsHidden)}>
      <div className="image">
        <img className="hog-image" src={image} alt={name} />
      </div>
      <div className="content">
        <div className="header">{name}</div>
        <div className={hiddenClass("meta")}>{medal.toUpperCase()}</div>
        <div className={hiddenClass("description")}><span className="description-label">Specialty:</span> {specialty}</div>
      </div>
      <div className="extra content">
        <span className={hiddenClass()}>Greased: {greased ? "Yes" : "No"}</span>
        <span className={hiddenClass("right floated")}> Weight: {weight}kg</span>
      </div>
    </li>
  )
}

export default HogCard;