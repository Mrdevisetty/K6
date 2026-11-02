import {check} from 'k6'

export function validate(response){
     return check(response,{
        'Status is 200': (r)=> r.status===200,
     })
}