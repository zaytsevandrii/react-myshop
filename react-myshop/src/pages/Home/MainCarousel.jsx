import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { shades } from "../../theme";

// imports all images from assets folder
const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

export const heroTextureImports = importAll(
  require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
);
export const heroTextureImports2 = importAll(
  require.context("../../assets2", false, /\.(png|jpe?g|svg)$/)
);

const MainCarousel = () => {
    const data=true
  const isNonMobile = useMediaQuery("(min-width:840px)");
  const heroTexture=isNonMobile?heroTextureImports:heroTextureImports2
  return (
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      autoPlay={true}
      showStatus={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            color: "white",
            padding: "5px",
            zIndex: "1",
          }}
        >
          {isNonMobile&&<NavigateBeforeIcon sx={{ fontSize: 40 }} />}
        </IconButton>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <IconButton 
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            color: "white",
            padding: "5px",
            zIndex: "1",
          }}
        >
          {isNonMobile&&<NavigateNextIcon sx={{ fontSize: 40 }} />}
        </IconButton>
      )}
    >
        
      {Object.values(heroTexture).map((texture, index) => (
        <Box key={`carousel-image-${index}`}>
          <img
            src={texture}
            alt={`carousel-${index}`}
            style={{
              width: "90%",
              height: isNonMobile?'700px':'auto',
              marginTop:isNonMobile?0:'60px',
              objectFit: "cover",
              backgroundAttachment: "fixed",
            }}
          />
          
        </Box>
      ))}
    </Carousel>
  );
};

export default MainCarousel;