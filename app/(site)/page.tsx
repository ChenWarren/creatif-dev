import { 
  Hero, 
  HomeAbout, 
  HomeBlog, 
  HomeProjects, 
  Footer 
} from "@/blocks"

export default function Home() {
  return (
    <>
      <Hero/>
      <HomeAbout/>
      <HomeProjects/>
      <HomeBlog/>
      <Footer/>
    </>
  )
}
