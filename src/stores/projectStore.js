/* eslint-disable */

import { defineStore } from 'pinia'
import axios from 'axios'

export const projectStore = defineStore ('project', {
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
            
            url_sala: '',
            url_video: ''
        }
    },
    actions: {
        async AddLinks () {
            const url = 'https://expoingenieria.com/rest_api_expo/tablas/proyecto/'
            const config = this.config

            console.log(email, this.url_sala, this.url_video)

            const params = new URLSearchParams()
            // params.append('nombre_equipo', email)
            params.append('url_sala', this.url_sala)
            params.append('url_video', this.url_video)

            try {
                const response = await axios.post(url, params, config)
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        }
    }
})
