import './App.css';
import About from './components/About';
import ApplyProcess from './components/ApplyProcess';
import Category from './components/Category';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Jobs from './components/Jobs';
import Login from './components/Login';
import Nav from './components/Nav';
import { Routes, Route } from "react-router-dom"
import Register from './components/Register';
import WrongUrl from './components/WrongUrl';
import AddHr from './components/Admin/AddHr';
import HrList from './components/Admin/HrList';
import AddCategory from './components/Admin/Category/AddCategory';
import CategoryList from './components/Admin/Category/CategoryList';
import UpdateHr from './components/Admin/UpdateHr';
import UpdateCategory from './components/Admin/Category/UpdateCategory';
import JoblistForAdmin from './components/Admin/JoblistForAdmin';
import CandidateList from './components/Admin/CandidateList';
import AddJob from './components/Hr/AddJob';
import JobList from './components/Hr/JobListForHr';
import UpdateJob from './components/Hr/UpdateJob';
import JobListForHr from './components/Hr/JobListForHr';
import AppliedJobs from './components/Hr/AppliedJobs';
import ApplyJob from './components/Candidate/ApplyJob';
import JobByCategory from './components/JobByCategory';
import MyJobs from './components/Candidate/MyJobs';
function App() {
  return <>
    <Nav />

    <Routes>
      <Route path='/' element={<Home />} ></Route>
      <Route path='/about' element={<About />} ></Route>
      <Route path='/contact' element={<Contact />} ></Route>
      <Route path='/jobList' element={<Jobs />} ></Route>
      <Route path='/category' element={<Category />} ></Route>
      <Route path='/applyProcess' element={<ApplyProcess />} ></Route>
      <Route path='/login' element={<Login />} ></Route>
      <Route path='/register' element={<Register />} ></Route>

      <Route path='/addHr' element={<AddHr />} ></Route>
      <Route path='/hrlist' element={<HrList />} ></Route>
      <Route path='/updateHr' element={<UpdateHr />} ></Route>


      <Route path='/addcategory' element={<AddCategory />} ></Route>
      <Route path='/categoryList' element={<CategoryList />} ></Route>
      <Route path='/categoryUpdate' element={<UpdateCategory />} ></Route>


      <Route path='/jobdetails' element={<JoblistForAdmin />} ></Route>
      <Route path='/candidatedetails' element={<CandidateList />} ></Route>

      <Route path='/addJob' element={<AddJob />} ></Route>
      <Route path='/viewJob' element={<JobListForHr />} ></Route>
      <Route path='/jobUpdate' element={<UpdateJob />} ></Route>

      <Route path='/Applied-jobs' element={<AppliedJobs />} ></Route>
      <Route path='/applying-job' element={<ApplyJob />} ></Route>

      <Route path='/jobs/:categoryId' element={<JobByCategory />} ></Route>

      <Route path='/my-jobs' element={<MyJobs />} ></Route>













      <Route path='*' element={<WrongUrl />} ></Route>

    </Routes>

    <Footer />
  </>


}

export default App;
