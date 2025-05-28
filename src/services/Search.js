import axios from "axios";

const getPodcasts= async(term)=> {
    try {
        if (!term) return null;
        const response = await axios.get(`/search/${term}`)
        return response.data
    } catch (error) {
        console.error(error)
        throw new Error(error.message)
    }
}
export {getPodcasts}