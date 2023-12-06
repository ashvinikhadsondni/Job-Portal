import { Link } from "react-router-dom";
import AdminApi, { url } from "../WebService/AdminApi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { JobByCateListReducer, JobListReducer } from "../reduxData/JobSlice";
import { useNavigate, useParams } from 'react-router-dom'
import { JobDetail } from "../reduxData/AppliedJobSlice";
import CandidateApi, { candiurl } from "../WebService/CandidateApi";

export default function JobByCategory() {
    const jobBycate = useSelector(state => state.jobInfo.value)
    const user = useSelector(state => state.authInfo.value)
    const [msg, setMsg] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { categoryId } = useParams()

    const listByCate = async () => {


        try {
            const url = candiurl.JOB_BY_CATE + categoryId
            const response = await CandidateApi.GetApiCall(url)
            console.log(response)
            if (response.status) {
                dispatch(JobByCateListReducer(response.data.data))
            }
        } catch (error) {
            setMsg("Network Error")
        }
    }

    useEffect(() => {
        listByCate(categoryId)
    }, [categoryId])

    const appJ = (ob) => {
        if (user.isLogin == false) {
            navigate("/login")

        } else {
            dispatch(JobDetail(ob))
            navigate("/applying-job")
        }
    }
    return <>
        <section className="featured-job-area">
            <div className="container">

                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-tittle text-center">
                            <span>Recent Job</span>
                            <h2>{jobBycate[0].categories.title}</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        {jobBycate.map(ob => {
                            return <div className="single-job-items mb-30">
                                <div className="job-items">
                                    <div className="company-img">
                                        <Link to=""><img src="../assets/img/icon/job-list5.png" alt="" height="100px" width="100px" /></Link>
                                    </div>
                                    <div className="job-tittle">
                                        <Link to="job_details.html">
                                            <h4>{ob.title}</h4>
                                        </Link>
                                        <ul>
                                            <li>{ob.companyName}</li>
                                            <li><i className="fas fa-map-marker-alt"></i>{ob.companyAddress}-{ob.joblocation}</li>
                                            <li>&#8377;1000-&#8377;{ob.salary}</li>
                                            <li>Min Exp-{ob.experience}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="items-link f-right">
                                    <button className="btn" onClick={() => appJ(ob)}>Apply Now</button>
                                    <span>{ob.jobtype}</span>
                                </div>
                            </div>
                        })}

                    </div>
                </div>
            </div>
        </section>
    </>
}