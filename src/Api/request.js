import axios from 'axios'

export default function(query, params) {
    return new Promise((resolve, reject) => {
        axios
            .post('http://localhost:4000/graphql', { query, variables: params })
            .then(response => resolve(response.data))
            .catch(error => reject(error))
    })
}
