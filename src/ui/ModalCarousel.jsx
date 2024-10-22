import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    large_desktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1920 },
      items: 5
    },
    destop: {
      breakpoint: { max: 1920, min: 1366 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 1366, min: 0 },
      items: 1
    },
  };

function ModalCarousel({children}) {
    return (
        <Carousel responsive={responsive}>
            {children}
        </Carousel>
    )
}

export default ModalCarousel
