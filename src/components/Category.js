import { Link } from "react-router-dom";
import HrApi, { hrurl } from "../WebService/HrApi";
import { useEffect, useState } from "react";

export default function Category() {
    const [cate, setCate] = useState([])
    console.log("category", cate)
    const [msg, setMsg] = useState("")


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
        <div className="our-services">
            <div className="container">

                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-tittle text-center">
                            <span>FEATURED TOURS Packages</span>
                            <h2>Browse Top Categories </h2>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-contnet-center">


                    {cate.map(ob => {
                        return <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div className="single-services text-center mb-30">
                                <div className="services-ion">
                                    <span className="flaticon-cms"></span>
                                </div>
                                <div className="services-cap">

                                    <h5><Link to={`/jobs/${ob.id}`}>{ob.title}</Link></h5>

                                </div>
                            </div>
                        </div>
                    })}

                </div>


            </div>
        </div></>
}