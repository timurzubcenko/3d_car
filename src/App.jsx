import { useState } from 'react'
import { Canvas } from "@react-three/fiber"
import Experience from './components/Experience/Experience'

function App() {

  const [color, setColor] = useState('#B27B7B')

  const onChangeColor = (e) => {
    setColor(e.target.value)
    console.log(color)
  }


  return (
    <>
      <div className="wrapper_color">
        <div className="choose_a_color">
          <h3>Choose a color!</h3>
          <input className='colorInput' type='color' onChange={onChangeColor} value={color} />
        </div>
      </div>
      <Canvas camera={{ position: [-2, 4, 12], fov: 60 }}>
        <Experience color={color} />
      </Canvas>
    </>
  )
}

export default App
