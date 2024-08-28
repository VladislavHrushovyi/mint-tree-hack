import { mintAxois } from "./mintClient"

export const mintClient = () => {

    const axios = mintAxois;

    const getUserInfo = async (idTree: string) => {
        const response  = await axios.get(`/api/tree/user-info?treeid=${idTree}`)

        return response
    }
    
    const getEnergyList = async (idUser: string) => {
        const response = await axios.get(`/api/tree/steal/energy-list?id=${idUser}`)

        return response
    }
    
    const claimMe = async (idUser: string) => {
        const response = await axios.get(`/api/tree/steal/claim?id=${idUser}`)

        return response
    }
    
    const getDetailInformation = async (idTree: string) => {
        const response = await axios.get(`/api/tree/activity?page=1&treeid=${idTree}`)

        return response
    }

    const getTreesFromLeaderboard = async (page: string) => {
        const response = await axios.get(`/api/tree/leaderboard?page=${page}`)

        return response
    }

    return {
        getUserInfo,
        getEnergyList,
        claimMe,
        getDetailInformation,
        getTreesFromLeaderboard
    }
}