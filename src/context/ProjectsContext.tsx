import { createContext } from "react"
import { Project } from "../types/project.type"

interface ProjectDataProp {
	projects: Project[] | null
	setProjects: React.Dispatch<React.SetStateAction<Project[]>>
}

export const ProjectsContext = createContext<ProjectDataProp>({
	projects: null,
	setProjects: (prev) => {
		return {
			...prev,
		}
	},
})
