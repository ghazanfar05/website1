import Image from "next/image";
import Navbar from "./component/Navbar"
import Slider from "./component/Slider"
import Ga from "./component/Ga"
import Ha from "./component/Ha"
import Ab from "./component/Ab"
import Qa from "./component/Qa"
import Pa from "./component/Pa"

import Ta from "./component/Ta"

function Home() {
  return (
    <div className="">

      <Slider />
    
      <Navbar />
      < Ga />
      <Ha />
      <Ab />
      <Pa />
      <Qa />
      
      <Ta />
    </div>
  );
}
export default Home