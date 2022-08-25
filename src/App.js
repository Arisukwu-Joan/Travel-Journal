import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
// import Rectangle1 from "../src/images/Rectangle.png";
// import fill219 from "../src/images/fill219.png";

import array from "./array";

function App() {
  const hero = array.map((item) => 
    return (
      <Card
        img={item.img}
        location={item.location}
        country={item.country}
        view={item.view}
        title={item.title}
        period={item.period}
        description={item.description}
      />
    );
  });
  return (
    <div className="container">
      <div className="App">
        <div className="main-card">
          <Navbar />
          {hero}
          {/* // img={Rectangle1}
            // location={fill219}
            // country="Japan"
            // view="view on Google map"
            // title="Mount Fuji"
            // period="12 Jan, 2021 - 24 Jan, 2021"
            // description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists." */}
        </div>
      </div>
    </div>
  );
}

export default App;
