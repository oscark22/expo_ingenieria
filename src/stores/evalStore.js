/* eslint-disable */

import { defineStore } from 'pinia'
import axios from 'axios'

export const cardStore = defineStore ('evaluation', {
    state: () => {
        return {
            config: {
                headers: {
                  'content-type': 'application/x-www-form-urlencoded'
                }
            }
        }
    },
    actions: {
        async postAcademic () {
            const url = 'https://expoingenieria.com/rest_api_expo/tablas/rubrica_proyectoacademico.php/'
            const config = this.config

            const params = new URLSearchParams()
            params.append('proyecto_id', )
            params.append('juez_id', )
            params.append('calificacion', )
            params.append('observacion', )
            params.append('calificacion_contextoGeneral', )
            params.append('calificacion_explicacionConcepto', )
            params.append('calificacion_presentacionFisica', )
            params.append('calificacion_explicacionAudiovisual', )
            params.append('calificacion_ClaridadFluidez', )
            params.append('calificacion_participacion', )
            params.append('calificacion_tiempoExposicion', )
            params.append('calificacion_desarrolloSistPropios', )
            params.append('calificacion_originalidad', )
            params.append('calificacion_funcionalidad', )
            params.append('calificacion_relacionFisicoTeorica', )
            params.append('calificacion_tiempoRespuesta', )
            params.append('calificacion_conceptoComunicacionVisualMensaje', )
            params.append('calificacion_diseno', )
            params.append('calificacion_organizacionElementos', )
            params.append('calificacion_disenoInterfaz', )

            try {
                const response = await axios.post(url, params, config)
            } catch (error) {
                console.log(error)
            }
        },
        async postAcademic () {
            const url = 'https://expoingenieria.com/rest_api_expo/tablas/rubrica_proyectoacademico.php/'
            const config = this.config

            const params = new URLSearchParams()
            params.append('proyecto_id', )
            params.append('juez_id', )
            params.append('calificacion', )
            params.append('observacion', )
            params.append('calificacion_contextoGeneral', )
            params.append('calificacion_explicacionConcepto', )
            params.append('calificacion_presentacionFisica', )
            params.append('calificacion_explicacionAudiovisual', )
            params.append('calificacion_ClaridadFluidez', )
            params.append('calificacion_participacion', )
            params.append('calificacion_tiempoExposicion', )
            params.append('calificacion_desarrolloSistPropios', )

            try {
                const response = await axios.post(url, params, config)
            } catch (error) {
                console.log(error)
            }
        }
    }
})