/* eslint-disable */

import { defineStore } from 'pinia'
import axios from 'axios'

export const userStore = defineStore ('axios', {
    state: () => {
        return {
            config: {
                headers: {
                  'content-type': 'application/x-www-form-urlencoded'
                }
            },

            logged_in: false,
            type: '',

            email: '',
            password: ''
        }
    },
    actions: {
        async LoginAuth () {
            const url = 'https://expoingenieria.com/rest_api_expo/tablas/login.php/'
            const config = this.config

            const params = new URLSearchParams()
            params.append('email', this.email)
            params.append('password', this.password)

            try {
                const response = await axios.post(url, params, config)

                if (!response.data.error) {
                  this.logged_in = true
                  this.type = response.data.judgeID.charAt(0)

                  localStorage.setItem('logged_in', this.logged_in)
                  localStorage.setItem('type', this.type)

                  localStorage.setItem('token', response.data.hash)
                  localStorage.setItem('id', response.data.judgeID)
                  localStorage.setItem('exp', response.data.expiration)
                }
            } catch (error) {
                console.log(error)
            }
        }
    },
    getters: {
        logged_in: () => localStorage.getItem('logged_in'),
        type: () => localStorage.getItem('type')
    }
});
