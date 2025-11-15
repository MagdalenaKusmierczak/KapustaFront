// import { ThreeCircles } from "react-loader-spinner";
import { LoaderWrapper } from "./Loader.styled";

// Should this reside in a "service" folder? It's definitely a component :)
const Loader = () => {
  return (
    <LoaderWrapper>
     <div>Loading</div>
    </LoaderWrapper>
  );
};

export default Loader;
