// apiClient.ts
import axios from "axios"

const apiClient = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
})

// Request interceptor
apiClient.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("auth_token")
		if (token) {
			config.headers.Authorization = `Bearer ${token}`
		}
		return config
	},
	(error) => Promise.reject(error)
)

// Response interceptor
apiClient.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response?.status === 401) {
			// e.g. redirect to login
		}
		return Promise.reject(error)
	}
)

export default apiClient
