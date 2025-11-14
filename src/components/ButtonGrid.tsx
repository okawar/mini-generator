import { useEffect, useRef } from 'react'
import * as Tone from "tone"

    interface ButtonItem {
        id: number;
        isActive: boolean;
        label: string;
    }

    interface Props {
        buttons: ButtonItem[];
        setButtons: React.Dispatch<React.SetStateAction<ButtonItem[]>>;
        toggleButton: (id: number) => void;
    }

export default function ButtonGrid({buttons, setButtons, toggleButton}: Props) {
    const synthRef = useRef<Tone.Synth | null>(null)


      useEffect(() => {
          initButtons();
          synthRef.current = new Tone.Synth().toDestination();
      }, []);
 

      const initButtons = (amount: number = 16): void => {
        setButtons(
          Array.from({length: amount}, (_, i) => ({
            id: i + 1,
            isActive: false,
            label: `button ${i + 1}`
          }))
        )
      }



      const playSound = (id: number) => {
      const note = id <= 8 ? `C${4 + (id % 4)}` : `E${4 + (id % 4)}`;
        synthRef.current?.triggerAttackRelease(note, "8n")
      }


  return (
      <div className="buttonGrid">
          {buttons.map((button) => (
              <button
                  key={button.id}
                  className="buttonItem"
                  onClick={() => {
                    toggleButton(button.id)
                    if (!button.isActive) playSound(button.id)
                  }}
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
