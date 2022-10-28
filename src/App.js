import ProcessorSection from "./sections/ProcessorSection";
import DesignSection from "./sections/DesignSection";
import DisplaySection from "./sections/DisplaySection";
import HeroSection from "./sections/HeroSection";
import PhoneModel from "./sections/PhoneModel";
import Quote from "./sections/Quote";
import { GlobalStyle } from "./styles/GlobalStyle";
import BatterySection from "./sections/BatterySection";
import ColorSection from "./sections/ColorSection";
import CameraSection from "./sections/CameraSection";



function App() {
  return (
	<>
		<GlobalStyle />
		<Quote />
		<HeroSection />
		<PhoneModel />
		<DesignSection />
		<DisplaySection />
		<ProcessorSection />
		<BatterySection />
		<ColorSection />
		<CameraSection />
	</>
  );
}

export default App;
