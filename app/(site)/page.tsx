/**
 * Home page
 */

import { 
  Hero, 
  HomeAbout, 
  HomeBlog, 
  HomeProjects,
} from "@/blocks"
import { siteInfo } from '@/settings'
import { Blog, Project } from "@/types"
import { getBlogs } from "@/sanity/util/blog-controller"
import { getProjects } from "@/sanity/util/project-controller"

export const metadata = {
  title: `Home | ${siteInfo.title}`,
  description: siteInfo.description,
}

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
