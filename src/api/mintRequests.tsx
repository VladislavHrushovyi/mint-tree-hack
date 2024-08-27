import { mintAxois } from "./mintClient"

export const mintClient = () => {

    const axios = mintAxois;

    const getUserInfo = async (idTree: string) => {
        const response  = await axios.get(`/api/tree/user-info?treeid=${idTree}`)

        return response;
    }
    
    const getEnergyList = async () => {
    
    }
    
    const claimMe = async () => {
    
    }
    
    const getDetailInformation = async () => {
        
    }

    return {
        getUserInfo,
        getEnergyList,
        claimMe,
        getDetailInformation
    }
}