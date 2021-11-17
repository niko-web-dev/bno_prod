// import Header from '../header'
// import { MenuProvider } from '../../context/contextMenu'
import { AnimationProvider } from "../../context/contextAnimation";
import MainSlider from "../mainSlider";

const StartWindow = () => {
  return (
    <AnimationProvider>
      <MainSlider />
    </AnimationProvider>
  );
};

export default StartWindow;
