import axios from 'axios'

export const apiClient = axios.create (
    {
        // baseURL: 'http://localhost:8080'
        baseURL: 'http://restapi-app-env-1.eba-xwx3uemc.ap-northeast-2.elasticbeanstalk.com'
    }
)
