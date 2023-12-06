import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'

import { useNavigate, useParams } from 'react-router-dom'

import CandidateApi, { candiurl } from "../../WebService/CandidateApi";
import { MyJobsReducer } from "../../reduxData/CandidateSlice";


export default function MyJobs() {
    const MyJoblist = useSelector(state => state.candidateInfo.value)
    const user = useSelector(state => state.authInfo.value)
    const [msg, setMsg] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const myJobs = async () => {

        try {

            const response = await CandidateApi.GetApiCall(candiurl.MY_JOBS, user.token)
            console.log(response)
            if (response.status) {
                dispatch(MyJobsReducer(response.data.data))
            }
        } catch (error) {
            setMsg("Network Error")
        }
    }

    useEffect(() => {
        myJobs()
    }, [])


    const formateDate = (datestr) => {
        const date = new Date(datestr)
        return date.toLocaleDateString()
    }

    return <>
        <section className="featured-job-area">
            <div className="container">

                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-tittle text-center">
                            <span>Recent Job</span>
                            {/* <h2>{jobBycate[0].categories.title}</h2> */}
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        {MyJoblist.map(ob => {
                            return <div className="single-job-items mb-30">
                                <div className="job-items">
                                    <div className="company-img">
                                        <Link to=""><img src="../assets/img/icon/job-list5.png" alt="" height="100px" width="100px" /></Link>
                                    </div>
                                    <div className="job-tittle">
                                        <Link to="job_details.html">
                                            <h4>{ob.jobs.title}</h4>
                                        </Link>
                                        <ul>
                                            <li>{ob.jobs.companyName}</li>
                                            <li><i className="fas fa-map-marker-alt"></i>{ob.jobs.joblocation}</li>
                                            <li>&#8377;1000-&#8377;{ob.jobs.salary}</li>
                                            <li>Expiry-{formateDate(ob.jobs.expirydate)}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="items-link f-right">

                                    <span>Apply-{formateDate(ob.applydate)}</span>
                                </div>
                            </div>
                        })}

                    </div>
                </div>
            </div>
        </section>
    </>
}