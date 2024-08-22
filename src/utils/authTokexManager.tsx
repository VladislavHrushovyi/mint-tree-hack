export const useAuthToken = () => {
    const loadAuthToken = () => {
        const authFromLocalStorage = localStorage.getItem("authToken");
        if(authFromLocalStorage){
            return authFromLocalStorage;
        }
        return "";
    }

    const changeAuthToken = (authToken : string) => {
        localStorage.setItem("authToken", authToken)
    }

    return {
        getAuthToken: loadAuthToken,
        changeAuthToken: changeAuthToken
    }
}