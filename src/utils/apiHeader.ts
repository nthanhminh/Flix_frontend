import Cookies from "js-cookie"

const getAccessToken = () => {
    return Cookies.get('accessToken');
}

const updateApiHeader = () => {
    const accessToken = getAccessToken();
    return {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${accessToken}`,
    };
    
}

export default updateApiHeader
