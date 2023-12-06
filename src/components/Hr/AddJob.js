import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import HrApi, { hrurl } from "../../WebService/HrApi";
import { useDispatch, useSelector } from 'react-redux'
export default function AddJob() {

    const user = useSelector(state => state.authInfo.value)
    const [msg, setMsg] = useState("")
    const [cate, setCate] = useState([])
    const dispatch = useDispatch()

    const cateBox = useRef()
    const titleBox = useRef()
    const descBox = useRef()
    const cNameBox = useRef()
    const cAddressBox = useRef()
    const emailBox = useRef()
    const phoneBox = useRef()
    const qualificationBox = useRef()
    const expBox = useRef()
    const skillBox = useRef()
    const salaryBox = useRef()
    const typeBox = useRef()
    const locationBox = useRef()
    const expDateBox = useRef()

    const save = async (event) => {
        event.preventDefault()

        var ob = {
            category: cateBox.current.value,
            title: titleBox.current.value,
            description: descBox.current.value,
            companyName: cNameBox.current.value,
            companyAddress: cAddressBox.current.value,
            email: emailBox.current.value,
            contact: phoneBox.current.value,
            qualification: qualificationBox.current.value,
            experience: expBox.current.value,
            skills: skillBox.current.value,
            salary: salaryBox.current.value,
            jobtype: typeBox.current.value,
            joblocation: locationBox.current.value,
            postdate: Date.now(),
            expirydate: expDateBox.current.value
        }

        try {
            const response = await HrApi.PostApiCall(hrurl.JOB_SAVE, ob, user.token)
            console.log(response)
            if (response.status) {
                setMsg(response.data.message)
            }
            else {
                setMsg(response.data.message)
            }
        } catch (error) {
            setMsg("Network Error !")
        }
    }

    const cateList = async () => {
        try {
            const response = await HrApi.GetApi(hrurl.CATEGORY)
            console.log(response)
            if (response.status) {
                setCate(response.data.data)
            }
        } catch (error) {
            setMsg("Network Error !")
        }
    }

    useEffect(() => {
        cateList()
    }, [])
    return <>
        <section className="contact-section mt-0">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="contact-title">Post New Job</h2>
                    </div>
                    <div className="col-lg-12 mt-4">
                        <form onSubmit={save} className="form-contact contact_form" id="contactForm" novalidate="novalidate">
                            <div className="row">

                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Category</label>
                                        <select ref={cateBox} className="form-control form-select valid" type="text">
                                            <option>Select Category</option>
                                            {cate.map(ob => <option value={ob.id}>{ob.title}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Job Title</label>
                                        <input ref={titleBox} className="form-control valid" name="name" id="name" type="text" placeholder="Enter Job Title" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Job description</label>
                                        <input ref={descBox} className="form-control valid" name="name" id="name" type="text" placeholder="Enter Job Description" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Company Name</label>
                                        <input ref={cNameBox} className="form-control valid" name="name" id="name" type="text" placeholder="Enter Company Name" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Company Address</label>
                                        <input ref={cAddressBox} className="form-control valid" name="name" id="name" type="text" placeholder="Enter Company Address" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Contact</label>
                                        <input ref={phoneBox} className="form-control valid" name="phone" id="phone" type="number" placeholder="Enter Phone Number" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input ref={emailBox} className="form-control valid" name="email" id="email" type="email" placeholder="Enter Username / email" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Qualification</label>
                                        <input ref={qualificationBox} className="form-control valid" name="password" id="phone" type="text" placeholder="Enter Qualification" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Experiecne</label>
                                        <input ref={expBox} className="form-control valid" name="exp" id="phone" type="text" placeholder="Enter Experience" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Skills</label>
                                        <input ref={skillBox} className="form-control valid" name="skills" id="phone" type="text" placeholder="Enter Required Skills" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Job Location</label>
                                        <select ref={locationBox} className="form-control form-select valid" type="text">
                                            <option>Select Type</option>
                                            <option value="OnSite">OnSite</option>
                                            <option value="Remote">Remote</option>
                                            <option value="Hybrid">Hybrid</option>

                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Job Type</label>
                                        <select ref={typeBox} className="form-control form-select valid" ><option>Select Type</option>
                                            <option value="Full Time">Full Time</option>
                                            <option value="Part Time">Part Time</option>
                                            <option value="Internship">Internship</option>
                                            <option value="Contract">Contract Based</option>

                                        </select>

                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Salary</label>
                                        <input ref={salaryBox} className="form-control valid" name="skills" id="phone" type="number" placeholder="Enter Salary" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Expiry Date</label>
                                        <input ref={expDateBox} className="form-control valid" name="skills" id="date" type="date" />
                                    </div>
                                </div>

                            </div>
                            <div className="form-group mt-3">
                                <button type="submit" className="button button-contactForm boxed-btn">Save</button>
                            </div>
                            <b>{msg}</b>
                        </form>
                    </div>

                </div>
            </div >
        </section >


    </>
}