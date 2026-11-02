import {htmlReport} from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js'

export function generateHtmlReport(data){
    const timestamp = new Date()
           .toISOString()
           .replace(/:/g,'-');
    return {
        [`reports/report-${timestamp}.html`]: htmlReport(data)

    }
}