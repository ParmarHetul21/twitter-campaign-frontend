import "../styles/App.css";
import "../index.css";

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <h1>Twitter Utility</h1>
      </header>
      <div class="log-form">
        <h2>Login to your account</h2>
        <form>
          <input type="text" title="username" placeholder="username" />
          <input type="password" title="username" placeholder="password" />
          <button type="submit" class="btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
