import { useEffect } from "react";

import Image from "next/image";
import Head from "next/head";
// Animations
import {revealWhenScroll,revealFromCenter} from "../../components/utils/animation";
// Project building blocks
import ProjectCover from "../../components/projects/projectCover";
import ProjectBlock from "../../components/projects/projectBlock";
import ProjectFooter from "../../components/projects/projectFooter";
// Images import
import figmapCoverHero from "../../public/assets/figmap-cover-hero.png";
import figmapCoverHero1 from "../../public/assets/timedi-software.png";
import figmapCoverHero2 from "../../public/assets/figmap-cover-hero-2.png";
import figmapCoverHero3 from "../../public/assets/figmap-cover-hero-3.png";

import figmapCoverBackground from "../../public/assets/timedi-cover-background-2.png";
import figmapLogosComp from "../../public/assets/timedi-dualblist-2.jpeg";
import figmapLogosComp2 from "../../public/assets/landbot-web.png";
import figmapLogosComp3 from "../../public/assets/landbot-integrations.png";

import figmapCommunityList from "../../public/assets/figmap-community-list.png";
import figmapIconFigma from "../../public/assets/figmap-icon-figma.png";
import figmapIconLike from "../../public/assets/figmap-icon-like.png";
import figmapIconInstalls from "../../public/assets/figmap-icon-installs.png";
import figmapIconMau from "../../public/assets/figmap-icon-mau.png";
import globalOmniumCoverBackground from "../../public/assets/landbot-cover-background.png";

import qatiumIllustration1 from "../../public/assets/timedi-dualblist.png";


export default function Figmap(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
    animateUI();
    return () => {};
  }, []);

  const animateUI = () => {
    revealFromCenter(".reveal-hero-1");
    revealWhenScroll();
  };

  return (
    <>
      <Head>
      <title>David Leiva - Portfolio - Landbot</title>
        <meta name="description" content="My experience in Landbot working as a d product designer / ux engineer"/>
        {/* <link rel="preload" href="/assets/figmap-cover-hero-1.png" as="image" />
        <link rel="preload" href="/assets/figmap-cover-hero-2.png" as="image" />
        <link rel="preload" href="/assets/figmap-cover-hero-3.png" as="image" />
        <link rel="preload" href="/assets/figmap-cover-background.jpg" as="image" /> */}
      </Head>
      <div className={`mb-48`}>
        <ProjectCover
          title="Product"
          subtitle="Timedi"
          role="UX Designer"
          client="Rafa Tibau"
          heroImage={figmapCoverHero}
          // heroImages={[figmapCoverHero1, figmapCoverHero2, figmapCoverHero3]}
          heroImages={[figmapCoverHero1 ]}
          className="reveal-hero-1"
          backgroundImage={figmapCoverBackground}
          url="https://ti-medi.com/"
        />
        <ProjectBlock
          type={1}
          invertTextColor
          backgroundColor="#a3e7ff"
          images={[qatiumIllustration1]}
          texts={[
            "The product",
            "Timedi is a family business, dedicated to the pharmaceutical world. Not only do they have a large group of pharmacies, they are also experts in the world of monitored dosage systems (MDS - SPD in Spanish).",
            "They hired me when they were creating a team of engineers to create software that was capable of interfacing with the MDS machines. Me and my colleagues left the project due to the mismanagement of it by the Tibau family.",
          ]}
        />
        <ProjectBlock
          pushTop
          pushBottom
          invertTextColor
          // reverse
          type={3}
          backgroundColor="#ffffff"
          images={[figmapLogosComp]}
          texts={[
            "Two software, infinite machines, many interviews",
            "As a designer, when I started we had several challenges: working on two different software (one under a standard protocol, the other for our own machine). Our way of working was very lean, and we were able to quickly synchronize to interview clients to improve our apps, but poor management made practically the entire team leave.",
          ]}
        />
        
        {/* Custom Figmap block  
        <div
          className={`relative flex justify-center overflow-hidden`}
          style={{ backgroundColor: "#6A9BB1" }}
        >
          <div className="max-w-5xl px-8 xl:px-0 flex flex-col items-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-12 md:py-28 max-w-4xl reveal">
              <div className="flex flex-col items-center text-white">
                <Image
                  className="pb-8"
                  src={figmapIconFigma}
                  alt="Figma icon"
                  width={54}
                  height={54}
                />
                <h4 className="text-2xl md:text-4xl font-bold">Works on</h4>
                <h6 className="text-lg md:text-2xl font-regular">Figma & FigJam</h6>
              </div>
              <div className="flex flex-col items-center text-white">
                <Image
                  className="pb-8"
                  src={figmapIconLike}
                  alt="Like icon"
                  width={54}
                  height={54}
                />
                <h4 className="text-2xl md:text-4xl font-bold">223</h4>
                <h6 className="text-lg md:text-2xl font-regular">Likes</h6>
              </div>
              <div className="flex flex-col items-center text-white">
                <Image
                  className="pb-8"
                  src={figmapIconInstalls}
                  alt="Installs icon"
                  width={54}
                  height={54}
                />
                <h4 className="text-2xl md:text-4xl font-bold">+38k</h4>
                <h6 className="text-lg md:text-2xl font-regular">Used by</h6>
              </div>
              <div className="flex flex-col items-center text-white">
                <Image
                  className="pb-8"
                  src={figmapIconMau}
                  alt="MAU icon"
                  width={54}
                  height={54}
                />
                <h4 className="text-2xl md:text-4xl font-bold">12k</h4>
                <h6 className="text-lg md:text-2xl font-regular">MAU</h6>
              </div>
            </div>

            <Image
              className="mx-auto relative reveal"
              alt="Image project"
              src={figmapCommunityList}
              width={1111}
              height={586}
            />
          </div>
        </div>
      */}

      </div>
      <ProjectFooter
        {...props}
        backgroundColor="#a03eab"
        backgroundImage={globalOmniumCoverBackground}
        title="Landbot"
        url="landbot"
      />
    </>
  );
}
