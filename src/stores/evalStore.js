/* eslint-disable */

import { defineStore } from 'pinia'
import axios from 'axios'

export const evalStore = defineStore ('evaluation', {
    state: () => {
        return {
            config: {
                headers: {
                  'content-type': 'application/x-www-form-urlencoded',
                  'x_hash': localStorage.getItem('token'),
                  'x_timestamp': localStorage.getItem('exp'),
                  'x_uid': localStorage.getItem('id')
                }
            },

            proyecto_id: '',
            EstadoModal: false,
            juez_id: localStorage.getItem('id'),
            desc: '',
            grade: {
                '1': '0',
                '2': '0',
                '3': '0',
                '4': '0',
                '5': '0',
                '6': '0',
                '7': '0',
                '8': '0',
                '9': '0',
                '10': '0',
                '11': '0',
                '12': '0',
                '13': '0',
                '14': '0',
                '15': '0',
                '16': '0',
                '17': '0'
              }
        }
    },
    actions: {
        async postAcademic () {
            const url = 'https://expoingenieria.com/rest_api_expo/tablas/rubrica_proyectoacademico.php/'
            const config = this.config

            const params = new URLSearchParams()
            params.append('proyecto_id', this.proyecto_id)
            params.append('juez_id', this.juez_id.slice(1))
            params.append('calificacion', this.grade[1])
            params.append('observacion', this.desc)
            params.append('calificacion_contextoGeneral', this.grade[2])
            params.append('calificacion_explicacionConcepto', this.grade[3])
            params.append('calificacion_presentacionFisica', this.grade[4])
            params.append('calificacion_presentacionAudiovisual', this.grade[5])
            params.append('calificacion_ClaridadFluidez', this.grade[6])
            params.append('calificacion_participacion', this.grade[7])
            params.append('calificacion_tiempoExposicion', this.grade[8])
            params.append('calificacion_desarrolloSistPropios', this.grade[9])
            params.append('calificacion_originalidad', this.grade[10])
            params.append('calificacion_funcionalidad', this.grade[11])
            params.append('calificacion_relacionFisicoTeorica', this.grade[12])
            params.append('calificacion_tiempoRespuesta', this.grade[13])
            params.append('calificacion_conceptoComunicacionVisualMensaje', this.grade[14])
            params.append('calificacion_diseno', this.grade[15])
            params.append('calificacion_organizacionElementos', this.grade[16])
            params.append('calificacion_disenoInterfaz', this.grade[17])

            try {
                const response = await axios.post(url, params, config)
                if (response.data.error === false) {
                    this.EstadoModal = true
                }
            } catch (error) {
                console.log(error)
            }
        },
        async postProd1 () {
            const url = 'https://expoingenieria.com/rest_api_expo/tablas/rubrica_c1_innovacionProcesoProducto.php/'
            const config = this.config

            const params = new URLSearchParams()
            params.append('proyecto_id', this.proyecto_id)
            params.append('juez_id', this.juez_id.slice(1))
            params.append('calificacion', this.grade[1])
            params.append('observacion', this.desc)
            params.append('calificacion_contextoGeneral', this.grade[2])
            params.append('calificacion_explicacionConcepto', this.grade[3])
            params.append('calificacion_presentacionAudiovisual', this.grade[4])
            params.append('calificacion_claridadFluidez', this.grade[5])
            params.append('calificacion_participacion', this.grade[6])
            params.append('calificacion_tiempoExposicion', this.grade[7])
            params.append('calificacion_relacionFisicoTeorica', this.grade[8])
            params.append('calificacion_calidadNarrativaDistracciones', this.grade[9])
            params.append('calificacion_calidadVideo', this.grade[10])
            params.append('calificacion_originalidad', this.grade[11])
            params.append('calificacion_funcionalidad', this.grade[12])

            try {
                const response = await axios.post(url, params, config)
                if (response.data.error === false) {
                    this.EstadoModal = true
                }
            } catch (error) {
                console.log(error)
            }
        },
    async postIndustria () {
        const url = 'https://expoingenieria.com/rest_api_expo/tablas/rubrica_aplicacionIndustria.php/'
        const config = this.config

        const params = new URLSearchParams()
        params.append('proyecto_id', this.proyecto_id)
        params.append('juez_id', this.juez_id.slice(1))
        params.append('calificacion', this.grade[1])
        params.append('observacion', this.desc)
        params.append('calificacion_contextoGeneral', this.grade[2])
        params.append('calificacion_explicacionConcepto', this.grade[3])
        params.append('calificacion_presentacionAudiovisual', this.grade[4])
        params.append('calificacion_presentacionFisica', this.grade[5])
        params.append('calificacion_claridadFluidez', this.grade[6])
        params.append('calificacion_participacion', this.grade[7])
        params.append('calificacion_tiempoExposicion', this.grade[8])
        params.append('calificacion_calidadNarrativaDistracciones', this.grade[9])
        params.append('calificacion_calidadVideo', this.grade[10])
        params.append('calificacion_originalidad', this.grade[11])
        params.append('calificacion_funcionalidad', this.grade[12])
        params.append('calificacion_tiempoRespuesta', this.grade[13])
        params.append('calificacion_desarrolloSistPropios', this.grade[14])

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
        params.append('proyecto_id', this.proyecto_id)
        params.append('juez_id', this.juez_id.slice(1))
        params.append('calificacion', this.grade[1])
        params.append('observacion', this.desc)
        params.append('calificacion_contextoGeneral', this.grade[2])
        params.append('calificacion_explicacionConcepto', this.grade[3])
        params.append('calificacion_presentacionAudiovisual', this.grade[4])
        params.append('calificacion_presentacionFisica', this.grade[5])
        params.append('calificacion_claridadFluidez', this.grade[6])
        params.append('calificacion_participacion', this.grade[7])
        params.append('calificacion_tiempoExposicion', this.grade[8])
        params.append('calificacion_calidadNarrativaDistracciones', this.grade[9])
        params.append('calificacion_calidadVideo', this.grade[10])
        params.append('calificacion_funcionalidad', this.grade[11])
        params.append('calificacion_tiempoRespuesta', this.grade[12])
        params.append('calificacion_relacionFisicoTeorica', this.grade[13])
        params.append('calificacion_conceptoComunicacionVisualMensaje', this.grade[14])
        params.append('calificacion_disenoInterfaz', this.grade[15])

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
        params.append('proyecto_id', this.proyecto_id)
        params.append('juez_id', this.juez_id.slice(1))
        params.append('calificacion', this.grade[1])
        params.append('observacion', this.desc)
        params.append('calificacion_contextoGeneral', this.grade[2])
        params.append('calificacion_explicacionConcepto', this.grade[3])
        params.append('calificacion_presentacionFisica', this.grade[4])
        params.append('calificacion_presentacionAudiovisual', this.grade[5])
        params.append('calificacion_claridadFluidez', this.grade[6])
        params.append('calificacion_participacion', this.grade[7])
        params.append('calificacion_tiempoExposicion', this.grade[8])
        params.append('calificacion_desarrolloSistPropios', this.grade[9])
        params.append('calificacionOriginalidad', this.grade[10])
        params.append('calificacion_funcionalidad', this.grade[11])
        params.append('calificacion_conceptoComunicacionVisualMensaje', this.grade[12])
        params.append('calificacion_diseno', this.grade[13])
        params.append('calificacion_organizacionElementos', this.grade[14])
        params.append('calificacion_disenoInterfaz', this.grade[15])
        params.append('calificacion_calidadNarrativaDistracciones', this.grade[16])
        params.append('calificacion_calidadVideo', this.grade[17])

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
        params.append('proyecto_id', this.proyecto_id)
        params.append('juez_id', this.juez_id.slice(1))
        params.append('calificacion', this.grade[1])
        params.append('observacion', this.desc)
        params.append('calificacion_contextoGeneral', this.grade[2])
        params.append('calificacion_explicacionConcepto', this.grade[3])
        params.append('calificacion_presentacionAudiovisual', this.grade[4])
        params.append('calificacion_presentacionFisica', this.grade[5])
        params.append('calificacion_claridadFluidez', this.grade[6])
        params.append('calificacion_participacion', this.grade[7])
        params.append('calificacion_tiempoExposicion', this.grade[8])
        params.append('calificacion_calidadNarrativaDistracciones', this.grade[9])
        params.append('calificacion_calidadVideo', this.grade[10])
        params.append('calificacion_originalidad', this.grade[11])
        params.append('calificacion_funcionalidad', this.grade[12])
        params.append('calificacion_tiempoRespuesta', this.grade[13])
        params.append('calificacion_desarrolloSistPropios', this.grade[14])

        try {
            const response = await axios.post(url, params, config)
        } catch (error) {
            console.log(error)
        }
    }
    }
})
