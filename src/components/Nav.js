import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { authReducer } from "../reduxData/AuthSlice"
import { useNavigate } from 'react-router-dom'
export default function Nav() {

    const user = useSelector(state => state.authInfo.value)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logout = () => {
        const dis = dispatch(authReducer({ isLogin: false, token: undefined, username: undefined, type: undefined }))
        localStorage.removeItem("userInfo")
        console.log(dis)
        navigate("/")
    }
    return <>
        <header>

            <div className="header-area header-transparrent">
                <div className="headder-top header-sticky">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-2">
                                <div className="logo">
                                    <Link to="/"><img src="assets/img/logo/logo.png" alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-9">
                                <div className="menu-wrapper">

                                    <div className="main-menu">
                                        <nav className="d-none d-lg-block">
                                            <ul id="navigation">

                                                {user.isLogin ?
                                                    <>

                                                        {user.type == "Admin" ? <>

                                                            <li><Link to="/">Home </Link></li>
                                                            <li><Link to="">Hr</Link>
                                                                <ul className="submenu">
                                                                    <li><Link to="addHr">Add Hr</Link></li>
                                                                    <li><Link to="hrlist">View Hr</Link></li>

                                                                </ul>
                                                            </li>
                                                            <li><Link to="">Category</Link>
                                                                <ul className="submenu">
                                                                    <li><Link to="addCategory">Add Ctaegory</Link></li>
                                                                    <li><Link to="categoryList">Ctaegory List</Link></li>

                                                                </ul>
                                                            </li>
                                                            <li><Link to="jobdetails">Jobs</Link></li>
                                                            <li><Link to="candidatedetails">Candidates</Link></li>


                                                        </> : <></>}
                                                        {user.type == "Hr" ? <>

                                                            <li><Link to="">Jobs</Link>
                                                                <ul className="submenu">
                                                                    <li><Link to="addJob">Add Job</Link></li>
                                                                    <li><Link to="viewJob">Job List</Link></li>

                                                                </ul>
                                                            </li>
                                                            <li><Link to="">Candidates</Link>
                                                                <ul className="submenu">
                                                                    <li><Link to="Applied-jobs">Applied Jobs</Link></li>
                                                                    {/* <li><Link to="viewJob">Job List</Link></li> */}

                                                                </ul>
                                                            </li>

                                                        </> : <></>}

                                                        {user.type == "Candidate" ? <>

                                                            <li><Link to="/">Home </Link></li>
                                                            <li><Link to="jobList">Find a Jobs </Link></li>
                                                            <li><Link to="my-jobs">My Jobs</Link></li>
                                                            <li><Link to="about">About</Link></li>

                                                            <li><Link to="contact">Contact</Link></li>
                                                        </> : <></>}

                                                    </> : <> <li><Link to="/">Home </Link></li>
                                                        <li><Link to="jobList">Find a Jobs </Link></li>
                                                        <li><Link to="about">About</Link></li>

                                                        <li><Link to="contact">Contact</Link></li></>
                                                }
                                            </ul>
                                        </nav>
                                    </div>

                                    {user.isLogin ? <>
                                        <div className="header-btn d-none f-right d-lg-block">
                                            <b onClick={logout} className="btn head-btn1">Logout</b>
                                        </div>
                                    </> : <><div className="header-btn d-none f-right d-lg-block">
                                        <Link to="register" className="btn head-btn1">Register</Link>
                                        <Link to="login" className="btn head-btn2">Login</Link>
                                    </div></>}
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header >
    </>
}