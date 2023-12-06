import { Link } from "react-router-dom";
import AdminApi, { url } from "../WebService/AdminApi";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { JobListReducer } from "../reduxData/JobSlice";
import { useNavigate } from 'react-router-dom'
import { JobDetail } from "../reduxData/AppliedJobSlice";
export default function Jobs() {
    const joblist = useSelector(state => state.jobInfo.value)
    const user = useSelector(state => state.authInfo.value)
    const [msg, setMsg] = useState("");
    const [fdata, setfdata] = useState(undefined);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const search = useRef();
    const list = async () => {

        try {
            const response = await AdminApi.GetApi(url.JOB_LIST)
            console.log(response)
            if (response.status) {
                dispatch(JobListReducer(response.data.data))
            }
        } catch (error) {
            setMsg("Network Error")
        }
    }

    useEffect(() => {
        list()
    }, [])

    const appJ = (ob) => {
        if (user.isLogin == false) {
            navigate("/login")

        } else {
            dispatch(JobDetail(ob))
            navigate("/applying-job")
        }
    }
    const handleSearch = () => {
        const value = search.current.value
        console.log(value);

        if (value == "") {
            setfdata(joblist)
        } else {
            var newlist = joblist.filter((data) => {
                const tMatch = data.title.toLowerCase().includes(value.toLowerCase())
                const cNameMatch = data.companyName.toLowerCase().includes(value.toLowerCase())
                const cAddMatch = data.companyAddress.toLowerCase().includes(value.toLowerCase())
                const typeMatch = data.jobtype.toLowerCase().includes(value.toLowerCase())
                const locationMatch = data.joblocation.toLowerCase().includes(value.toLowerCase())

                return tMatch || cNameMatch || cAddMatch || typeMatch || locationMatch
            });
            setfdata(newlist);
            console.log(newlist);
        }
    }
    return <>
        <section className="featured-job-area">
            <div className="container">

                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-tittle text-center">
                            <span>Recent Job</span>
                            <h2>Featured Jobs</h2>
                        </div>
                    </div>
                </div>
                <div className="row pb-5">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4 text-center justify-content-center">
                        <input type="search" className="form-control" placeholder="Search Jobs Job title/company name / address / type" ref={search} onChange={handleSearch}>
                        </input>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        {fdata ? fdata.map(ob => {
                            return <div className="single-job-items mb-30">
                                <div className="job-items">
                                    <div className="company-img">
                                        <Link to=""><img src="assets/img/icon/job-list5.png" alt="" height="100px" width="100px" /></Link>
                                    </div>
                                    <div className="job-tittle">
                                        <Link to="">
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
                        }) : joblist.map(ob => {
                            return <div className="single-job-items mb-30">
                                <div className="job-items">
                                    <div className="company-img">
                                        <Link to=""><img src="assets/img/icon/job-list5.png" alt="" height="100px" width="100px" /></Link>
                                    </div>
                                    <div className="job-tittle">
                                        <Link to="">
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
                        })
                        }
                    </div>
                </div>
            </div>
        </section>
    </>
}