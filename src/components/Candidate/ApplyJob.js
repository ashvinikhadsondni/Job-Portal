import { useRef, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import CandidateApi, { candiurl } from "../../WebService/CandidateApi"
export default function ApplyJob() {
    const user = useSelector(state => state.authInfo.value)
    const job = useSelector(state => state.appliedJobInfo.value)
    console.log(job)
    const [msg, setMsg] = useState("")
    const resumeBox = useRef()

    const save = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("resume", resumeBox.current.files[0]);
        formData.append("jobId", job.id);

        console.log("FormData:", formData);
        try {
            const response = await CandidateApi.PostApiCall(
                candiurl.RESUME_UPLOAD,
                formData,
                user.token
            );

            console.log(response);

            if (response.data.status) {
                setMsg(response.data.message);
            } else {
                setMsg(response.data.message);
            }
        } catch (error) {
            setMsg("Network Error!");
        }
    };
    return <>
        <section className="contact-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="contact-title">Upload Your Updated Resume</h2>
                    </div>
                    <div className="col-lg-8">
                        <form onSubmit={save} className="form-contact contact_form" id="contactForm" novalidate="novalidate">
                            <div className="row">
                                <div className="col-sm-12 ">
                                    <div className="form-group">
                                        <input ref={resumeBox} className="form-control valid" name="resume" id="resume" type="file" placeholder="Select Resume " />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <button type="submit" className="button button-contactForm boxed-btn">Apply</button>
                            </div>
                            <b>{msg}</b>
                        </form>
                    </div>

                </div>
            </div>
        </section></>
}