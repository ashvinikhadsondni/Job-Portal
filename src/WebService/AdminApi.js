import axios from 'axios'

class AdminApi {

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

const SERVER = 'http://apps.codebetter.in:8082/cbjobportal/api'

export const url = {
    ADDHR: `${SERVER}/user/hrsave`,
    HRLIST: `${SERVER}/user/lists`,
    HR_UPDATE: `${SERVER}/user/update/`,
    HR_DELETE: `${SERVER}/user/delete/`,

    CATEGORY_SAVE: `${SERVER}/category/save`,
    CATEGORY_LIST: `${SERVER}/category/list`,
    CATEGORY_UPDATE: `${SERVER}/category/update/`,

    JOB_LIST: `http://apps.codebetter.in:8082/cbjobportal/jobs/list`,
    CANDIDATE_LIST: `http://apps.codebetter.in:8082/cbjobportal/candidate/lists`
}

export default new AdminApi