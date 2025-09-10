import { useState, useEffect, useCallback } from "react"
import apiClient from "../api/client"

export interface BackendStatus {
	isOnline: boolean
	isLoading: boolean
	error: string | null
	lastChecked: Date | null
	responseTime: number | null
}

export const useBackendHealth = (checkInterval: number = 30000) => {
	const [status, setStatus] = useState<BackendStatus>({
		isOnline: false,
		isLoading: true,
		error: null,
		lastChecked: null,
		responseTime: null,
	})

	const checkBackendHealth = useCallback(async () => {
		const startTime = Date.now()

		try {
			setStatus((prev) => ({ ...prev, isLoading: true, error: null }))

			// Use a dedicated health check endpoint or a lightweight endpoint
			const response = await apiClient.get("/api/helth", {
				timeout: 10000, // 10 second timeout
			})

			const responseTime = Date.now() - startTime

			setStatus({
				isOnline: response.status === 200,
				isLoading: false,
				error: null,
				lastChecked: new Date(),
				responseTime,
			})
			console.log(response)
		} catch (error: any) {
			const responseTime = Date.now() - startTime

			setStatus({
				isOnline: false,
				isLoading: false,
				error: error.message || "Backend unavailable",
				lastChecked: new Date(),
				responseTime,
			})
		}
	}, [])

	// Check on mount and set up interval
	useEffect(() => {
		checkBackendHealth()

		const interval = setInterval(checkBackendHealth, checkInterval)

		return () => clearInterval(interval)
	}, [checkBackendHealth, checkInterval])

	return {
		...status,
		checkNow: checkBackendHealth,
	}
}
