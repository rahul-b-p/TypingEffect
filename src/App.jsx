import TypingEffect from 'react-typing-effect';
import './App.css'

function App() {


  return (
    <>
      <h1>
        <TypingEffect
          text={['Hello, World!', 'Welcome to my website!', 'Enjoy your stay!']}
          speed={100} // typing speed
          eraseSpeed={50} // erasing speed
          eraseDelay={1000} // delay before erasing
          typingDelay={500} // delay before typing starts
        />
      </h1>
    </>
  )
}

export default App
