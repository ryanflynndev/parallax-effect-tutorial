import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './App.css'

function App() {

  return (
    <div className="App">
      <Parallax pages={4}>
        <ParallaxLayer>
          <h2>Hello!</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={1}>
          <h2>I'm Ryan</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App
