import axios from 'axios'
import { useQuery } from 'react-query';
const token = "YourToken"

export const fetchData = async (githubUser) => {
    try {
        const userResponse = await axios.get(`https://api.github.com/users/${githubUser}`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
        const userData = userResponse.data

        if (userData.followers_url) {
            const followersResponse = await axios.get(userData.followers_url, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
            const followersData = followersResponse.data
            userData.followersData = followersData
        }

        if (userData.repos_url) {
            const repourl = await axios.get(userData.repos_url, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const repoData = repourl.data
            userData.repourl = repoData
        }

        return userData
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error
    }
}


export const useQueryFecth = (githubUser) => useQuery(['fetch', githubUser], () => fetchData(githubUser), {
    refetchOnWindowFocus: false,
    retryOnMount: false,
    refetchInterval: false
})