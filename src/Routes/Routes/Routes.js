import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Home/Home";
import Jobs from "../../Jobs/Jobs";
import Login from "../../Login/Login";
import Register from "../../Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddJobs from "../../AddJobs/AddJobs";
import SingleJob from "../../Jobs/SingleJob";
import Organization from "../../Category/Organization";
import OrganizationCategory from "../../Category/OrganizationCategory";
import Government from "../../Category/Government";
import ITSupport from "../../Category/ITSupport";
import SemiGovernment from "../../Category/SemiGovernment";
import NGO from "../../Category/NGO";
import PrivateFirm from "../../Category/PrivateFirm";
import Agencies from "../../Category/Agencies";
import JobAd from "../../JobAd/JobAd";
import Apply from "../../Apply/Apply";
import Applied from "../../Applied/Applied";
import TotalApplicant from "../../TotalApplicant/TotalApplicant";
import SingleApplicant from "../../TotalApplicant/SingleApplicant";
import UserProfile from "../../UserProfile/UserProfile";
import FinalApply from "../../Apply/FinalApply";
import JobCategoryApply from "../../JobAd/JobCategoryApply";



export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://b-job-portal-server-side-ah-araf.vercel.app/joblimit'),
            },
            {
                path: '/jobs',
                element: <Jobs></Jobs>,
                loader: () => fetch('https://b-job-portal-server-side-ah-araf.vercel.app/jobs'),
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/addjobs',
                element: <PrivateRoute><AddJobs></AddJobs></PrivateRoute>,
            },
            {
                path: '/jobs/:id',
                element: <PrivateRoute><SingleJob></SingleJob></PrivateRoute>,
                loader: async ({params}) =>  fetch(`https://b-job-portal-server-side-ah-araf.vercel.app/jobs/${params.id}`)
            },
            {
                path: '/applicant/:id',
                element: <SingleApplicant></SingleApplicant>,
                loader: async ({params}) =>  fetch(`https://b-job-portal-server-side-ah-araf.vercel.app/applicant/${params.id}`)
            },
            
            {
                path: '/organization',
                element: <Organization></Organization>,
            },

            {
                path: '/jobCategoryApply',
                element: <JobCategoryApply></JobCategoryApply>,
            },
            
            {
                path: '/government',
                element: <Government></Government>,
            },
            {
                path: '/itSupport',
                element: <ITSupport></ITSupport>,
            },
            {
                path: '/semiGov',
                element: <SemiGovernment></SemiGovernment>,
            },
            {
                path: '/ngo',
                element: <NGO></NGO>,
            },
            {
                path: '/privateFirm',
                element: <PrivateFirm></PrivateFirm>,
            },
            {
                path: '/agencies',
                element: <Agencies></Agencies>,
            },
            {
                path: '/jobAd',
                element: <JobAd></JobAd>,
            },
            {
                path: '/userProfile',
                element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>,
            },
            {
                path: '/applied',
                element: <Applied></Applied>,
            },
            {
                path: '/apply/:id',
                element: <Apply></Apply>,
                loader: async ({params}) =>  fetch(`https://b-job-portal-server-side-ah-araf.vercel.app/apply/${params.id}`)
            },
            {
                path: '/apply/:id',
                element: <FinalApply></FinalApply>,
                loader: async ({params}) =>  fetch(`https://b-job-portal-server-side-ah-araf.vercel.app/apply/${params.id}`)
            },



            {
                path: '/totalApplicant',
                element: <PrivateRoute><TotalApplicant></TotalApplicant></PrivateRoute>,
            },
        ]
    }
])