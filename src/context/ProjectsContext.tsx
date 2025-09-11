import { createContext } from "react"
import { Project } from "../types/project.type"

interface ProjectDataProp {
	project: Project | null
	setProjects: React.Dispatch<React.SetStateAction<Project>>
}

export const ProjectsContext = createContext<ProjectDataProp>({
	project: null,
	setProjects: (prev) => {
		return {
			...prev,
		}
	},
})
