import axios from "axios"
const instance=axios.create({
    baseURL: "http://localhost:3000/"
})

const api={
async getElements(){
    let response=await instance.get("elements")
    console.log(response.data.elements)
    return response.data.elements
}
}
export default api