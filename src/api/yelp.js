import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer UK-Qb1VXvk342Ka_rhW5QQ-21YY3qzzX3Gg2jsEuotTinHCCI4k8lNl_F1AkTYts_1SrTARB-4XQ1fv0sVuVJs4P1cMawsYm1U_smwyjou5j89NRt1rwqtplBXcnXnYx'
    }
});