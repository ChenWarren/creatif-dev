/**
 * Home page
 */

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
  const featureBlogs: Blog[] = blogs.filter(blog => blog.featured)
  const featureProjects: Project[] = projects.filter(project => project.featured) 

  return (
    <>
      <Hero/>
      {featureBlogs && <HomeBlog featuredBlogs={featureBlogs}/> }
      {featureProjects && <HomeProjects featuredProjects={featureProjects}/> }
      <HomeAbout/>
    </>
  )
}
