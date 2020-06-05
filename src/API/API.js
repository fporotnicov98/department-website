import * as axios from 'axios'

// const token = "eyJhbGc2iOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJmZWRvcm92MTIzQGdtYWlsLmNvbSIsImV4cCI6MTU5MDYxMDYzMiwiaXNzIjoiRGVtb0FwcCIsImF1ZCI6IkRlbW9BcHBDbGllbnQifQ.1nqDAYj0IcVOsgJ7BA41-4ydhNnnkKoygyDE-6yfjrM"
const instanse = axios.create({
    baseURL: 'http://kaf.westeurope.cloudapp.azure.com/',
    withCredentials: true,
})


const API = {
    getNews(){
        return instanse.get('News/GetNews')
    },
    getPolls(){
        return instanse.get('Polls/GetPoll')
    },
    addNews(authorId,theme,news_Text,news_Date){
        return instanse.post('News/AddNews',{authorId,theme,news_Text,news_Date})
    },
    removeNews(id){
        return instanse.delete(`News/DeleteNews/?id=${id}`)
    },
    updateNews(id,theme,news_Text,news_Date){
        return instanse.put(`News/UpdateNews`, {id,theme,news_Text,news_Date})
    },
    getForum(){
        return instanse.get(`Forum/GetForum`)
    },
    addForum(id,theme){
        return instanse.post(`Forum/AddForum`,{id,theme})
    },
    removeForumPost(id){
        return instanse.delete(`Forum/DeleteForum/?id=${id}`)
    },
}
export default API
