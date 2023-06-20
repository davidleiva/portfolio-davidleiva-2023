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
import figmapCoverHero1 from "../../public/assets/landbot-cover-hero-1.png";
import figmapCoverHero2 from "../../public/assets/figmap-cover-hero-2.png";
import figmapCoverHero3 from "../../public/assets/figmap-cover-hero-3.png";

import figmapCoverBackground from "../../public/assets/landbot-cover-background-2.png";
import figmapLogosComp from "../../public/assets/landbot-illustration-2.jpeg";
import figmapLogosComp2 from "../../public/assets/landbot-web.png";
import figmapLogosComp3 from "../../public/assets/landbot-integrations.png";

import figmapCommunityList from "../../public/assets/figmap-community-list.png";
import figmapIconFigma from "../../public/assets/figmap-icon-figma.png";
import figmapIconLike from "../../public/assets/figmap-icon-like.png";
import figmapIconInstalls from "../../public/assets/figmap-icon-installs.png";
import figmapIconMau from "../../public/assets/figmap-icon-mau.png";
import globalOmniumCoverBackground from "../../public/assets/cognizant-cover-background.png";

import qatiumIllustration1 from "../../public/assets/landbot-illustration-1.png";


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
          subtitle="Landbot"
          role="UX Designer/Engineer"
          client="Landbot"
          heroImage={figmapCoverHero}
          // heroImages={[figmapCoverHero1, figmapCoverHero2, figmapCoverHero3]}
          heroImages={[figmapCoverHero1 ]}
          className="reveal-hero-1"
          backgroundImage={figmapCoverBackground}
          url="https://landbot.io/"
        />
        <ProjectBlock
          type={1}
          invertTextColor
          backgroundColor="#eaecff"
          images={[qatiumIllustration1]}
          texts={[
            "The product",
            "Landbot is a startup founded in the city where I was born, Valencia. That is why I knew the founders and key members of the project. After changing its business model, Landbot began to fight to position itself as the leader in the chatbot industry.",
            "It is true that there is a lot of competition in the sector, but when I started working at the company we had a clear vision about our mission: we should position ourselves as the number 1 chabot builder in the 'No Code' segment, and maybe we did.",
          ]}
        />
        <ProjectBlock
          pushTop
          pushBottom
          invertTextColor
          reverse
          type={3}
          backgroundColor="#ffffff"
          images={[figmapLogosComp]}
          texts={[
            "Problem-solution: the chatbot builder",
            "Having a clear vision of the product, we needed a tool for a 'non-technical' user to be able to build a complex bot. The node system we created to generate simple logic based on responses was an industry first, even though this is used in other products. It was a success.",
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
            "Problem-solution: the bot itself",
            "Creating a web bot was quite a challenge. We analyzed all the possibilities in terms of design that a user might need to fit their bot into a site, and from that we generated a bot designer where the user could make adjustments to any of the typical design variables. We validated the bot designer through user interviews. We ended up very happy with the result.",
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
            "Integrations, and more",
            "I was very involved in all areas of the project: from working on components in the design system and storybook implementation, to other areas of the product. Also mention my contribution in 'integrations', which made me know the APIs of other products to be able to use them within our ecosystem.",
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
        backgroundColor="#3ea7ab"
        backgroundImage={globalOmniumCoverBackground}
        title="Gognizant"
        url="cognizant"
      />
    </>
  );
}
