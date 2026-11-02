import http from 'k6/http';
import { sleep } from 'k6';
import {generateHtmlReport} from '../../utils/report.js'


import { URLs } from '../../config/urls.js'

export const options = {
    vus: 10,
    duration: '30s',

    thresholds:{
        http_req_duration: ['p(95)<500'],
        http_req_failed: ['rate<0.01']
    }
};

export default function(){
    http.get(`${URLs.BASE_URL}/users`)
    sleep(1)
}

export function handlesummary(data){
    return generateHtmlReport(data)
}

