import "./App.css";
import axios from "axios";

function App() {
  // call the api
  const pay = async () => {
    try {
      const response = await axios.get("http://localhost:5000/init");

      window.location.href = response.data;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      <button className="btn" onClick={pay}>
        Pay
      </button>
    </div>
  );
}

export default App;
