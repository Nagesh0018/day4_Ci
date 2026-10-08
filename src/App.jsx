import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <nav className="navbar">
        <h2>DevOps CI Pipeline</h2>
        <span className="status">● CI Ready</span>
      </nav>

      <main className="container">
        <section className="hero">
          <p className="tag">CONTINUOUS INTEGRATION</p>

          <h1>
            React Project
            <br />
            <span>CI Pipeline </span>
          </h1>

          <p className="description">
            A simple React frontend created to demonstrate a Continuous
            Integration workflow using Git, GitHub, and CI pipelines.
          </p>

          <div className="buttons">
            <button onClick={() => setCount(count + 1)}>
              Test Button: {count}
            </button>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              View GitHub
            </a>
          </div>
        </section>

        <section className="cards">
          <div className="card">
            <div className="icon">01</div>
            <h3>Code</h3>
            <p>Developer writes and updates React code.</p>
          </div>

          <div className="card">
            <div className="icon">02</div>
            <h3>Commit</h3>
            <p>Changes are committed and pushed to GitHub.</p>
          </div>

          <div className="card">
            <div className="icon">03</div>
            <h3>Build & Test</h3>
            <p>CI automatically builds and tests the project.</p>
          </div>

          <div className="card">
            <div className="icon">04</div>
            <h3>Deploy</h3>
            <p>After successful checks, the application can be deployed.</p>
          </div>
        </section>

        <section className="pipeline">
          <h2>CI Pipeline</h2>

          <div className="pipeline-flow">
            <span>Git Push</span>
            <b>→</b>
            <span>Install</span>
            <b>→</b>
            <span>Build</span>
            <b>→</b>
            <span>Test</span>
            <b>→</b>
            <span className="success">Success ✓</span>
          </div>
        </section>
      </main>

      <footer>
        React + GitHub + CI | DevOps Learning Project
      </footer>
    </div>
  );
}

export default App;