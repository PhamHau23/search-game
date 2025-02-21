import axios from "axios"

const apiKey: string = import.meta.env.VITE_API_KEY
const api: string = import.meta.env.VITE_API_URL

export const getGames = async (query: string, search_exact: boolean) => {
    try {
        const response = await axios.get(`${api}games`, {
            params: {
                key: apiKey,
                search: query,
                search_exact,
                page_size: 10,
                ordering: '-rating'
            }
        })

        return response.data.results
    } catch (error) {
        console.error("Error searching games:", error)
        throw error
    }
}

export const getGameData = async (id: string) => {
    try {
        const response = await axios.get(`${api}games/${id}`, {
            params: {
                key: apiKey
            }
        })

        return response.data
    } catch (error) {
        console.error("Error get data:", error)
        throw error
    }
}

export const getLinkDownload = async (id: string) => {
    try {   
        const response = await axios.get(`${api}games/${id}/stores`, {
            params: {
                key: apiKey
            }
        })
        
        return response.data
    } catch (error) {
        console.error("Error get link:", error)
        throw error
    }
}

export const getImages = async (id: string) => {
    try {
        const response = await axios.get(`${api}games/${id}/screenshots`, {
            params: {
                key: apiKey
            }
        })

        return response.data
    } catch (error) {
        console.error("Error get images:", error)
        throw error
    }
}