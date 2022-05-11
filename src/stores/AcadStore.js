import { defineStore } from "pinia"
import axios from "axios"

export const AcadStore = defineStore('axios', {
    state: () => {
        return {
            config: {
                headers: {
                  'content-type': 'application/x-www-form-urlencoded',
                  'x_hash': localStorage.getItem('token'),
                  'x_uid': localStorage.getItem('id'),
                  'x_timestamp': localStorage.getItem('exp')
                }
            },
            
            Grades: []
        }
    },
    actions: {
        async AddLinks () {
            const url = 'https://expoingenieria.com/rest_api_expo/tablas/rubrica_proyectoacademico.php/'
            const config = this.config

            const email = localStorage.getItem('email')

            const params = new URLSearchParams()
            params.append('correo', email)
            params.append('url_sala', this.url_sala)
            params.append('url_video', this.url_video)

            console.log(email, this.url_sala, this.url_video)

            try {
                const response = await axios.put(url, params, config)
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        }
    }
})