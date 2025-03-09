<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'NOMBRE TEMA 3'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
   
    .bg-full-width.border-top.actividad(style="background-color: #ebf1f5; border-top: 5px solid #f5c145 !important")
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
  data: () => ({
    cuestionario: {
      tema: 'Sistemas numéricos y álgebra de Boole',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'El estado civil debe acreditarse mediante ______ oficiales, como el acta de nacimiento o matrimonio.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Informes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Documentos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Contratos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Declaraciones juradas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'El fallecimiento de una persona natural causa el ______ de su personalidad jurídica.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Inicio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mantenimiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cese.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Incremento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Una persona con capacidad de obrar plena puede ______ sus derechos sin restricciones.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Transferir.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ceder.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ejercer.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Renunciar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Una empresa de consultoría en Derecho revisa los atributos de personalidad de las personas jurídicas en comparación con las naturales. Al estudiar los derechos, encuentra uno aplica a los dos tipos de persona. ¿Cuál de los siguientes es compartido tanto por personas naturales como jurídicas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La nacionalidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La posibilidad de poseer bienes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La capacidad de obrar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La responsabilidad limitada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'Fernando está revisando los documentos de su empresa puesto que junto con sus socios se disponen a cambiar de domicilio. Ante la situación se pregunta si habrán repercusiones e los derechos y obligaciones que ostenta su organización. ¿El cambio de domicilio afecta la personalidad jurídica de una persona jurídica en Colombia?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'No, el cambio de domicilio no afecta la personalidad jurídica, pero debe ser actualizado ante las autoridades.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Sí, el cambio de domicilio implica la creación de una nueva persona jurídica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El domicilio solo puede ser cambiado si lo aprueba una autoridad judicial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Las personas jurídicas no pueden cambiar de domicilio sin disolverse.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Felicidades! Has superado la prueba con éxito.',
      mensaje_final_reprobado:
        'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
