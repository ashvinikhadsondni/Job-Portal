import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

import AdminApi, { url } from "../../WebService/AdminApi";
import { HrSaveReducer } from "../../reduxData/HrSlice";

export default function AddHr() {
    const user = useSelector(state => state.authInfo.value)
    const [msg, setMsg] = useState("")
    const dispatch = useDispatch()

    const hrnameBox = useRef()
    const phoneBox = useRef()
    const emailBox = useRef()
    const passBox = useRef()

    const handleHrSave = async (event) => {
        event.preventDefault()
        var ob = {
            fullname: hrnameBox.current.value,
            email: emailBox.current.value,
            phone: phoneBox.current.value,
            password: passBox.current.value
        }
        console.log(ob)

        try {
            const response = await AdminApi.PostApiCall(url.ADDHR, ob, user.token)
            console.log("Api Respponse", response)
            if (response.status) {
                setMsg(response.data.message)
                dispatch(HrSaveReducer([response.data]))
            } else {
                setMsg(response.data.message)
            }
        } catch (error) {
            setMsg("Network Issue")
        }

    }
    return <>

        <section className="contact-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="contact-title">Save New Hr</h2>
                    </div>
                    <div className="col-lg-8">
                        <form onSubmit={handleHrSave} className="form-contact contact_form" id="contactForm" novalidate="novalidate">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input ref={hrnameBox} className="form-control valid" name="name" id="name" type="text" placeholder="Enter New Hr's Name" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input ref={phoneBox} className="form-control valid" name="phone" id="phone" type="number" placeholder="Enter Hr's Phone Number" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input ref={emailBox} className="form-control valid" name="email" id="email" type="email" placeholder="Enter Username / email" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input ref={passBox} className="form-control valid" name="password" id="phone" type="password" placeholder="Enter Password" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <button type="submit" className="button button-contactForm boxed-btn">Save</button>
                            </div>
                            <b>{msg}</b>
                        </form>
                    </div>
                    <div className="col-lg-3 offset-lg-1">
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-user"></i></span>
                            <div className="media-body">
                                <h3><Link to="/hrlist">Hr Details </Link></h3>

                            </div>
                        </div>
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-user"></i></span>
                            <div className="media-body">
                                <h3><Link to="">Jobs Details</Link></h3>

                            </div>
                        </div>
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-user"></i></span>
                            <div className="media-body">
                                <h3><Link to="">Candidates Details</Link></h3>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}