
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  return (
    <>
       <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>WELCOME TO LOCAL GOODS</h1>
      <div className="card">
        
        <h3>
          This is a scaffolded project using React+Vite
        </h3>
        <p>
          This project is configured with the Typescript
        </p>
        <p>
          The project is configured with Jest for Testing.
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
