/* eslint-disable */

import { defineStore } from 'pinia'
import axios from 'axios'

export const projectStore = defineStore ('project', {
    state: () => {
        return {
            team_name: '',
            desc_project: '',
            url_sala: '',
            url_video: ''
        }
    },
    actions: {
        async ProjectInfo (team_name, desc_project, url_sala, url_video) {
            const url = 'https://expoingenieria.com/rest_api_expo/tablas/proyecto/'
            const config = this.config

            const params = new URLSearchParams()
            params.append('nombre_equipo', team_name)
            params.append('nombre_proyecto', team_name)
            params.append('descripcion', desc_project)
            params.append('url_sala', url_sala)
            params.append('url_video', url_video)
            params.append('categoria_id', 1)
            params.append('asesor_id', 1)
            params.append('lineaInvestigacion_id', 1)
            params.append('tipoProyecto_id', 1)
            params.append('nivel_id', 1)
            params.append('asignatura_id', 1)

            try {
                const response = await axios.post(url, params, config)
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        }
    }
})
