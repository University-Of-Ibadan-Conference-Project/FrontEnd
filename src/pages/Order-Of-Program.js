import React from "react";
import PropTypes from "prop-types";
import CommonHero from "../components/CommonHero/CommonHero";

import styles from "./../sass/pages/Order-Of-Program.module.scss";

export default function OrderOfProgram() {
  return (
    <>
      {" "}
      <CommonHero
        title="Order Of Program"
        bg="https://a-gassociates.com/wp-content/uploads/2022/07/shutterstock_1196667214.jpg"
      />
      <div className={styles.OrderOfProgram}>
        <h2
          style={{
            textAlign: "center",
            margin: "4em 0 2em",
            textTransform: "uppercase",
          }}
        >
          Program for the international conference on Strengthening Scientific
          Research for National Development.
        </h2>

        <Dropdown
          date={"Tuesday 2nd May, 2023"}
          title="Arrival and Registration of participants"
        ></Dropdown>
        <Dropdown date={"Wednesday 3rd May, 2023."}>
          <ul>
            <li>
              8.00-10.00am - Arrival of participant and resources personnel/
              Registration of participant continues{" "}
            </li>
            <li>10.00-12:00 noon - Opening ceremony </li>
            <ul>
              <li>National Anthem</li>
              <li>Introduction of guest - </li>
              <li>
                Welcome address by the Dean, Faculty of Science - Professor A.
                A. Bakare
              </li>
              <li>Good will messages - Other Deans and Invited Guesses </li>
              <li>
                Opening Remark by the Vice-Chancellor, University of Ibadan -
                Professor K. O. Adebowale
              </li>
              <li>- 1st Keynote session: (30 minutes)</li>
              <li>
                Topic: Strengthening research integrity 1: Promote collaboration
                and interaction across traditional Departmental boundaries{" "}
              </li>
              <li>Votes of Thanks: Chairman LOC - Prof. O. O. Sonibare</li>
              <li>Announcement/Group photograph</li>
            </ul>
            <li>12:00- 1:00pm - Lunch</li>
            <li>
              1:00- 1:30pm - 1st Plenary Session Topic: Strengthening research
              integrity 2: The role and responsibilities of publishing
            </li>
            <li>
              1.30-4.30pm 1st Technical session (oral presentation) - FLT & FBR
            </li>
            <li>4.30-5.30pm - Cocktail</li>
          </ul>
        </Dropdown>
        <Dropdown date={"Thursday 4th May, 2023."}>
          <ul>
            <li>
              9.30-10:00am - 2nd Keynote session Topic: Improving the quality
              and quantity of scientific research in Nigeria{" "}
            </li>
            <li>
              10:00-10.25am - 2nd Plenary Session Topic: The strengths and
              weaknesses of research methodology
            </li>
            <li>10.25-11.00am - Tea break </li>
            <li>
              11.00-1.00pm - 2nd Technical session (oral presentation) - FLT &
              FBR{" "}
            </li>
            <li>1.00-2.00pm - Lunch </li>
            <li>2.00-3:00pm - Poster presentation</li>
            <li>3:00-3:20pm - 3rd Plenary Session Topic: </li>
            <li>
              3:20-5.30pm - 3rd Technical session (oral presentation) - FLT &
              FBR{" "}
            </li>
          </ul>
        </Dropdown>
        <Dropdown date={"Friday 5th May, 2023"}>
          <ul>
            <li>09:30 am - 09:55 am - 4th Plenary Session Topic:</li>
            <li>
              10:00 am - 11:30 am - 4th Technical session (oral presentation) -
              FLT & FBR
            </li>
            <li>11:30 am - 11:45 am - Closing </li>
            <li>11:45 am - 12:15 pm - Tea break </li>
            <li>12:15 pm - 1:00 pm - Visit to Zoological garden </li>
            <li>- Presentation of certificates Closing/ Departure</li>
          </ul>
        </Dropdown>
      </div>
    </>
  );
}

const Dropdown = ({ date, title, children }) => {
  return (
    <div className={styles.Dropdown}>
      <div className={styles.DropdownHeader}>
        <h2>{date}</h2>
        {title && <h2>{title}</h2>}
      </div>
      <div>{children}</div>
    </div>
  );
};

Dropdown.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.any,
};
