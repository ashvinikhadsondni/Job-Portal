import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import AdminApi, { url } from "../../../WebService/AdminApi";




export default function UpdateCategory() {
    const user = useSelector(state => state.authInfo.value)
    const cateList = useSelector(state => state.updateInfo.value)

    const [msg, setMsg] = useState("")
    const dispatch = useDispatch()

    const cateTitleBox = useRef()
    const statusBox = useRef()


    const update = async (event) => {
        event.preventDefault()
        var ob = {
            title: cateTitleBox.current.value,

            status: statusBox.current.value
        }
        console.log(ob)
        try {

            const URL = url.CATEGORY_UPDATE + cateList.id
            const response = await AdminApi.PutApiCall(URL, ob, user.token,)
            console.log("Api Respponse", response)
            if (response.status) {
                setMsg(response.data.message)
                // dispatch(HrSaveReducer([response.data]))
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
                        <h2 className="contact-title">Update Category</h2>
                    </div>
                    <div className="col-lg-8">
                        <form onSubmit={update} className="form-contact contact_form" id="contactForm" novalidate="novalidate">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <lable>Category Title</lable>
                                        <input defaultValue={cateList.title} ref={cateTitleBox} className="form-control valid" name="name" id="name" type="text" />
                                    </div>
                                </div>

                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <lable>Status</lable>
                                        <select className="form-control valid" defaultValue={cateList.status}  >
                                            <option defaultValue={cateList.status}></option>

                                            <option value={true}>Active</option>
                                            <option value={false}>Deactive</option>

                                        </select>
                                    </div>
                                </div>

                            </div>
                            <div className="form-group mt-3">
                                <button type="submit" className="button button-contactForm boxed-btn">Update</button>
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