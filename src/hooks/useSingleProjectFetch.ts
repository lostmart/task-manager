import { useEffect, useState, useCallback } from "react"
import { Project } from "../types/project.type"
import apiClient from "../api/client"

interface UseProjectReturn {
	project: Project | null
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

export const useSingleProject = (id: string): UseProjectReturn => {
	const [project, setProject] = useState<Project | null>(null)
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)

	const fetchProject = useCallback(async () => {
		// Don't fetch if no ID
		if (!id) {
			setError("No project ID provided")
			setIsLoading(false)
			return
		}

		setIsLoading(true)
		setError(null)

		try {
			const response = await apiClient.get(`/api/projects/${id}`)
			setProject(response.data.project)
		} catch (err) {
			const apiError = err as ApiError
			const errorMessage =
				apiError.response?.data?.error || "Failed to fetch project"
			setError(errorMessage)
			setProject(null)
		} finally {
			setIsLoading(false)
		}
	}, [id])

	useEffect(() => {
		fetchProject()
	}, [fetchProject])

	return {
		project,
		isLoading,
		error,
		refetch: fetchProject,
	}
}
