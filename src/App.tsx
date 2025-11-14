import './App.css'
import ButtonGrid from './components/ButtonGrid'
import Visualizer from './components/Visualizer'
import { useState } from "react";

function App() {

  interface ButtonItem {
    id: number
    isActive: boolean
    label: string
  }

  const [buttons, setButtons] = useState<ButtonItem[]>([])

  const toggleButton = (id: number) => {
      setButtons((prev) =>
          prev.map((b) =>
              b.id === id ? { ...b, isActive: !b.isActive } : b
          )
      );
  };

  return (
    <div className='main'>
      <ButtonGrid buttons={buttons} setButtons = {setButtons} toggleButton = {toggleButton} />
      <Visualizer buttons={buttons}/>
    </div>
  )
}

export default App
