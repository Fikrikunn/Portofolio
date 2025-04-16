'use client'
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import Aurora from "./components/Aurora/Aurora";
import SplashCursor from "./components/SplashCursor/SplashCursor";
import GradientText from "./components/GradientText/GradientText";
import CircularText from "./components/CircularText/CircularText";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#19222D]">
      <SplashCursor />
      <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full">
      <Aurora 
        colorStops={["#00FF00", "#19222D", "#00FF00"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
      </div>
      <div className="container mx-auto h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <div className="flex items-center h-full">
            <div className="flex flex-col gap-6">
              <AnimatedContent
                // className="flex items-center gap-2"
                distance={150}
                direction="horizontal"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
              >

                <div className="flex items-center gap-2">
              <h1 className="text-2xl text-white font-bold">I'm Ready For Job</h1>
              <RotatingText 
                texts={['Web Development', 'Mobile App Development', 'FullStack JavaScript', 'Thanks!']}
                mainClassName="px-2 sm:px-2 md:px-3 bg-[#00FF00] text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-2xl font-bold inline-flex transition-all"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
                </div>
              </AnimatedContent>

            <div className="flex flex-col items-start">
              <SplitText
                text="I'm Muhamad Fiqrhi"
                className="text-6xl font-semibold text-start"
                delay={50}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                threshold={0.2}
                rootMargin="-50px"
              />
              <SplitText
                text="Full stack Developer"
                className="text-6xl font-semibold text-start text-[#00FF00]"
                delay={75}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                threshold={0.2}
                rootMargin="-50px"
              />
            </div>

            
              <BlurText
                text="I'm a versatile Full Stack JavaScript Developer with expertise in React, Next.js, Node.js, GraphQL and MongoDB. 
                With a degree in Informatics Engineering and intensive training from Hacktiv8, I specialize in building scalable and efficient web applications. 
                Combining strong problem-solving skills with a creative approach, I'm passionate about developing innovative solutions and contributing to dynamic teams."
                delay={75}
                animateBy="words"
                direction="top"
                className="text-xl mb-8"
              />

              <div className="flex items-center">
              <GradientText
                colors={["#40ffaa", "#00FF00", "#00FF00", "#00FF00", "#4079ff"]}
                animationSpeed={3}
                showBorder={false}
                className="px-8 py-4 rounded-lg border"
              >
                Contact Me
              </GradientText>
              </div>

            </div>
            </div>
          </div>
          <div className="col-span-6 relative">
            <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
            <CircularText
              text="*MUHAMAD*FIQRHI"
              onHover="speedUp"
              spinDuration={20}
              className="absolute top-60 right-28"/>
          </div>
        </div>
      </div>
      <div className="contanier mx-auto min-h-screen">
        <ScrollVelocity
          texts={['Muhamad Fiqrhi', 'FullStack Javascript']}
        />
      </div>
    </div>
  );
}
