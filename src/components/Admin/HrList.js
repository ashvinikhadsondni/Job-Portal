import { Link } from "react-router-dom";
import AdminApi, { url } from "../../WebService/AdminApi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { HrDeleteReducer, HrListReducer } from "../../reduxData/HrSlice";

import { useNavigate } from 'react-router-dom'
import { HrUpdateReducer } from "../../reduxData/UpdateSlice";

export default function HrList() {
    const user = useSelector(state => state.authInfo.value)
    const hrlist = useSelector(state => state.hrInfo.value)


    const dispatch = useDispatch()
    const [msg, setMsg] = useState("")
    const navigate = useNavigate()
    const list = async () => {
        // event.preventDefault() 
        try {
            const response = await AdminApi.GetApiCall(url.HRLIST, user.token)
            console.log(response)
            if (response.status) {
                const dis = dispatch(HrListReducer(response.data.data))
                console.log(dis)
            }
        } catch (error) {
            setMsg("Network Error")
        }
    }


    const updateHR = (ob) => {
        const dis = dispatch(HrUpdateReducer(ob))
        navigate("/updateHr")

    }


    const hrdelete = async (id) => {
        var uid = id
        const confirm = window.confirm("Are you sure to delete this Hr Record")
        if (confirm) {
            try {

                const URL = url.HR_DELETE + id
                const response = await AdminApi.DeleteApiCall(URL, user.token)
                console.log(response)
                if (response.status) {
                    setMsg(response.data.message)
                    const newList = hrlist.filter(ob => ob.id != uid)
                    dispatch(HrDeleteReducer(newList))
                }
            } catch (error) {

            }

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
                            <h2>Hr Details</h2>

                            <span>{msg}</span>

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
                                    <th scope="col">Phone</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Password</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>

                                </tr>
                            </thead>
                            <tbody>

                                {hrlist.map((ob, index) => <tr>
                                    <td>{index + 1}</td>
                                    <td>{ob.fullname}</td>
                                    <td>{ob.phone}</td>
                                    <td>{ob.email}</td>
                                    <td>{ob.password}</td>
                                    <td>{ob.status ? <><b>Active</b></> : <><b >DeActive</b></>}</td>
                                    <td><><button className="btn btn-primary btn-sm" onClick={() => updateHR(ob)}>Edit</button></> &nbsp;<><button onClick={() => hrdelete(ob.id)} className="btn btn-danger btn-sm">Delete</button></></td>
                                </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>



    </>
}