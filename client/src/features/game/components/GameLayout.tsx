import CardIndicator from "./CardIndicator"
import CardsMain from "./CardsMain"

const GameLayout = () => {
    const [questions,setQuestions]=useState()
    const [currentIndex,setCurrentIndex]=useState()
  return (
    <div>
      {/* Logo */}
      <CardsMain/>
      <CardIndicator/>
    </div>
  )
}

export default GameLayout
