import { useState, useEffect, useCallback } from "react"
import { useContext } from "react"
import { ProjectsContext } from "../context/ProjectsContext"
import apiClient from "../api/client"
import { Project } from "../types/project.type"

interface UseProjectsReturn {
	projects: Project[] // Fix: Remove | unknown
	isLoading: boolean
	error: string | null
	refetch: () => Promise<void>
}

interface ApiError {
	response?: {
		data: {
			error: string
		}
	}
}

export const useProjects = (): UseProjectsReturn => {
	const context = useContext(ProjectsContext)

	if (!context) {
		throw new Error("useProjects must be used within a ProjectProvider")
	}

	// Destructure context
	const { projects, setProjects } = context
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	// Fetch all projects
	const fetchProjects = useCallback(async () => {
		setIsLoading(true)
		setError(null)

		try {
			const response = await apiClient.get("/api/projects")
			// console.log("API response:", response.data) // Debug log

			const projectsData = response.data.projects || []
			setProjects(projectsData)
		} catch (err) {
			const apiError = err as ApiError
			const errorMessage =
				apiError.response?.data?.error || "Failed to fetch projects"
			setError(errorMessage)
			console.error("Fetch projects error:", err)
		} finally {
			setIsLoading(false)
		}
	}, [setProjects])

	// Auto-fetch on mount
	useEffect(() => {
		fetchProjects()
	}, [fetchProjects])

	// Ensure projects is always an array
	const safeProjects = Array.isArray(projects) ? projects : []

	return {
		projects: safeProjects,
		isLoading,
		error,
		refetch: fetchProjects,
	}
}
