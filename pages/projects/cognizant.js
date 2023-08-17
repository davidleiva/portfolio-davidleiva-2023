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
import figmapCoverHero1 from "../../public/assets/bbva-main.png";
import figmapCoverHero2 from "../../public/assets/figmap-cover-hero-2.png";
import figmapCoverHero3 from "../../public/assets/figmap-cover-hero-3.png";

import figmapCoverBackground from "../../public/assets/cognizant-cover-background-2.png";
import figmapLogosComp from "../../public/assets/bbva-mega-menu.png";
import figmapLogosComp2 from "../../public/assets/bbva-megamenu.jpeg";
import figmapLogosComp3 from "../../public/assets/netcentric.png";

import figmapCommunityList from "../../public/assets/figmap-community-list.png";
import figmapIconFigma from "../../public/assets/figmap-icon-figma.png";
import figmapIconLike from "../../public/assets/figmap-icon-like.png";
import figmapIconInstalls from "../../public/assets/figmap-icon-installs.png";
import figmapIconMau from "../../public/assets/figmap-icon-mau.png";
import cellphonesCoverBackground from "../../public/assets/cellphones.jpeg";

import qatiumIllustration1 from "../../public/assets/bbva-detail.png";


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
          subtitle="Corporative site"
          role="UX Designer/Engineer"
          client="BBVA"
          heroImage={figmapCoverHero}
          // heroImages={[figmapCoverHero1, figmapCoverHero2, figmapCoverHero3]}
          heroImages={[figmapCoverHero1 ]}
          className="reveal-hero-1"
          backgroundImage={figmapCoverBackground}
          url="https://www.bbva.es/"
        />
        <ProjectBlock
          type={1}
          invertTextColor
          backgroundColor="#d1e4ff"
          images={[qatiumIllustration1]}
          texts={[
            "The product",
            "Cognizant - Netcentric is a company know for providing marketing consultancy to really big players. They use Adobe Marketing tools for creating their websites. When I entered Cognizant  - Netcentric, my goal was to support the BBVA corporate website team with my design & UX skills.",
            "BBVA is one of the most important banks in Spain, so this was a great experience for me indeed. I learned a lot from my colleagues, BBVA team pleayers, and the experience itself. During that time, I also managed to work in our custom website.",
          ]}
        />
        <ProjectBlock
          pushTop
          pushBottom
          invertTextColor
          reverse
          type={3}
          backgroundColor="#74a3eb"
          images={[figmapLogosComp]}
          texts={[
            "Information architecture & Mega Menu",
            "We had so many levels of information that we needed to do several sessions to work on the information architecture. Obviously, reflecting this structure on the web needed a complex menu, and therefore we had no choice but to use a Mega Menu, with different levels and areas.",
          ]}
        />
        <ProjectBlock
          pushTop
          pushBottom
          // invertTextColor
          type={3}
          backgroundColor="#073361"
          images={[figmapLogosComp2]}
          texts={[
            "Documentation: a key part",
            "Working with a large client means working in a huge team, where many people need to quickly have context of everything related to the project. Keeping the documentation up to date is key in all Cognizant projects, and there I learned how to create correct documentation for all types of professional profiles.",
          ]}
        />
        <ProjectBlock
          pushTop
          pushBottom
          invertTextColor
          reverse
          type={3}
          backgroundColor="#ffffff"
          images={[figmapLogosComp3]}
          texts={[
            "Experimenting with our own website",
            "Netcentric - Cognizant website was deprecated at that moment. This was a great opportunity for some of us to practice with the Adobe Marketing Tools. These tools are somewhat complex, but they also offer interesting tools in terms of data analytics. It was a good time to try other more lean and agile methodologies, and different approaches when facing a project. ",
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
        backgroundColor="#0A2A59"
        backgroundImage={cellphonesCoverBackground}
        title="Mobile Design"
        url="mobile-design"
      />
    </>
  );
}
