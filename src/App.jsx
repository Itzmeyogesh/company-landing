import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Technical One</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <section className="read-the-docs">
        <h2>Services</h2>
        <p>Online/Offline Internships</p>
      </section>

      <section className="read-the-docs">
        <h2>Domains Available</h2>
        <ul>
          <li>Java</li>
          <li>Web Development</li>
          <li>Power BI</li>
          <li>Data Science</li>
        </ul>
      </section>

      <section className="read-the-docs">
        <h2>Internship Benefits</h2>
        <p>We provide hands-on practical experience on live projects.</p>
      </section>

      <section className="read-the-docs">
        <h2>Achievements</h2>
        <ul>
          <li>Collaborated with MIT ADT University</li>
          <li>Partnered with CAIT Edu Systems for candidate referrals</li>
        </ul>
      </section>
    </>
  )
}

export default App


export default App
