'use client'
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import Aurora from "./components/Aurora/Aurora";
import SplashCursor from "./components/SplashCursor/SplashCursor";
import GradientText from "./components/GradientText/GradientText";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";
import { Timeline } from "./components/Timeline/Timeline";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const data = [
    {
      title: "My Projects",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {/* Project Card 1 */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden transition-transform transform hover:scale-[1.03] hover:shadow-lg">
            <Image
              src="/images/project/fikora.png"
              alt="Fikora Hats"
              className="w-full h-48 object-cover"
              width={500}
              height={500}
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">🧢 Fikora Hats</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
                A simple NextJS & TypeScript Online Store project with cart functionality.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="https://fikora-hats.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 text-sm font-medium bg-green-600 text-white rounded-md hover:bg-green-800 hover:scale-105 transition-transform duration-200"
                >
                  🚀 Visit Site
                </Link>
                <Link
                  href="https://github.com/H8-FSJS-P3S5/gc02-Fikrikunn/tree/main"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 text-sm font-medium bg-gray-800 text-white rounded-md hover:bg-gray-700 hover:scale-105 transition-transform duration-200"
                >
                  💻 View Code
                </Link>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden transition-transform transform hover:scale-[1.03] hover:shadow-lg">
            <Image
              src="/images/project/calculator.png"
              alt="Calculator"
              className="w-full h-48 object-cover"
              width={500}
              height={500}
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">🧮 Calculator</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
                A simple calculator built using Next.js.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="https://calculator-fikri.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 text-sm font-medium bg-green-600 text-white rounded-md hover:bg-green-800 hover:scale-105 transition-transform duration-200"
                >
                  🚀 Visit Site
                </Link>
                <Link
                  href="https://github.com/Fikrikunn/calculator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 text-sm font-medium bg-gray-800 text-white rounded-md hover:bg-gray-700 hover:scale-105 transition-transform duration-200"
                >
                  💻 View Code
                </Link>
              </div>
            </div>

          </div>

          {/* Project Card 3 */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden transition-transform transform hover:scale-[1.03] hover:shadow-lg">
            <Image
              src="/images/project/Movie-hub.png"
              alt="Movie Hub AI"
              className="w-full h-48 object-cover"
              width={500}
              height={500}
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">🎥 Movie-Hub AI</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
              Movies Hub AI adalah sebuah platform berbasis web yang memungkinkan pengguna untuk mencari, menjelajah, dan menemukan film dengan lebih mudah, cepat, dan personal. Website ini menggunakan teknologi Artificial Intelligence (AI) untuk merekomendasikan film, Pengguna bisa menemukan film sesuai keinginan mereka baik berdasarkan mood mereka maupun genre yg dicari.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="https://movies-hub-ai.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 text-sm font-medium bg-green-600 text-white rounded-md hover:bg-green-800 hover:scale-105 transition-transform duration-200"
                >
                  🚀 Visit Site
                </Link>
                <Link
                  href="https://github.com/H8-FSJS-P2S6/ip-Fikrikunn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 text-sm font-medium bg-gray-800 text-white rounded-md hover:bg-gray-700 hover:scale-105 transition-transform duration-200"
                >
                  💻 View Code
                </Link>
              </div>
            </div>

          </div>

          {/* Additional Project Card */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden transition-transform transform hover:scale-[1.03] hover:shadow-lg">
            <div className="p-5">
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">📂 Other Projects</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
                Here are all my other projects, but I haven't deployed or published them yet (coming soon).
              </p>
            </div>
          </div>
        </div>


      ),
    },
    {
      title: "2025-Now",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Graduated from Full Stack Javascript Bootcamp at Hacktiv8.
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              🎓 94/100
            </div>

            <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-700 dark:text-neutral-300 mt-2">
              <Link
                href="https://job-portal-manual.s3.us-east-1.amazonaws.com/Transcript+-+HCK-80+-+2025+-+MUHAMAD+FIQRHI.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-green-100 text-green-700 hover:bg-green-200 hover:text-green-800 transition-all duration-300 shadow-sm font-medium hover:scale-105 hover:rotate-[-1deg]"
              ><span>- Transcripts (click me)</span>
              </Link>
            </div>
            <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-700 dark:text-neutral-300 mt-2">
              <Link
                href="https://drive.google.com/file/d/1N6lqaHvgegEwqPWNE-1S7NPMsbql2cZh/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-green-100 text-green-700 hover:bg-green-200 hover:text-green-800 transition-all duration-300 shadow-sm font-medium hover:scale-105 hover:rotate-[-1deg]"
              ><span>- E-Certificate (click me)</span>
              </Link>
            </div>

          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/story/lulus.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/images/story/cina.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Graduated from Universitas Putra Indonesia "YPTK" Padang and Immediately Entered Full Stack Javascript Bootcamp at Hacktiv8
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              🎓 Muhamad Fiqrhi S.Kom
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              🦊 Joined Full Stack JavaScript Bootcamp at Hacktiv8
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/story/0066.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/images/story/phase2.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Starting from Studying at Universitas Putra Indonesia "YPTK" Padang
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              - Information Technology
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              - Technopreneur
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/story/IF-5.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/images/story/kampus.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];

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
          <div className="col-span-6 relative">
            <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
          </div>
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
                      texts={['Web Developer', 'Mobile App Developer', 'FullStack Developer', 'Frontend Developer', 'Backend Developer', 'Thanks!']}
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

                <div className="flex flex-col gap-4">
                  <div>
                    <Link href="https://wa.me/6282288303552" target="_blank" rel="noopener noreferrer">
                      <GradientText
                        colors={["#40ffaa", "#00FF00", "#00FF00", "#00FF00", "#4079ff"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="px-8 py-4 rounded-lg border cursor-pointer"
                      >
                        Contact Me On WhatsApp
                      </GradientText>
                    </Link>
                  </div>
                  <div>
                    <Link href="mailto:ajjafikri1@gmail.com" target="_blank" rel="noopener noreferrer">
                      <GradientText
                        colors={["#40ffaa", "#00FF00", "#00FF00", "#00FF00", "#4079ff"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="px-8 py-4 rounded-lg border cursor-pointer"
                      >
                        Contact Me via Email
                      </GradientText>
                    </Link>
                  </div>

                  <div className="flex flex-col items-start justify-center mt-12 space-y-3">
                    {/* Teks scroll */}
                    <p className="text-white text-base font-semibold animate-pulse tracking-wide">
                      Scroll Down
                    </p>

                    {/* Container icon dengan efek glow */}
                    <button
                      onClick={() =>
                        document.getElementById("scrollTarget")?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="relative w-14 h-14 flex items-center justify-center group ml-3"
                    >
                      {/* Efek Glow Luar */}
                      <div className="absolute inset-0 rounded-full opacity-60 group-hover:scale-110 transition-transform duration-300 ml-3" />

                      {/* Background Lingkaran */}
                      <div className="absolute inset-0 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 ml-3" />

                      {/* Ikon Panah */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-8 h-8 text-white relative z-10 animate-bounce group-hover:animate-none transition-all duration-300 ml-3"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
      <ScrollVelocity
        texts={['Muhamad Fiqrhi', 'FullStack Javascript']}
      />
      <Timeline data={data} />
      {/* Footer Section */}
      <footer className="bg-neutral-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About Me</h3>
              <p className="text-sm text-neutral-400">
                I'm Muhamad Fiqrhi, a passionate Full Stack JavaScript Developer with expertise in building scalable and efficient web applications. Let's connect and create something amazing together!
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Skills</h3>
              <ul className="space-y-2">
                <li>
                  <p className="text-neutral-400 hover:text-white transition">
                    Language: Javascript, TypeScript
                  </p>
                </li>
                <li>
                  <p className="text-neutral-400 hover:text-white transition">
                    Frontend: React.js, React Native, Next.js, HTML, CSS, Tailwind CSS, Bootstrap, Redux
                  </p>
                </li>
                <li>
                  <p className="text-neutral-400 hover:text-white transition">
                    Backend: Express, Sequelize, PostgreSQL, Rest API, MongoDB, Redis
                  </p>
                </li>
              </ul>
            </div>

            {/* Social Media */}
<div>
  <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
  <div className="flex space-x-4">
    {/* GitHub */}
    <Link
      href="https://github.com/Fikrikunn"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-neutral-900 hover:bg-white transition-all duration-300"
    >
      <div className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-40 group-hover:scale-110 bg-white transition-all duration-500" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6 text-neutral-400 group-hover:text-black transition duration-300 ease-in-out"
      >
        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.2-3.11-.12-.29-.52-1.46.12-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.18-1.18 3.18-1.18.64 1.58.24 2.75.12 3.04.75.81 1.2 1.85 1.2 3.11 0 4.43-2.69 5.41-5.24 5.7.42.36.8 1.08.8 2.18v3.23c0 .31.21.67.8.56A10.5 10.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
      </svg>
    </Link>

    {/* LinkedIn */}
    <Link
      href="https://www.linkedin.com/in/muhamad-fiqrhi-379083290"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-neutral-900 hover:bg-blue-500 transition-all duration-300"
    >
      <div className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-40 group-hover:scale-110 bg-blue-500 transition-all duration-500" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6 text-neutral-400 group-hover:text-white transition duration-300 ease-in-out"
      >
        <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8.34 19H5.67V9h2.67v10zm-1.34-11.2c-.86 0-1.56-.7-1.56-1.56s.7-1.56 1.56-1.56 1.56.7 1.56 1.56-.7 1.56-1.56 1.56zm12 11.2h-2.67v-4.67c0-1.11-.02-2.56-1.56-2.56-1.56 0-1.8 1.22-1.8 2.47V19h-2.67V9h2.56v1.37h.04c.36-.68 1.24-1.4 2.56-1.4 2.73 0 3.23 1.8 3.23 4.13V19z" />
      </svg>
    </Link>

    {/* Instagram */}
    <Link
      href="https://www.instagram.com/fikri.kunn"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-neutral-900 hover:bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 transition-all duration-300"
    >
      <div className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-40 group-hover:scale-110 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 transition-all duration-500" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6 text-neutral-400 group-hover:text-white transition duration-300 ease-in-out"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.316.975.975 1.254 2.242 1.316 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.34 2.633-1.316 3.608-.975.975-2.242 1.254-3.608 1.316-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.34-3.608-1.316-.975-.975-1.254-2.242-1.316-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.34-2.633 1.316-3.608.975-.975 2.242-1.254 3.608-1.316C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.737 0 8.332.014 7.052.072 5.773.13 4.548.396 3.465 1.48 2.382 2.563 2.116 3.788 2.058 5.068.014 8.332 0 8.737 0 12s.014 3.668.072 4.948c.058 1.28.324 2.505 1.408 3.588 1.083 1.083 2.308 1.35 3.588 1.408C8.332 23.986 8.737 24 12 24s3.668-.014 4.948-.072c1.28-.058 2.505-.324 3.588-1.408 1.083-1.083 1.35-2.308 1.408-3.588.058-1.28.072-1.685.072-4.948s-.014-3.668-.072-4.948c-.058-1.28-.324-2.505-1.408-3.588C19.453.396 18.228.13 16.948.072 15.668.014 15.263 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
      </svg>
    </Link>
  </div>
</div>

          </div>

          <div className="mt-8 text-center text-neutral-500 text-sm">
            © {new Date().getFullYear()} Muhamad Fiqrhi. All rights reserved.
          </div>
        </div>
      </footer>
    </div>

  );
}
