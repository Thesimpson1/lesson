import * as axios from 'axios';

const instanse = axios.create({
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    withCredentials:true,
    headers: {'API-KEY':'54f7f1f8-3110-4eda-b6af-ad711342c74b'},

})
export const usersAPI = {
    getUsers(currentPage, pageSize){
            return instanse.get(`users?page=${currentPage}&count=${pageSize}`).then(
                response =>{
                    return response.data;
                }
            )
        }
    }   


export const followAPI = {
    follow(userId){
        return instanse.delete(`follow/${userId}`)
    },
    unFollow(userId){
        return instanse.post(`follow/${userId}`)
    }
}
export const profileApi = {
    getProfileData(userId){
        return instanse.get(`profile/` + userId)
    }
}
