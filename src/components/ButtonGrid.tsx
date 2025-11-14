import { useEffect, useState } from 'react'

export default function ButtonGrid() {
      interface ButtonItem {
        id: number
        isActive: boolean
        label: string
      }

      const [buttons, setButtons] = useState<ButtonItem[]>([])

      const initButtons = (amount: number = 16): void => {
        setButtons(
          Array.from({length: amount}, (_, i) => ({
            id: i + 1,
            isActive: false,
            label: `button ${i + 1}`
          }))
        )
      }

      const toggleButton = (id: number) => {
        setButtons(prev => 
          prev.map(b => b.id === id ? {...b, isActive: !b.isActive} : b)
        )
      }

      useEffect(() => {
        initButtons()   
      }, [])
 
  return (
      <div className="buttonGrid">
          {buttons.map((button) => (
              <button
                  key={button.id}
                  className="buttonItem"
                  onClick={() => toggleButton(button.id)}
                  style={{
                      backgroundColor: button.isActive ? "#6fcf97" : "#eee",
                  }}
              >
                  {button.label}
              </button>
          ))}
      </div>
  );
}
