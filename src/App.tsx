import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { SelectedItemContext } from './components/SelectedItemContext'


// 1. useState har vi för att lagra variabler (tillstånd)
// 2. det behövs för att React ska fatta att vi ändrat i variabeln (och trigga "rita om")
//3. vi måstye ibland dela state mellan olika komponenter  ( t.ex. Header och HeaderMenuItem)
// 4. Då måste vi skicka stateändringsfunktionnen som prop till den andra komponenten
//    dvs  setSelectedItem
// 5. Till slut blir det MÅÅÅÅNGA props som skickas i MÅÅÅNGA nivåer till subkomponenter osv
// fenomenet kallas property drilling (jobbig kod att läsa/skriva)
// 6. Context API låter oss wrappa en useState så vi inte behöver drilla ner setItem={setItem} etc etc
// 7. Utan vi går via const {selectedItem,setSelectedItem} = useContext(SelectedItemContext);
// 8. I den komponent som  behöver dessa
function App() {
  const [count, setCount] = useState(0)

  const [selectedItem,setSelectedItem] = useState(''); // Home


  return (
    <>
    <SelectedItemContext.Provider value={{selectedItem,setSelectedItem}}>
      <Header></Header>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React + {selectedItem}</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </SelectedItemContext.Provider>
    </>
  )
}

export default App
