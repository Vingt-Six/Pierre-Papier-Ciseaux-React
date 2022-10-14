import { useState } from 'react';
import './App.css';
import Choice from "./components/Choice/Choice"
import Solo from "./components/Solo/Solo"

function App() {

  const [point, setPoint] = useState(0)
  const [resultat, setResultat] = useState("VS")
  const [playAgain, setPlayAgain] = useState(false)
  const [page, setPage] = useState(false)
  const [data, setData] = useState([
    {
      id: 1,
      name: "Pierre"
    },
    {
      id: 2,
      name: "Papier"
    },
    {
      id: 3,
      name: "Ciseaux"
    },
  ])

  const [fight, setFight] = useState([])
  const [ia, setIa] = useState([])

  let element = ["Pierre", "Papier", "Ciseaux"]
  let item = element[Math.floor(Math.random() * element.length)]

  const choix = (e) => {
    if (e === 1) {
      fight.push(element[0])
      setTimeout(() => {
        ia.push(item)
        if (ia[0] == "Pierre") {
          setResultat("Egalité")
        } else if (ia[0] == "Papier") {
          setPoint(point - 1)
          setResultat("You Lose")
        } else {
          setPoint(point + 1)
          setResultat("You Win")
        }
        setPlayAgain(true)
      }, 1500);
    } else if (e === 2) {
      fight.push(element[1])
      setTimeout(() => {
        ia.push(item)
        if (ia[0] == "Papier") {
          setResultat("Egalité")
        } else if (ia[0] == "Ciseaux") {
          setPoint(point - 1)
          setResultat("You Lose")
        } else {
          setPoint(point + 1)
          setResultat("You Win")
        }
        setPlayAgain(true)
      }, 1500);
    } else {
      fight.push(element[2])
      setTimeout(() => {
        ia.push(item)
        if (ia[0] == "Ciseaux") {
          setResultat("Egalité")
        } else if (ia[0] == "Pierre") {
          setPoint(point - 1)
          setResultat("You Lose")
        } else {
          setPoint(point + 1)
          setResultat("You Win")
        }
        setPlayAgain(true)
      }, 1500);
    }
    setPage(true)
  }

  const replay = () => {
    setPage(false)
    setResultat("VS")
    setFight([])
    setIa([])
    setPlayAgain(false)
  }

  return (
    <div className="App">
      <div className='point'>
        <h1>Point</h1>
        <div className='score'>
          <h1>{point}</h1>
        </div>
      </div>
      <div className={page == true ? "none" : "allChoice"}>
        {data.map((data) => (<Choice element={data.name} leChoix={() => choix(data.id)} />))}
      </div>
      <div className={page == true ? "" : "none"}>
        <Solo choixSolo={fight[0]} iaChoix={ia[0]} result={resultat} play={replay} show={playAgain} />
      </div>
    </div>
  );
}

export default App;
