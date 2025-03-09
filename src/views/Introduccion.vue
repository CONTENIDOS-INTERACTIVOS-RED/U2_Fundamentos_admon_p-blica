<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno(subTitulo="Introducción")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    
      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-1.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          .bg-gris.p-4
            span La administración pública es el motor que permite al Estado colombiano traducir sus objetivos y políticas en concretas, orientadas al bienestar colectivo y al desarrollo sostenible. En esta unidad, se invita a conocer los fundamentos estructurales y organizativos que soportan la gestión pública en Colombia, con énfasis en las dinámicas políticas, sociales y normativas que configuran su funcionamiento. Este tema es esencial para comprender cómo las instituciones públicas se articulan para atender las necesidades de una sociedad diversa y en constante evolución.
          span A lo largo de esta unidad, se espera que el estudiante desarrolle competencias clave relacionadas con el análisis de los elementos básicos de la estructura administrativa, el entendimiento de las políticas públicas y su impacto, y el marco normativo que regula la gestión pública en el contexto colombiano. Estas competencias permitirán interpretar cómo el estado organiza sus recursos y establece estrategias para garantizar la eficiencia, la equidad y la transparencia en sus acciones. Además, se busca fortalecer habilidades críticas para analizar la relación entre la administración pública y los actores sociales que influyen en su funcionamiento.

      .row.bg-amarillo.bg-full-width.p-4.mb-4
        div.px-5.pb-md-3.row
          .col-12.col-xl-7
            span Se destaca la relevancia de este tema en la gestión organizacional, particularmente en el diseño y la implementación de estrategias que impactan positivamente en el entorno empresarial y en la sociedad en general. Por ejemplo, el análisis de políticas públicas y su acción política ayudará a identificar las oportunidades de participación en procesos de formulación e implementación de programas gubernamentales. De igual manera, el conocimiento del marco normativo y organizacional será clave para evaluar la estructura legal y administrativa del Estado.
          .col-5.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-2.png', alt='Texto que describa la imagen')
          
          
  </template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
