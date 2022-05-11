/* eslint-disable */

import { defineStore } from 'pinia'
import axios from 'axios'

export const evalStore = defineStore ('evaluation', {
    state: () => {
        return {
            config: {
                headers: {
                  'content-type': 'application/x-www-form-urlencoded'
                }
            },

            proyecto_id: '',
            juez_id: localStorage.getItem('id'),

            grade: {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
                10: 0,
                11: 0,
                12: 0,
                13: 0,
                14: 0,
                15: 0,
                16: 0,
                17: 0
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
            params.append('calificacion', grade[1])
            params.append('observacion', )
            params.append('calificacion_contextoGeneral', grade[2])
            params.append('calificacion_explicacionConcepto', grade[3])
            params.append('calificacion_presentacionFisica', grade[4])
            params.append('calificacion_presentacionAudiovisual', grade[5])
            params.append('calificacion_ClaridadFluidez', grade[6])
            params.append('calificacion_participacion', grade[7])
            params.append('calificacion_tiempoExposicion', grade[8])
            params.append('calificacion_desarrolloSistPropios', grade[9])
            params.append('calificacion_originalidad', grade[10])
            params.append('calificacion_funcionalidad', grade[11])
            params.append('calificacion_relacionFisicoTeorica', grade[12])
            params.append('calificacion_tiempoRespuesta', grade[13])
            params.append('calificacion_conceptoComunicacionVisualMensaje', grade[14])
            params.append('calificacion_diseno', grade[15])
            params.append('calificacion_organizacionElementos', grade[16])
            params.append('calificacion_disenoInterfaz', grade[17])

            try {
                const response = await axios.post(url, params, config)
            } catch (error) {
                console.log(error)
            }
        },
        async postProd1 () {
            const url = 'https://expoingenieria.com/rest_api_expo/tablas/rubrica_c1_innovacionProcesoProducto.php/'
            const config = this.config

            const params = new URLSearchParams()
            params.append('proyecto_id', )
            params.append('juez_id', )
            params.append('calificacion', grade[1])
            params.append('observacion', )
            params.append('calificacion_contextoGeneral', grade[2])
            params.append('calificacion_explicacionConcepto', grade[3])
            params.append('calificacion_presentacionAudiovisual', grade[4])
            params.append('calificacion_ClaridadFluidez', grade[5])
            params.append('calificacion_participacion', grade[6])
            params.append('calificacion_tiempoExposicion', grade[7])
            params.append('calificacion_relacionFisicoTeorica', grade[8])
            params.append('calificacion_calidadNarrativaDistracciones', grade[9])
            params.append('calificacion_calidadVideo', grade[10])
            params.append('calificacion_originalidad', grade[11])
            params.append('calificacion_funcionalidad', grade[12])

            try {
                const response = await axios.post(url, params, config)
            } catch (error) {
                console.log(error)
            }
        }
    },
    async postIndustria () {
        const url = 'https://expoingenieria.com/rest_api_expo/tablas/rubrica_aplicacionIndustria.php/'
        const config = this.config

        const params = new URLSearchParams()
        params.append('proyecto_id', )
        params.append('juez_id', )
        params.append('calificacion', grade[1])
        params.append('observacion', )
        params.append('calificacion_contextoGeneral', grade[2])
        params.append('calificacion_explicacionConcepto', grade[3])
        params.append('calificacion_presentacionAudiovisual', grade[4])
        params.append('calificacion_presentacionFisica', grade[5])
        params.append('calificacion_ClaridadFluidez', grade[6])
        params.append('calificacion_participacion', grade[7])
        params.append('calificacion_tiempoExposicion', grade[8])
        params.append('calificacion_calidadNarrativaDistracciones', grade[9])
        params.append('calificacion_calidadVideo', grade[10])
        params.append('calificacion_originalidad', grade[11])
        params.append('calificacion_funcionalidad', grade[12])
        params.append('calificacion_tiempoRespuesta', grade[13])
        params.append('calificacion_desarrolloSistPropios', grade[14])

        try {
            const response = await axios.post(url, params, config)
        } catch (error) {
            console.log(error)
        }
    },
    async postSWM1 () {
        const url = 'https://expoingenieria.com/rest_api_expo/tablas/rubrica_c1_innovacionProceso_SWMultimedia.php/'
        const config = this.config

        const params = new URLSearchParams()
        params.append('proyecto_id', )
        params.append('juez_id', )
        params.append('calificacion', grade[1])
        params.append('observacion', )
        params.append('calificacion_contextoGeneral', grade[2])
        params.append('calificacion_explicacionConcepto', grade[3])
        params.append('calificacion_presentacionAudiovisual', grade[4])
        params.append('calificacion_presentacionFisica', grade[5])
        params.append('calificacion_ClaridadFluidez', grade[6])
        params.append('calificacion_participacion', grade[7])
        params.append('calificacion_tiempoExposicion', grade[8])
        params.append('calificacion_calidadNarrativaDistracciones', grade[9])
        params.append('calificacion_calidadVideo', grade[10])
        params.append('calificacion_funcionalidad', grade[11])
        params.append('calificacion_tiempoRespuesta', grade[12])
        params.append('calificacion_relacionFisicoTeorica', grade[13])
        params.append('calificacion_conceptoComunicacionVisualMensaje', grade[14])
        params.append('calificacion_disenoInterfaz', grade[15])

        try {
            const response = await axios.post(url, params, config)
        } catch (error) {
            console.log(error)
        }
    },
    async postSWM2 () {
        const url = 'https://expoingenieria.com/rest_api_expo/tablas/rubrica_c2_innovacionProceso_SWMultimedia.php/'
        const config = this.config

        const params = new URLSearchParams()
        params.append('proyecto_id', )
        params.append('juez_id', )
        params.append('calificacion', grade[1])
        params.append('observacion', )
        params.append('calificacion_contextoGeneral', grade[2])
        params.append('calificacion_explicacionConcepto', grade[3])
        params.append('calificacion_presentacionFisica', grade[4])
        params.append('calificacion_presentacionAudiovisual', grade[5])
        params.append('calificacion_ClaridadFluidez', grade[6])
        params.append('calificacion_participacion', grade[7])
        params.append('calificacion_tiempoExposicion', grade[8])
        params.append('calificacion_desarrolloSistPropios', grade[9])
        params.append('calificacionOriginalidad', grade[10])
        params.append('calificacion_funcionalidad', grade[11])
        params.append('calificacion_conceptoComunicacionVisualMensaje', grade[12])
        params.append('calificacion_diseno', grade[13])
        params.append('calificacion_organizacionElementos', grade[14])
        params.append('calificacion_disenoInterfaz', grade[15])
        params.append('calificacion_calidadNarrativaDistracciones', grade[16])
        params.append('calificacion_calidadVideo', grade[17])

        try {
            const response = await axios.post(url, params, config)
        } catch (error) {
            console.log(error)
        }
    },
    async postProd2 () {
        const url = 'https://expoingenieria.com/rest_api_expo/tablas/rubrica_c2_innovacionProcesoProducto.php/'
        const config = this.config

        const params = new URLSearchParams()
        params.append('proyecto_id', )
        params.append('juez_id', )
        params.append('calificacion', grade[1])
        params.append('observacion', )
        params.append('calificacion_contextoGeneral', grade[2])
        params.append('calificacion_explicacionConcepto', grade[3])
        params.append('calificacion_presentacionAudiovisual', grade[4])
        params.append('calificacion_presentacionFisica', grade[5])
        params.append('calificacion_ClaridadFluidez', grade[6])
        params.append('calificacion_participacion', grade[7])
        params.append('calificacion_tiempoExposicion', grade[8])
        params.append('calificacion_calidadNarrativaDistracciones', grade[9])
        params.append('calificacion_calidadVideo', grade[10])
        params.append('calificacion_originalidad', grade[11])
        params.append('calificacion_funcionalidad', grade[12])
        params.append('calificacion_tiempoRespuesta', grade[13])
        params.append('calificacion_desarrolloSistPropios', grade[14])

        try {
            const response = await axios.post(url, params, config)
        } catch (error) {
            console.log(error)
        }
    }
}
)