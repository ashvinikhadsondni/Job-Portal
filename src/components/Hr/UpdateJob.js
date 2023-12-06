import { useRef, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import HrApi, { hrurl } from "../../WebService/HrApi"
export default function UpdateJob() {

    const user = useSelector(state => state.authInfo.value)
    const updateData = useSelector(state => state.updateInfo.value)
    console.log(updateData)
    const [msg, setMsg] = useState("")
    const [cate, setCate] = useState([])
    const dispatch = useDispatch()

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

    const update = async (event) => {
        event.preventDefault()

        var ob = {

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
            const upJoburl = hrurl.UPDATE_JOB + updateData.id
            const response = await HrApi.PutApiCall(upJoburl, ob, user.token)
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

    return <>
        <section className="contact-section mt-0">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="contact-title">Update Job Details</h2>
                    </div>
                    <div className="col-lg-12 mt-4">
                        <form onSubmit={update} className="form-contact contact_form" id="contactForm" novalidate="novalidate">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Job Title</label>
                                        <input ref={titleBox} defaultValue={updateData.title} className="form-control valid" name="name" id="name" type="text" placeholder="Enter Job Title" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Job description</label>
                                        <input defaultValue={updateData.description} ref={descBox} className="form-control valid" name="name" id="name" type="text" placeholder="Enter Job Description" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Company Name</label>
                                        <input defaultValue={updateData.companyName} ref={cNameBox} className="form-control valid" name="name" id="name" type="text" placeholder="Enter Company Name" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Company Address</label>
                                        <input defaultValue={updateData.companyAddress} ref={cAddressBox} className="form-control valid" name="name" id="name" type="text" placeholder="Enter Company Address" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Contact</label>
                                        <input defaultValue={updateData.contact} ref={phoneBox} className="form-control valid" name="phone" id="phone" type="number" placeholder="Enter Phone Number" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input defaultValue={updateData.email} ref={emailBox} className="form-control valid" name="email" id="email" type="email" placeholder="Enter Username / email" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Qualification</label>
                                        <input defaultValue={updateData.qualification} ref={qualificationBox} className="form-control valid" name="password" id="phone" type="text" placeholder="Enter Qualification" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Experiecne</label>
                                        <input defaultValue={updateData.experience} ref={expBox} className="form-control valid" name="exp" id="phone" type="text" placeholder="Enter Experience" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Skills</label>
                                        <input defaultValue={updateData.skills} ref={skillBox} className="form-control valid" name="skills" id="phone" type="text" placeholder="Enter Required Skills" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Job Location</label>
                                        <select defaultValue={updateData.joblocation} ref={locationBox} className="form-control form-select valid" type="text">
                                            <option value="">Select Type</option>
                                            <option value="OnSite">OnSite</option>
                                            <option value="Remote">Remote</option>
                                            <option value="Hybrid">Hybrid</option>

                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Job Type</label>
                                        <input defaultValue={updateData.jobtype} ref={typeBox} className="form-control valid" name="skills" id="phone" type="text" placeholder="Enter Type" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Salary</label>
                                        <input defaultValue={updateData.salary} ref={salaryBox} className="form-control valid" name="skills" id="phone" type="number" placeholder="Enter Salary" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Expiry Date</label>
                                        <input defaultValue={updateData.expirydate} ref={expDateBox} className="form-control valid" name="skills" id="date" type="date" />
                                    </div>
                                </div>

                            </div>
                            <div className="form-group mt-3">
                                <button type="submit" className="button button-contactForm boxed-btn">Update</button>
                            </div>
                            <b>{msg}</b>
                        </form>
                    </div>

                </div>
            </div>
        </section>

    </>
}