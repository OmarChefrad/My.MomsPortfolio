import { Projects } from "../typings"
import { NEXT_URL } from "../NEXT_URL"

export const fetchProjects = async () => {
  const res = await fetch(`${NEXT_URL}/api/getProjects`)

  const data = await res.json()
  const projects: Projects[] = data.projects

  return projects
}
