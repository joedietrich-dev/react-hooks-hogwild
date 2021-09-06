import HogCard from "./HogCard";

function HogCards({ hogs }) {
  const hogCards = hogs.map(hog => <HogCard key={hog.name} {...hog} />)
  return (
    <ul className="centered ui link cards">
      {hogCards}
    </ul>
  )
}

export default HogCards;