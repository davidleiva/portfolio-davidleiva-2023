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
import figmapCoverHero1 from "../../public/assets/life5-opiniones.jpeg";
import figmapCoverHero2 from "../../public/assets/figmap-cover-hero-2.png";
import figmapCoverHero3 from "../../public/assets/figmap-cover-hero-3.png";

import figmapCoverBackground from "../../public/assets/life5-cover-background-2.png";
import figmapLogosComp from "../../public/assets/life5-calculator.png";
import figmapLogosComp2 from "../../public/assets/life5-changed.png";
import figmapLogosComp3 from "../../public/assets/landbot-integrations.png";

import figmapCommunityList from "../../public/assets/figmap-community-list.png";
import figmapIconFigma from "../../public/assets/figmap-icon-figma.png";
import figmapIconLike from "../../public/assets/figmap-icon-like.png";
import figmapIconInstalls from "../../public/assets/figmap-icon-installs.png";
import figmapIconMau from "../../public/assets/figmap-icon-mau.png";
import globalOmniumCoverBackground from "../../public/assets/timedi-cover-background.png";

import qatiumIllustration1 from "../../public/assets/life5-illustration-1.png";


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
      <title>David Leiva - Portfolio - Life5</title>
        <meta name="description" content="My experience in Landbot working as a d product designer / ux engineer"/>
        {/* <link rel="preload" href="/assets/figmap-cover-hero-1.png" as="image" />
        <link rel="preload" href="/assets/figmap-cover-hero-2.png" as="image" />
        <link rel="preload" href="/assets/figmap-cover-hero-3.png" as="image" />
        <link rel="preload" href="/assets/figmap-cover-background.jpg" as="image" /> */}
      </Head>
      <div className={`mb-48`}>
        <ProjectCover
          title="Product"
          subtitle="Life5"
          role="Product Designer"
          client="Guillermo Alén"
          heroImage={figmapCoverHero}
          // heroImages={[figmapCoverHero1, figmapCoverHero2, figmapCoverHero3]}
          heroImages={[figmapCoverHero1 ]}
          className="reveal-hero-1"
          backgroundImage={figmapCoverBackground}
          url="https://life5.es/"
        />
        <ProjectBlock
          type={1}
          invertTextColor
          backgroundColor="#deddff"
          images={[qatiumIllustration1]}
          texts={[
            "The product",
            "Life5 (formerly 'GetLife') is a startup founded in Madrid by Guillermo Alén, one of the best known young European entrepreneurs. Its mission is to revolutionize the world of life insurance, thanks to the possibility of obtaining a policy in the shortest possible time, regardless of your physical condition.",
            "In Spain it is necessary to take out life insurance to buy a home. Thanks to this, the banks take advantage, being themselves the ones who force you to take out your life insurance with them. Life5 saw a clear opportunity there, making your mortgage even cheaper over time.",
          ]}
        />
        <ProjectBlock
          pushTop
          pushBottom
          // invertTextColor
          reverse
          type={3}
          backgroundColor="#3d3a98"
          images={[figmapLogosComp]}
          texts={[
            "A simple calculator made the biggest difference",
            "We had the problem of getting the highest number of quality leads. To do this, we implemented a calculator that, in a few steps, is capable of telling you what your insurance will cost you. With this we were able to get emails, telephone numbers, and give the user the assurance that, with just one more step, they would already have life insurance at the best price (when compared to other options).",
          ]}
        />
        <ProjectBlock
          pushTop
          pushBottom
          invertTextColor
          type={3}
          backgroundColor="#eaecff"
          images={[figmapLogosComp2]}
          texts={[
            "The foundation of a new graphic style",
            "When I joined the team, the first thing I wanted to change was the branding and graphic style (from green to navy blue, more straight but easy feeling....), the way and the tone with which it was communicated. I'm glad to see that the foundation I created before I left have been implemented.",
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
        backgroundColor="#00E0FF"
        backgroundImage={globalOmniumCoverBackground}
        title="TiMedi"
        url="timedi"
      />
    </>
  );
}
