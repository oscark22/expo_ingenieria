/* eslint-disable */

import { defineStore } from 'pinia'
import axios from 'axios'

export const cardStore = defineStore ('card', {
    state: () => {
        return {
            cards: []
        }
    },
    actions: {
        async fetchData () {
            const url = 'https://expoingenieria.com/rest_api_expo/tablas/proyecto/'

            try {
                const response = await axios.get(url)
                this.cards = response.data
            } catch (error) {
                console.error(error)
            }
        }
    }
})