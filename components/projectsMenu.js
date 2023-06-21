import Image from 'next/image';
import Link from 'next/link'
import gsap from "gsap";
import { useRouter } from "next/router";
import { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import { browserName } from 'react-device-detect';


const ProjectsMenu = (props,ref) => {

    const router = useRouter();
    const [isTransitioning, setIsTransitioning] = useState(false);
   
    let menuItemHovered = null;
   
   
    
    // When the route changes
    useEffect(() => {
       // When start unmounting animation
        const transitionAnimationStart = async () => {
            // console.log('transitionAnimationStart');
            setIsTransitioning(true);
            gsap.to(".menuItem", {
                y: 20,
                opacity: 0,
                duration: 0.3,
                ease: "Expo.easeInOut",
                stagger: 0.1,
            });
            gsap.killTweensOf(menuItemHovered)
            gsap.to(menuItemHovered, {
                scale: 1,
                opacity: 1,
                duration: 0.3
            });
        };
        // When finish unmounting animation
        const transitionAnimationEnd = () => {
            // console.log('transitionAnimationEnd');
            gsap.to('.menuWrapper', {
                opacity: 0,
                duration: 0.4,
                onComplete: () => {
                    props.setMenuOpened(false);
                }
            });
            setIsTransitioning(false);
        };

        router.events.on("routeChangeStart", transitionAnimationStart);
        router.events.on("routeChangeComplete", transitionAnimationEnd);
        router.events.on("routeChangeError", transitionAnimationEnd);

        return () => {
            router.events.off("routeChangeStart", transitionAnimationStart);
            router.events.off("routeChangeComplete", transitionAnimationEnd);
            router.events.off("routeChangeError", transitionAnimationEnd);
        };
    }, [router, props, menuItemHovered]);




    useEffect(() => {
        mountAnimatedUI();
        return () => {
        
        }
    }, []);

    // called once menu is opened and mounted clicking on the menu icon
    const unmountMenuFromIcon = () => {
        gsap.to(".menuItem", {
            y: 20,
            opacity: 0,
            duration: 0.3,
            ease: "Expo.easeInOut",
            stagger: 0.1,
        });
        gsap.killTweensOf(menuItemHovered)
        gsap.to(menuItemHovered, {
            scale: 1,
            opacity: 1,
            duration: 0.3
        });
        gsap.to('.menuWrapper', {
            opacity: 0,
            duration: 0.4,
            delay: 0.3,
            onComplete: () => {
                props.setMenuOpened(false);
            }
        });
    }
    useImperativeHandle(ref, () => ({
        unmountMenuFromIcon,
      }));



    const mountAnimatedUI = () => {
        // Mount animations
        gsap.from(".menuWrapper", {
            opacity: 0,
            duration: 0.3
        });
        gsap.from(".menuItem", {
            y: 50,
            opacity: 0,
            duration: 0.3,
            stagger: 0.1 // 0.1 seconds between when each ".box" element starts animating
        });
    }

    const showBackground = (elem) => {
       
        menuItemHovered = elem;
        if (!isTransitioning) {
            gsap.fromTo(menuItemHovered, {
                opacity: 0,
            }, {
                duration: 0.3,
                opacity: 1,
            });
            // Flicker effect on Chrome
            if(browserName !== "Chrome"){
                gsap.fromTo(menuItemHovered, {
                    scale: 1.2,
                    rotation: 0.01
                }, {
                    scale: 1,
                    rotation: 0.01,
                    duration: 5
                });
            }
           
        }

    }
    const hiddeBackground = (elem) => {
        if (!isTransitioning) {
            gsap.to(elem, {
                opacity: 0,
                duration: 0.5
            });
        }
    }

    return (
        <div className='menuWrapper fixed flex justify-center align-middle top-0 left-0 w-screen h-screen z-20 gradient-background'>
            <div className='flex flex-col p-8 lg:p-0 justify-center text-center z-40'>
                <ul className='space-y-2 md:space-y-4 text-4xl md:text-6xl -translate-y-6'>
                    <li className='menuItem mb-6 md:mb-12'>
                        <Link className={`text-xl md:text-2xl no-underline hover:opacity-100 ${props.menuItemActive == 0 ? "opacity-100 pointer-events-none" : "opacity-70"}`} href="/">Home</Link>
                    </li>
                    <li className='menuItem'>
                        <Link onMouseEnter={() => showBackground('.imageBackground1')} onMouseLeave={() => hiddeBackground('.imageBackground1')} className={`no-underline hover:opacity-100 ${props.menuItemActive == 1 ? "opacity-100 pointer-events-none" : "opacity-70"}`} href="/projects/newrelic">New Relic</Link>
                    </li>
                    <li className='menuItem'>
                        <Link onMouseEnter={() => showBackground('.imageBackground2')} onMouseLeave={() => hiddeBackground('.imageBackground2')} className={`no-underline hover:opacity-100 ${props.menuItemActive == 2 ? "opacity-100 pointer-events-none" : "opacity-70"}`} href="/projects/life5">Life 5</Link>
                    </li>
                    <li className='menuItem'>
                        <Link onMouseEnter={() => showBackground('.imageBackground3')} onMouseLeave={() => hiddeBackground('.imageBackground3')} className={`no-underline hover:opacity-100 ${props.menuItemActive == 3 ? "opacity-100 pointer-events-none" : "opacity-70"}`} href="/projects/timedi">TiMedi</Link>
                    </li>
                    <li className='menuItem'>
                        <Link onMouseEnter={() => showBackground('.imageBackground4')} onMouseLeave={() => hiddeBackground('.imageBackground4')} className={`no-underline hover:opacity-100 ${props.menuItemActive == 4 ? "opacity-100 pointer-events-none" : "opacity-70"}`} href="/projects/landbot">Landbot</Link>
                    </li>
                    <li className='menuItem'>
                        <Link onMouseEnter={() => showBackground('.imageBackground5')} onMouseLeave={() => hiddeBackground('.imageBackground5')} className={`no-underline hover:opacity-100 ${props.menuItemActive == 5 ? "opacity-100 pointer-events-none" : "opacity-70"}`} href="/projects/cognizant">Gognizant</Link>
                    </li>
                    {/* <li className='menuItem'>
                        <Link onMouseEnter={() => showBackground('.imageBackground6')} onMouseLeave={() => hiddeBackground('.imageBackground6')} className={`no-underline hover:opacity-100 ${props.menuItemActive == 6 ? "opacity-100 pointer-events-none" : "opacity-70"}`} href="/projects/sumem">Sumem</Link>
                    </li> */}
                </ul>
            </div>

            <Image fill className='imageBackground1 hide-back object-cover opacity-0 z-[1]' src={`/assets/newrelic-cover-background.jpg`} alt='Project New Relic background image' />
            <Image fill className='imageBackground2 hide-back object-cover opacity-0 z-[2]' src={`/assets/life5-cover-background-2.png`} alt='Project Life5 background image' />
            <Image fill className='imageBackground3 hide-back object-cover opacity-0 z-[3]' src={`/assets/timedi-cover-background-2.png`} alt='Project Timedi background image' />
            <Image fill className='imageBackground4 hide-back object-cover opacity-0 z-[4]' src={`/assets/landbot-cover-background-2.png`} alt='Project Landbot background image' />
            <Image fill className='imageBackground5 hide-back object-cover opacity-0 z-[5]' src={`/assets/cognizant-cover-background-2.png`} alt='Project Gognizant background image' />
            <Image fill className='imageBackground6 hide-back object-cover opacity-0 z-[6]' src={`/assets/sumem-cover-background.png`} alt='Project Sumem background image' />
        </div>
    );
}

export default forwardRef(ProjectsMenu);
