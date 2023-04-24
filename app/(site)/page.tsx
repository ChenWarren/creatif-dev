import { 
  Hero, 
  HomeAbout, 
  HomeBlog, 
  HomeProjects, 
} from "@/blocks"
import { Blog } from "@/types/blog"
import { Project } from "@/types/project"
import { getBlogs } from "@/sanity/util/blog-controller"
import { getProjects } from "@/sanity/util/project-controller"

export default async function Home() {
  const blogs: Blog[] = await getBlogs()
  const projects = await getProjects()
  const featureBlogs: Blog[] = blogs.filter(blog => blog.featured) || blogs.slice(0, 3)
  const featureProjects: Project[] = projects.filter(project => project.featured) || projects.slice(0, 3)

  return (
    <>
      <Hero/>
      {featureBlogs && <HomeBlog featuredBlogs={featureBlogs}/> }
      {featureProjects && <HomeProjects featuredProjects={featureProjects}/> }
      <HomeAbout/>
    </>
  )
}
