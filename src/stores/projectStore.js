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
            
            project_name: '',
            team_name: '',
            desc_project: '',
            url_sala: '',
            url_video: ''
        }
    },
    actions: {
        async ProjectInfo () {
            const url = 'https://expoingenieria.com/rest_api_expo/tablas/proyecto/'
            const config = this.config

            const params = new URLSearchParams()
            params.append('nombre_equipo', this.team_name)
            params.append('nombre_proyecto', this.project_name)
            params.append('descripcion', this.desc_project)
            params.append('url_sala', this.url_sala)
            params.append('url_video', this.url_video)
            params.append('categoria_id', 1)
            params.append('asesor_id', 1)
            params.append('lineaInvestigacion_id', 1)
            params.append('tipoProyecto_id', 1)
            params.append('nivel_id', 1)
            params.append('asignatura_id', 1)

            try {
                const response = await axios.put(url, params, config)
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        }
    }
})
