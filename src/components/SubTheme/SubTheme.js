import React from "react";
import aquaculture from "/FrontEnd/src/assets/conference pictures/aquaculture.jpg";
import agriculture from "/FrontEnd/src/assets/conference pictures/agriculture.jpg";
import biotech from "/FrontEnd/src/assets/conference pictures/biotech.jpg";
import minerals from "/FrontEnd/src/assets/conference pictures/minerals.jpg";
import pollution from "/FrontEnd/src/assets/conference pictures/pollution.jpg";
import nanotech from "/FrontEnd/src/assets/conference pictures/nanotech.jpg";
import resources from "/FrontEnd/src/assets/conference pictures/natural-resources.jpg";
import security from "/FrontEnd/src/assets/conference pictures/science-security.jpg";
import math from "/FrontEnd/src/assets/conference pictures/math-modelling.jpg";
import medicine from "/FrontEnd/src/assets/conference pictures/medicine.jpeg";
import climate from "/FrontEnd/src/assets/conference pictures/climate-change.jpg";
import "./SubTheme.css";
const SubTheme = () => {
  const events = [
    {
      id: 1,
      title: "Aquaculture and the Blue Economy",
      backgroundImage: aquaculture,
    },
    {
      id: 2,
      title: "Medicinal plants and Drug development",
      backgroundImage: medicine,
    },
    {
      id: 3,
      title: "Climatic change and human health",
      backgroundImage: climate,
    },
    {
      id: 4,
      title: "Energy and Mineral Resources",
      backgroundImage: minerals,
    },
    {
      id: 5,
      title: "Environmental Pollution and Remediation",
      backgroundImage: pollution,
    },
    {
      id: 6,
      title: "Aquaculture and the Blue Economy",
      backgroundImage: aquaculture,
    },
    {
      id: 7,
      title: "Science and security",
      backgroundImage: security,
    },
    {
      id: 8,
      title: "Agriculture and Food Security",
      backgroundImage: agriculture,
    },
    {
      id: 9,
      title: "Nanotechnology",
      backgroundImage: nanotech,
    },
    {
      id: 10,
      title: "Computational/Mathematical modeling",
      backgroundImage: math,
    },
    {
      id: 11,
      title: "Biotechnology, Bioinformatics and Cheminformatics",
      backgroundImage: biotech,
    },
    {
      id: 12,
      title: "Conservation and utilization of our natural heritage/ resources",
      backgroundImage: resources,
    },
  ];
  return (
    <div className="sub-theme">
      <h2>Event Sub-Theme</h2>
      <div className="events">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.backgroundImage} className="" />
            <div className="event-container">
              <p>{event.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubTheme;
