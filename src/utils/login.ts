import {jwtDecode,JwtPayload } from 'jwt-decode';

const BACKEND_URL = process.env.BACKEND_URL || 'https://flix-backend-tyyl.onrender.com'

interface CustomJwtPayload extends JwtPayload {
    userName: string | null;
    userId: number | null;
}

const login = async(data: {
    userName:string,
    password:string
}):Promise<string>  => {
    try {
        const options = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(data)
        };
        const response = await fetch(`${BACKEND_URL}/auth/login`, options);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
    
        const responseData = await response.json();
        console.log(responseData)
        return responseData.accessToken;
    } catch (error) {
        throw new Error('Invalid login')
    }
}

const register = async(data: {
    userName:string,
    password:string
}):Promise<string>  => {
    try {
        const options = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(data)
        };
        const response = await fetch(`${BACKEND_URL}/auth/register`, options);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
    
        const responseData = await response.json();

        console.log(responseData)
        return responseData.accessToken;
    } catch (error) {
        throw new Error('Invalid login')
    }
}

const isTokenExpired = (token: string): boolean => {
    if (!token) return true;
    try {
      const decodedToken = jwtDecode<JwtPayload>(token);
      const currentTime = Date.now() / 1000;
      return decodedToken.exp! < currentTime;
    } catch (error) {
      console.error('Error decoding token:', error);
      return true;
    }
};

const getUserInfoFromToken = (token: string) : {
    userName: string | null,
    userId: number | null
} => {
    try {
        const decodedToken = jwtDecode<CustomJwtPayload>(token);
        const data = {
            userName: decodedToken.userName,
            userId: decodedToken.userId,
        }
        console.log(data)
        return data
    }
    catch (err){
        console.log(err)
        return {
            userName: null,
            userId: null,
        }
    }
}

const loginApi = {
    login,
    register,
    isTokenExpired,
    getUserInfoFromToken
}

export default loginApi