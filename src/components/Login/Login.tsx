import styles from './styles.module.css'

const Login = () => {
    return (
        <div className={styles.container}>
        <div className={`${styles.form_container} ${styles.register_container}`}>
                <form action="">
                    <h1>Register here</h1>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Password" />
                    <button>Register</button>
                    <span>or use your account</span>
                    <div className={styles.social_container}>
                        <a href="#" className={styles.social}>
                            <i className="fa-brands fa-facebook" />
                        </a>
                        <a href="#" className={styles.social}>
                            <i className="fa-brands fa-google" />
                        </a>
                        <a href="#" className={styles.social}>
                            <i className="fa-brands fa-linkedin" />
                        </a>
                    </div>
                </form>
            </div>
            <div className="form-container login-container">
                <form action="">
                    <h1>Login here</h1>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <div className="content">
                        <div className="checkbox">
                            <input type="checkbox" name="checkbox" id="checkbox" />
                            <label htmlFor="checkbox">Remember me</label>
                        </div>
                        <div className="pass-link">
                            <a href="#">Forgot password</a>
                        </div>
                    </div>
                    <button>Login</button>
                    <span>or use your account</span>
                    <div className="social-container">
                        <a href="#" className="social">
                            <i className="fa-brands fa-facebook" />
                        </a>
                        <a href="#" className="social">
                            <i className="fa-brands fa-google" />
                        </a>
                        <a href="#" className="social">
                            <i className="fa-brands fa-linkedin" />
                        </a>
                    </div>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1 className="title">Hello <br /> Friends</h1>
                        <p>If you have an account, login here and have fun</p>
                        <button className="ghost" id="login">
                            Login
                            <i className="fa-solid fa-arrow-right register" />
                        </button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1 className="title">Start your <br /> journey now</h1>
                        <p>If you do not have an account yet, join us and start your journey</p>
                        <button className="ghost" id="register">
                            Register
                            <i className="fa-solid fa-arrow-left register" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login