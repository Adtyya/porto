import Hero from "../components/hero/hero"
import Project from "../components/projects"
import Skill from "../components/skill";
import Head from "next/head";

export default function Index()
{
  
  return(
    <>
      <Head>
        <title>🌟 Portofolio</title>
        <meta name="description" content="Aditya's portofolio website building used NextJS"/>
        <meta name="keyword" content="portofolio aditya netlify"/>
        <meta name="author" content="Aditya" />
      </Head>
       <div id="hero">
        <Hero />
       </div>
        <div id="project">
          <Project />
        </div>
        <div id="skills">
          <Skill />
        </div>
    </>
  )
}