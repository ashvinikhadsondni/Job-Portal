import { useEffect, useState } from "react"
import AdminApi, { url } from "../../WebService/AdminApi"
import { useDispatch, useSelector } from 'react-redux'
import { JobListReducer } from "../../reduxData/JobSlice"
import { CandidateListReducer } from "../../reduxData/CandidateSlice"
export default function CandidateList() {
    const candidateList = useSelector(state => state.candidateInfo.value)
    const [msg, setMsg] = useState("")
    const dispatch = useDispatch()

    const list = async () => {

        try {
            const response = await AdminApi.GetApi(url.CANDIDATE_LIST)
            console.log(response)
            if (response.status) {
                dispatch(CandidateListReducer(response.data.data))
            }
        } catch (error) {
            setMsg("Network Error")
        }
    }

    useEffect(() => {
        list()
    }, [])
    return <>


        <section className="featured-job-area ">
            <div className="container">

                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-tittle text-center">
                            <span></span>
                            <h2>Candidates Details</h2>

                            <span></span>

                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mb-3">
                    <div className="col-xl-10 table-responsive">

                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Sr.no</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone Number</th>

                                </tr>
                            </thead>
                            <tbody>
                                {candidateList.map((ob, index) => <tr>
                                    <td>{index + 1}</td>
                                    <td>{ob['username.fullname']}</td>
                                    <td>{ob['username.email']}</td>
                                    <td>{ob['username.phone']}</td>




                                </tr>)}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </>
}