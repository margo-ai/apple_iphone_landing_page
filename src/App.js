import ProcessorSection from "./sections/ProcessorSection";
import DesignSection from "./sections/DesignSection";
import DisplaySection from "./sections/DisplaySection";
import HeroSection from "./sections/HeroSection";
// import PhoneModel from "./sections/PhoneModel";
import Quote from "./sections/Quote";
import { GlobalStyle } from "./styles/GlobalStyle";
import BatterySection from "./sections/BatterySection";



function App() {
  return (
	<>
		<GlobalStyle />
		<Quote />
		<HeroSection />
		{/* <PhoneModel /> */}
		<DesignSection />
		<DisplaySection />
		<ProcessorSection />
		<BatterySection />
	</>
  );
}

export default App;
