'use client'
import { useContext, useRef, useState } from 'react'
import styles from './styles.module.css'
import Cookies from 'js-cookie';
import loginApi from '@/utils/login'
import { useRouter } from 'next/navigation';
import { GlobalContext } from '@/contexts/GlobalContext';

const Login = () => {

    const {setNeedLogin, setUserName, setUserId, setAccessToken} = useContext(GlobalContext)
    
    const [login, setLogin] = useState<boolean>(false)

    const inputLoginUsername = useRef<HTMLInputElement>(null)

    const inputRegisterUsername = useRef<HTMLInputElement>(null)

    const inputLoginPassword = useRef<HTMLInputElement>(null)

    const inputRegisterPassword = useRef<HTMLInputElement>(null)

    const router = useRouter()


    const handleLogin = () => {
        console.log('click')
        setLogin(!login)
    }

    const handleLoginAction = async() => {

        console.log(inputLoginUsername.current?.value, inputLoginPassword.current?.value)

        const accessToken = await loginApi.login({
            userName: inputLoginUsername.current?.value ?? '',
            password: inputLoginPassword.current?.value ?? '',
        })

        if(accessToken){
            setUserName(inputLoginUsername.current?.value!)
            setAccessToken(accessToken)
            Cookies.set('accessToken', accessToken, {
                expires: 7, 
            });

            const data = loginApi.getUserInfoFromToken(accessToken)
            Cookies.set('id', (data.userId ?? 0).toString(), {
                expires: 7, 
            });
            setUserId(data.userId ?? 0)
            setNeedLogin(false)
            router.push('/')
        }
    }

    const handleRegisterAction = async() => {
        console.log(inputRegisterUsername.current?.value, inputRegisterPassword.current?.value)
        const accessToken = await loginApi.register({
            userName: inputRegisterUsername.current?.value ?? '',
            password: inputRegisterPassword.current?.value ?? '',
        })
        console.log(accessToken)
        if(accessToken){
            setUserName(inputLoginUsername.current?.value!)
            Cookies.set('accessToken', accessToken, {
                expires: 7, 
            });
            const data = loginApi.getUserInfoFromToken(accessToken)
            Cookies.set('id', (data.userId ?? 0).toString(), {
                expires: 7, 
            });
            setUserId(data.userId ?? 0)
            setNeedLogin(false)
            router.push('/')
        }
    }

    return (
        <div className= {styles.container}>
            <div className={styles.form_container}>
                <div className={`${styles.item_container} ${styles.login} ${!login ? styles.disable : ''}`}>
                    <div className={`${styles.login_form} ${styles.login_ani} ${!login ? styles.disable : ''}`}>
                        <h4 className={styles.header}>
                            Login
                        </h4>
                        <div className={styles.input_container}>
                            <input ref={inputLoginUsername} className={styles.input} type="text" placeholder='UserName'/>
                        </div>
                        <div className={styles.input_container}>
                            <input ref={inputLoginPassword} className={styles.input} type="password" placeholder='Password'/>
                        </div>
                        <div className={styles.btn_container}>
                            <button className={styles.btn} onClick={() => {handleLoginAction()}}>Login</button>
                        </div>
                    </div>
                    <div className={`${styles.intro} ${styles.login_intro_ani} ${!login ? styles.disable : ''}`}>
                        <h3 className={styles.intro_header}>
                            Start Journey
                        </h3>
                        <div className={styles.text_container}>
                            <p className={styles.text}>
                                Wishing you a great experience
                            </p>
                        </div>
                        <div className={styles.intro_btn_container}>
                            <button className={styles.intro_btn} onClick={() => {handleLogin()}}>Register</button>
                        </div>
                    </div>
                </div>
                <div className={`${styles.item_container} ${styles.register} ${login ? styles.disable : ''}`}>
                    <div className={`${styles.login_form} ${styles.register_ani} ${login ? styles.disable : ''}`}>
                        <h4 className={styles.header}>
                            Register
                        </h4>
                        <div className={styles.input_container}>
                            <input ref={inputRegisterUsername} className={styles.input} type="text" placeholder='UserName'/>
                        </div>
                        <div className={styles.input_container}>
                            <input ref={inputRegisterPassword} className={styles.input} type="password" placeholder='Password'/>
                        </div>
                        <div className={styles.btn_container}>
                            <button className={styles.btn} onClick={() => {handleRegisterAction()}}>Register</button>
                        </div>
                    </div>
                    <div className={`${styles.intro} ${styles.register_intro_ani} ${login ? styles.disable : ''}`}>
                        <h3 className={styles.intro_header}>
                            Start Journey
                        </h3>
                        <div className={styles.text_container}>
                            <p className={styles.text}>
                                Wishing you a great experience
                            </p>
                        </div>
                        <div className={styles.intro_btn_container}>
                            <button className={styles.intro_btn} onClick={():void => {handleLogin()}}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login