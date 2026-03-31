import {
    newPostRequest, newPostSuccess, newPostFail,
    allJobsRequest, allJobsSuccess, allJobsFail,
    jobDetailsRequest, jobDetailsSuccess, jobDetailsFail,
    jobSaveRequest, jobSaveSuccess, jobSaveFail,
    getSavedJobsRequest, getSavedJobsSuccess, getSavedJobsFail
} from '../slices/JobSlice'

import {toast} from 'react-toastify'
import {me} from '../actions/UserActions'
import axios from 'axios'

// ✅ BASE URL
const BASE_URL = "https://job-orbit-mern.onrender.com/api/v1"

// ✅ CREATE JOB
export const createJobPost = (jobData) => async (dispatch) => {
    try{
        dispatch(newPostRequest())

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            } 
        }

        await axios.post(`${BASE_URL}/create/job`, jobData, config)

        dispatch(newPostSuccess())
        toast.success("Job posted successfully !")

    }catch(err){
        dispatch(newPostFail(err.response.data.message))
    }
}

// ✅ GET ALL JOBS
export const getAllJobs = () => async (dispatch) => {
    try{
        dispatch(allJobsRequest())

        const {data} = await axios.get(`${BASE_URL}/jobs`)

        dispatch(allJobsSuccess(data.Jobs))

    }catch(err){
        dispatch(allJobsFail(err.response.data.message))   
    }
}

// ✅ GET SINGLE JOB
export const getSingleJob = (id) => async (dispatch) => {
    try{
        dispatch(jobDetailsRequest())

        const {data} = await axios.get(`${BASE_URL}/job/${id}`)

        dispatch(jobDetailsSuccess(data.job))

    }catch(err){
        dispatch(jobDetailsFail(err.response.data.message))   
    }
}

// ✅ SAVE JOB
export const saveJob = (id) => async (dispatch) => {
    try{
        dispatch(jobSaveRequest())

        const config = {
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            }
        }

        const {data} = await axios.get(`${BASE_URL}/saveJob/${id}`, config)

        dispatch(me())
        dispatch(jobSaveSuccess())
        toast.success(data.message)

    }catch(err){
        dispatch(jobSaveFail(err.response.data.message))
    }
} 

// ✅ GET SAVED JOBS
export const getSavedJobs = () => async (dispatch) => {
    try{
        dispatch(getSavedJobsRequest())

        const config = {
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            }
        }

        const {data} = await axios.get(`${BASE_URL}/getSavedJobs`, config)

        dispatch(getSavedJobsSuccess(data))

    }catch(err){
        dispatch(getSavedJobsFail(err.response.data.message))
    }
}