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
import globalOmniumCoverHero from "../../public/assets/global-omnium-cover-hero.png";
import globalOmniumCoverBackground from "../../public/assets/global-omnium-cover-background.jpg";
import newrelicCoverBackground from "../../public/assets/newrelic-cover-background.jpg";

import globalOmniumHomepage from "../../public/assets/global-omnium-homepage.png";
import globalOmniumWeb1 from "../../public/assets/global-omnium-web-1.png";
import globalOmniumWeb2 from "../../public/assets/global-omnium-web-2.png";
import globalOmniumWeb3 from "../../public/assets/global-omnium-web-3.png";
import globalOmniumIllustration1 from "../../public/assets/global-omnium-illustration-1.png";
import globalOmniumIllustration2 from "../../public/assets/global-omnium-illustration-2.png";
import globalOmniumIllustration3 from "../../public/assets/global-omnium-illustration-3.png";
import globalOmniumAppIso1 from "../../public/assets/global-omnium-app-iso-1.png";
import globalOmniumAppIso2 from "../../public/assets/global-omnium-app-iso-2.png";
import globalOmniumAppIso3 from "../../public/assets/global-omnium-app-iso-3.png";
import globalOmniumLauncher1 from "../../public/assets/global-omnium-launcher-1.png";
import globalOmniumLauncher2 from "../../public/assets/global-omnium-launcher-2.png";
import globalOmniumLauncher3 from "../../public/assets/global-omnium-launcher-3.png";
import globalOmniumLauncher4 from "../../public/assets/global-omnium-launcher-4.png";
import globalOmniumExpo from "../../public/assets/global-omnium-expo.png";
import globalOmniumApp1 from "../../public/assets/global-omnium-app-1.png";
import globalOmniumApp2 from "../../public/assets/global-omnium-app-2.png";
import muchosolCoverBackground from "../../public/assets/muchosol-cover-background.jpg";
import figmapLogosComp3 from "../../public/assets/bbva-mobile-01.jpg";
import figmapLogosComp5 from "../../public/assets/bbva-megamenu-mobile.jpeg";
import figmapLogosComp6 from "../../public/assets/landbot-mobile.png";

export default function GlobalOmnium(props) {
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
      <title>David Leiva - Portfolio - Global Omnium</title>
        <meta name="description" content="Projects and use cases working at Global Omnium as a Principal Product Designer and UX Engineer"/>
        <link rel="preload" href="/assets/global-omnium-cover-hero.png" as="image"/>
        <link rel="preload" href="/assets/global-omnium-cover-background.jpg" as="image"/>
      </Head>
      <div className={`mb-48`}>
        <ProjectCover
          title="Product"
          subtitle="Native Mobile Design"
          role="UX/UI Designer"
          client="Global Omnium, Landbot, and more."
          heroImage={globalOmniumCoverHero}
          backgroundImage={globalOmniumCoverBackground}
          url="www.globalomnium.com"
          smallHeroImage
        />
        <ProjectBlock
          invertTextColor
          offsetLeft
          type={5}
          className="parallax-block-3"
          backgroundColor="#ffffff"
          images={[
            globalOmniumAppIso1,
            globalOmniumAppIso2,
            globalOmniumAppIso3,
          ]}
          texts={[
            "Main experience: Global Omnium Native APP",
            "This app was launched as native development for the two main platforms IOS and Android. Users can make enquiries and manage their accounts comfortably adapting the user experience to mobile context. <br><br>Designing mobile apps has many differences with respect to webapps, so this job was a challenge. I learned how to design for native apps, I was in constant contact with the developers, I was the main responsible for this task and it was a success"
          ]}
        />
        <ProjectBlock
          className="parallax-block-5"
          type={7}
          backgroundColor="#EFEFEF"
          images={[
            globalOmniumApp1,
            globalOmniumApp2,
          ]}
        />
        <ProjectBlock
          pushTop
          pushBottom
          invertTextColor
          reverse
          type={3}
          backgroundColor="#2DCDCE"
          images={[figmapLogosComp3]}
          texts={[
            "BBVA App - A great project that I was part of",
            "While working at Netcentric - Cognizant for BBVA design, I also had the opportunity to work on its native mobile app.<br/>I worked together with the BBVA team in Madrid on some functionalities, the main one being to adapt the megamenu to mobile..",
          ]}
        />
        <ProjectBlock
          pushTop
          pushBottom
          invertTextColor
          // reverse
          type={1}
          backgroundColor="#072146"
          images={[figmapLogosComp5]}
        />
        <ProjectBlock
          pushTop
          pushBottom
          invertTextColor
          // reverse
          type={1}
          backgroundColor="#eaecff"
          images={[figmapLogosComp6]}
          texts={[
            "Other mobile design experiences",
            "During my career I have had the opportunity to work and learn the specifics to mobile design in different experiences.",
            "Landbot was one of them, where we created our own app, or needed to integrate client's bots into native apps."
          ]}
        />
      </div>
      <ProjectFooter
        {...props}
        backgroundColor="#303030"
        backgroundImage={newrelicCoverBackground}
        title="New Relic"
        url="newrelic"
      />
    </>
  );
}
