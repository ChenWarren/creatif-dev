import { 
  Hero, 
  HomeAbout, 
  HomeBlog, 
  HomeProjects, 
} from "@/blocks"

export default function Home() {
  return (
    <>
      <Hero/>
      <HomeBlog/>
      <HomeProjects/>
      <HomeAbout/>
    </>
  )
}
