/* eslint-disable */

import { defineStore } from 'pinia'
import axios from 'axios'

export const loginStore = defineStore ('axios', {
    state: () => {
        return {
            config: {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                }
            },
            
            //logged state
            logged_in: false,

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
                  localStorage.setItem('auth', response.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
});
