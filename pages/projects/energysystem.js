import { useEffect, useRef } from "react";

import Head from "next/head";
// Animations
import {
  parallaxBlockImages,
  parallaxTwoDirections,
  revealWhenScroll,
} from "../../components/utils/animation";
// Project building blocks
import ProjectCover from "../../components/projects/projectCover";
import ProjectBlock from "../../components/projects/projectBlock";
import ProjectFooter from "../../components/projects/projectFooter";
// Images import
import energySystemCoverHero from "../../public/assets/energy-system-cover-hero.png";
import energySystemCoverBackground from "../../public/assets/energy-system-cover-background.jpg";
import energySystemHomepage from "../../public/assets/energy-system-homepage.png";
import energySystemIso1 from "../../public/assets/energy-system-iso-1.png";
import energySystemIso2 from "../../public/assets/energy-system-iso-2.png";
import energySystemIso3 from "../../public/assets/energy-system-iso-3.png";
import energySystemApp1 from "../../public/assets/energy-system-app-1.png";
import energySystemApp2 from "../../public/assets/energy-system-app-2.png";
import energySystemWebIso1 from "../../public/assets/energy-system-webiso-1.png";
import energySystemWebIso2 from "../../public/assets/energy-system-webiso-2.png";
import energySystemWebIso3 from "../../public/assets/energy-system-webiso-3.png";
import newrelicCoverBackground from "../../public/assets/newrelic-cover-background.jpg";

export default function EnergySystem(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
    animateUI();
    return () => {};
  }, []);

  const animateUI = () => {
    parallaxBlockImages(".parallax-block-1");
    parallaxBlockImages(".parallax-block-2");
    parallaxBlockImages(".parallax-block-3");
    parallaxBlockImages(".parallax-block-4");
    parallaxTwoDirections(".parallax-block-5");
    revealWhenScroll();
  };

  return (
    <>
      <Head>
        <link rel="preload" href="/assets/energy-system-cover-hero.png" as="image"/>
        <link rel="preload" href="/assets/energy-system-omnium-cover-background.jpg" as="image"/>
        <link rel="preload" href="/assets/energy-system-homepage.png" as="image"/>
        <link rel="preload" href="/assets/energy-system-iso-1.png" as="image"/>
        <link rel="preload" href="/assets/energy-system-iso-2.png" as="image"/>
        <link rel="preload" href="/assets/energy-system-iso-3.png" as="image"/>
        <link rel="preload" href="/assets/energy-system-app-1.png" as="image"/>
        <link rel="preload" href="/assets/energy-system-app-2.png" as="image"/>
        <link rel="preload" href="/assets/energy-system-webiso-1.png" as="image"/>
        <link rel="preload" href="/assets/energy-system-webiso-2.png" as="image"/>
        <link rel="preload" href="/assets/energy-system-webiso-3.png" as="image"/>
        <link rel="preload" href="/assets/newrelic-cover-background.jpg" as="image"/>
      </Head>
      <div className={`mb-48`}>
        <ProjectCover
          title="Product"
          subtitle="Promotional website"
          role="UX/UI Designer<br/>Frontend Developer"
          client="Energy System"
          heroImage={energySystemCoverHero}
          backgroundImage={energySystemCoverBackground}
          url="www.hacencosasincreibles.com"
          smallHeroImage
        />
        <ProjectBlock
          type={1}
          invertTextColor
          backgroundColor="#DFE4EB"
          images={[energySystemHomepage]}
          texts={[
            "Corporate Web & Virtual Office",
            "Aguas de Valencia group renewed in 2015 their corporate identity and at the same time all their digital channels as website, virtual office and launched the mobile APP management to facilitate clients with their connected services",
            "It is a unified platform where to access corporate information and client services focusing on user experience and usability using the latest technology.",
          ]}
        />
        <ProjectBlock
          className="parallax-block-1"
          
          type={6}
          backgroundColor="#ffffff"
          images={[energySystemIso1, energySystemIso2, energySystemIso3]}
        />
        <ProjectBlock
          className="parallax-block-5"
          type={7}
          backgroundColor="#303030"
          images={[
            energySystemApp1,
            energySystemApp2,
          ]}
        />
        <ProjectBlock
          invertTextColor
          offsetLeft
          type={5}
          className="parallax-block-4"
          backgroundColor="#52CEBA"
          images={[
            energySystemWebIso1,
            energySystemWebIso2,
            energySystemWebIso3
          ]}
          texts={[
            "Facebook Campaign",
            "As part of the promotion a contest was launched where users can propose an incredible friend via Facebook, opting to win one of the brands new devices.",
          ]}
        />
      </div>
      <ProjectFooter
        {...props}
        backgroundColor="#22222E"
        backgroundImage={newrelicCoverBackground}
        title="New Relic"
        url="newrelic"
      />
    </>
  );
}