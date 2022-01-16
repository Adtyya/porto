import Hero from "../components/hero/hero"
import Project from "../components/projects"
import Skill from "../components/skill";


export default function Index()
{
  
  return(
    <>
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