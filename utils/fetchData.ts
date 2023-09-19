import { groq } from "next-sanity";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { sanityClient } from "../sanity";

export const fetchSkills = async () => {
  const query = groq`
  *[_type=='skill']
`
  return sanityClient.fetch(query)
}

export const fetchProjects = async (): Promise<Project[]> => {
  const query = groq`
*[_type=='project'] {
  ...,
  technologies[]->,
}
`

  return sanityClient.fetch(query)
}

export const fetchSocials = async (): Promise<Social[]> => {
  const query = groq`
  *[_type=='social']
`

  return sanityClient.fetch(query)
}

export const fetchPageInfo = async (): Promise<PageInfo> => {
  const query = groq`
  *[_type=='pageInfo'][0]
`
  return sanityClient.fetch(query)
}

export const fetchExperience = async (): Promise<Experience[]> => {
  const query = groq`
  *[_type=='experience'] {
    ...,
    technologies[]->
  }
`
  return sanityClient.fetch(query)

}