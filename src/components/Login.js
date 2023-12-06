import { useRef, useState } from "react"
import AuthApi, { urls } from "../WebService/AuthApi"
import { useNavigate } from 'react-router-dom'
import { authReducer } from "../reduxData/AuthSlice"
import { useDispatch } from "react-redux"
export default function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [msg, setMsg] = useState("")

    const usernameBox = useRef()
    const passBox = useRef()

    const handleLogin = async (event) => {
        event.preventDefault()

        var ob = {
            email: usernameBox.current.value,
            password: passBox.current.value
        }
        try {
            const response = await AuthApi.PostApiCall(urls.LOGIN, ob)
            console.log(response)
            if (response.data.status) {
                const dis = dispatch(authReducer({ isLogin: true, token: response.data.data.token, username: response.data.data.name, type: response.data.data.type }))
                console.log(dis)
                navigate('/')
                setMsg(response.data.message)
} else {
                setMsg(response.data.message)
            }
}
catch (error) {
            console.log("APi nor working.....")
            setMsg("Network error")
        }
    }

    return <>

        <section className="contact-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="contact-title">Login...</h2>
                    </div>
                    <div className="col-lg-12">
                        <form onSubmit={handleLogin} className="form-contact contact_form" id="contactForm" novalidate="novalidate">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input className="form-control valid" ref={usernameBox} name="name" id="name" type="text" placeholder="Enter Username" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input className="form-control valid" name="password" ref={passBox} id="password" type="password" placeholder="Enter Password" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <button type="submit" className="button button-contactForm boxed-btn">Login</button>
                            </div>
                            <b>{msg}</b>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    </>
}