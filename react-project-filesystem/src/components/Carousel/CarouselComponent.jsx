import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import img1 from "../../assets/MainPage/CHRobinson.jpg";
import img2 from "../../assets/MainPage/XPOLogistics.png";
import img3 from "../../assets/MainPage/LogoForm.png";

const CarouselComponent = () => {
  var items = [
    {
      id: 1,
      name: "- Rachel Rieger",
      description:
        "Trucks LLC is the best and longest standing parter of CH Robinson's i have colaborated with. They have the best quotes and the fastest response times. If in need of a reliable trucking company, choose Trucks LLC!",
      image: img1,
    },
    {
      id: 2,
      name: "- Brittany Johnson",
      description:
        "As a distinguished XPO carrier rep, Trucks LLC has been my most valuable customer since we started working together. Their dispatchers are responsive and their freight is always on time ! 10/10",
      image: img2,
    },
    {
      id: 3,
      name: "- Joe Schmoe",
      description:
        "Love working for Trucks! They have the best dispatchers, I have high expectations of big dinero with modest miles, but they make it happen all the same!",
      image: img3,
    },
  ];

  return (
    <Carousel
      fullHeightHover={false} // We want the nav buttons wrapper to only be as big as the button element is
      navButtonsProps={{
        // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
          borderRadius: 0,
        },
      }}
      indicatorContainerProps={{
        style: {
          marginTop: "50px", // 5
        },
      }}
    >
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
