import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import AdminApi, { url } from "../../../WebService/AdminApi"
import { useDispatch, useSelector } from 'react-redux'
import { CateSaveReducer } from "../../../reduxData/CategorySlice"

export default function AddCategory() {

    const user = useSelector(state => state.authInfo.value)
    const dispatch = useDispatch()
    const [msg, setMsg] = useState("")
    const titleBox = useRef()
    const saveCategory = async (event) => {
        event.preventDefault()
        var ob = {
            title: titleBox.current.value
        }

        try {
            const response = await AdminApi.PostApiCall(url.CATEGORY_SAVE, ob, user.token)
            if (response.status) {
                setMsg(response.data.message)
                dispatch(CateSaveReducer([response.data]))
            } else {
                setMsg(response.data.message)

            }
        } catch (error) {
            setMsg("Network Error")
        }
    }
    return <>

        <section className="contact-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="contact-title">Save New Category</h2>
                    </div>
                    <div className="col-lg-8">
                        <form onSubmit={saveCategory} className="form-contact contact_form" id="contactForm" novalidate="novalidate">
                            <div className="row">
                                <div className="col-sm-12 ">
                                    <div className="form-group">
                                        <input ref={titleBox} className="form-control valid" name="name" id="name" type="text" placeholder="Enter New Category " />
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