import axios from "axios";
import "./Home.css";

const Home = () => {
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
    <div className="home">
      <button className="btn" onClick={pay}>
        Pay
      </button>
    </div>
  );
};

export default Home;
