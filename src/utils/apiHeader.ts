import Cookies from "js-cookie"

const accessToken = Cookies.get('accessToken')

console.log(accessToken)

const apiHeader = {
    'Content-Type': 'application/json', 
    'Authorization': `Bearer ${accessToken}`
}

export default apiHeader