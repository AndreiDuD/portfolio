import React from "react";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-2.svg";
import Icon3 from "../../images/svg-3.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>React</ServicesH2>
          <ServicesP>
            I have been working with React JS for the past year and have gained
            a strong understanding of its components and lifecycle methods. I
            have experience building responsive user interfaces using JSX and
            styling with CSS and have implemented various features such as form
            validation and API calls using hooks. I have also worked with
            popular libraries such as Redux for state management and Axios for
            making HTTP requests. Overall, my experience with React has been
            very positive and I am confident in my ability to build efficient
            and scalable applications using this technology.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>
            We help reducedsfffffffffffffffffff fees and increase revenue
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>We help reduce fees and increase revenue</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
