import axios from 'axios'

class HrApi {

    PostApiCall(url, data, token) {
        return axios.post(url, data, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
    }

    GetApiCall(url, token) {
        return axios.get(url, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
    }

    PutApiCall(url, data, token) {
        return axios.put(url, data, {
            headers: {
                Authorization: 'Bearer ' + token,
                "content-type": "application/json"
            }
        })
    }

    PutApi(url, token) {
        return axios.put(url, {
            headers: {
                Authorization: 'Bearer ' + token,
                "content-type": "application/json"
            }
        })
    }

    DeleteApiCall(url, token) {
        return axios.delete(url, {
            headers: {
                Authorization: 'Bearer ' + token,
            }
        })
    }

    GetApi(url) {
        return axios.get(url)
    }
}

const SERVER = 'http://apps.codebetter.in:8082/cbjobportal'

export const hrurl = {

    JOB_SAVE: `${SERVER}/detail/job/save`,
    ACTIVE: `${SERVER}/detail/job/active/`,
    DEACTIVE: `${SERVER}/detail/job/deactive/`,
    UPDATE_JOB: `${SERVER}/detail/job/update/`,

    CATEGORY: `${SERVER}/categories/list`,

    APPLIED_JOB:`${SERVER}/jobs/applied/list`

}

export default new HrApi