interface ButtonItem {
  id: number
  isActive: boolean
  label: string
}

interface Props{
  buttons: ButtonItem[]
}

export default function Visualizer({buttons}: Props) {
  const getRandomShape = (id: number) => {
    const shapes = ['circle', 'square', 'triangle']
    const shape = shapes[id % 3]
    const size = 30 + Math.random() * 50
    const color = `hsl(${Math.random() * 360}, 70%, 60%)`
    
    const baseStyle = {
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: color,
      margin: '10px',
      display: 'inline-block'
    }

    switch(shape) {
      case 'circle':
        return { ...baseStyle, borderRadius: '50%' }
      case 'square':
        return { ...baseStyle, borderRadius: '5px' }
      case 'triangle':
        return {
          width: 0,
          height: 0,
          borderLeft: `${size/2}px solid transparent`,
          borderRight: `${size/2}px solid transparent`,
          borderBottom: `${size}px solid ${color}`,
          margin: '10px',
          display: 'inline-block'
        }
      default:
        return baseStyle
    }
  }

  return (
    <div className='visualizer'>
      {buttons.map(b => 
        b.isActive ? (
          <div key={b.id} style={getRandomShape(b.id)} />
        ) : null
      )}
    </div>
  )
}
