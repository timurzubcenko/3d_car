import { useState, useRef } from 'react'
import { Canvas } from "@react-three/fiber"
import Experience from './components/Experience/Experience'
import { CaretDownFill } from 'react-bootstrap-icons'

function App() {

  const [color, setColor] = useState('#6083a4')
  const [colorWheel, setColorWheel] = useState('#fff')
  const [colorTires, setColorTires] = useState('#000')
  const [colorInterior, setColorInterior] = useState('#000')
  const [colorLogo, setColorLogo] = useState('#000')

  const [isActive, setIsActive] = useState(false)

  const onChangeColor = (e) => {
    setColor(e.target.value)
    console.log(color)
  }

  const onChangeColorWheel = (e) => {
    setColorWheel(e.target.value)
  }

  const onChangeColorTires = (e) => {
    setColorTires(e.target.value)
  }

  const onChangeColorInterior = (e) => {
    setColorInterior(e.target.value)
  }

  const onChangeColorLogo = (e) => {
    setColorLogo(e.target.value)
  }

  const showMenu = () => {
    console.log('message')
    setIsActive(!isActive)
  }



  return (
    <>
      <div className="wrapper_color">
        <div className="menu">
          <div onClick={showMenu} className={`buttons ${isActive ? 'active' : ''}`}>
            <h2>Customise the car</h2>
            <div className={`arrow ${isActive ? 'active' : ''}`}>
              <CaretDownFill />
            </div>
          </div>
          <div className={`list ${isActive ? 'active' : ''}`}>
            <div className="wrapp">
              <div className="choose_a_color">
                <h3>Choose a color of the car!</h3>
                <input className='colorInput' type='color' onChange={onChangeColor} value={color} />
              </div>
              <div className="choose_a_color">
                <h3>Choose a color of wheels!</h3>
                <input className='colorInput' type='color' onChange={onChangeColorWheel} value={colorWheel} />
              </div>
              <div className="choose_a_color">
                <h3>Choose a color of tires!</h3>
                <input className='colorInput' type='color' onChange={onChangeColorTires} value={colorTires} />
              </div>
              <div className="choose_a_color">
                <h3>Choose a color of interior!</h3>
                <input className='colorInput' type='color' onChange={onChangeColorInterior} value={colorInterior} />
              </div>
              <div className="choose_a_color">
                <h3>Choose a color of logo!</h3>
                <input className='colorInput' type='color' onChange={onChangeColorLogo} value={colorLogo} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Canvas camera={{ position: [-2, 4, 12], fov: 60 }}>
        <Experience color={color} colorWheel={colorWheel} colorTires={colorTires} colorInterior={colorInterior} colorLogo={colorLogo} />
      </Canvas>
    </>
  )
}

export default App
