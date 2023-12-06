import { useEffect, useState } from "react"
import AdminApi, { url } from "../../../WebService/AdminApi"
import { CateListReducer } from "../../../reduxData/CategorySlice"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CateUpdateReducer } from "../../../reduxData/UpdateSlice"

export default function CategoryList() {


    const user = useSelector(state => state.authInfo.value)
    const catlist = useSelector(state => state.cateInfo.value)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [msg, setMsg] = useState("")

    const list = async () => {
        // event.preventDefault() 
        try {
            const response = await AdminApi.GetApiCall(url.CATEGORY_LIST, user.token)
            console.log(response)
            if (response.status) {
                const dis = dispatch(CateListReducer(response.data.data))
                console.log(dis)
            }
        } catch (error) {
            setMsg("Network Error")
        }
    }

    const UpdateCate = (ob) => {
        dispatch(CateUpdateReducer(ob))
        navigate("/categoryUpdate")
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
                            <h2>Category Details</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mb-5">
                    <div className="col-xl-10 table-responsive">

                        <table class="table table-striped table-hover">
                            <thead>
                                <tr className="">
                                    <th scope="col">Sr.no</th>
                                    <th scope="col">Category Title </th>
                                    <th scope="col">Status</th>
                                    <th scope="col" >Action</th>

                                </tr>
                            </thead>
                            <tbody>

                                {catlist.map((ob, index) => <tr>
                                    <td>{index + 1}</td>
                                    <td>{ob.title}</td>


                                    <td>{ob.status ? <><b >Active</b></> : <><b>DeActive</b></>}</td>
                                    <td><button className="btn btn-primary btn-sm" onClick={() => UpdateCate(ob)}>Edit</button></td>

                                </tr>)}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </>
}