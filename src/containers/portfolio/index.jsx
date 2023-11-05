import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/image1.png";
import ImageTwo from "../../images/image2.png";
import ImageThree from "../../images/image3.png";
import ImageFour from "../../images/image4.png";

import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "E-Book store",
    image: ImageOne,
    link: "https://www.linkedin.com/in/aagam-jain-8789051a8/overlay/projects/763789203/multiple-media-viewer/?profileId=ACoAADCLUpwBk8h3VRwDdi-7wCqsdhIVsRC46P8&treasuryMediaId=1635538238082",
  },
  {
    id: 3,
    name: "Weather App",
    link: "https://aagam3011.github.io/weather_app/",
    image: ImageTwo,
  },
  {
    id: 3,
    name: "one page Resturant App",
    image: ImageThree,
    link: "https://github.com/aagam3011/Restuarant_react"
  },

  {
    id: 2,
    name: "PortFolio",
    image: ImageFour,
    link: ""
  },
  
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
            <button>Visit</button>
          </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
