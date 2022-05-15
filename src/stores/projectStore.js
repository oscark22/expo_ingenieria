/* eslint-disable */

import { defineStore } from 'pinia'
import axios from 'axios'

export const projectStore = defineStore ('project', {
    state: () => {
        return {
            config: {
                headers: {
                  'content-type': 'application/x-www-form-urlencoded'
                }
            },
            
            url_sala: '',
            url_video: '',

            modalState: false
        }
    },
    actions: {
        async AddLinks () {
            const url = 'https://expoingenieria.com/rest_api_expo/tablas/proyecto/'
            const config = this.config

            const email = localStorage.getItem('email')

            const params = new URLSearchParams()
            params.append('correo', email)
            params.append('url_sala', this.url_sala)
            params.append('url_video', this.url_video)

            try {
                const response = await axios.put(url, params, config)
                if (response.data.error === false) {
                    this.modalState = true
                }
            } catch (error) {
                this.modalState = false
                console.log(error)
            }
        }
    }
})
