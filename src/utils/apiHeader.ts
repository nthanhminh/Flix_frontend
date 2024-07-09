import Cookies from "js-cookie"

const accessToken = Cookies.get('accessToken')

const apiHeader = {
    'Content-Type': 'application/json', 
    'Authorization': `Bearer ${accessToken}`,
    'Access-Control-Allow-Origin': 'https://flix-frontend-bice.vercel.app',
    'Access-Control-Allow-Credentials': 'true'
}

export default apiHeader