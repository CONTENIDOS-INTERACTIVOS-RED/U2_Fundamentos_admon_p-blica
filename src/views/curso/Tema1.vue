<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'1. Elementos básicos de la estructura administrativa'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    
      .row.mb-4
        .col-12.col-xl-7
          p.mb-4 La estructura administrativa está compuesta por instituciones, normativas y procesos que organizan la gestión pública dentro del Estado. Su función es coordinar las entidades gubernamentales para garantizar la implementación de políticas públicas y la prestación de servicios esenciales. En Colombia, este sistema opera bajo el marco normativo establecido en la Constitución Política de 1991, basada en principios de legalidad, descentralización y eficiencia.
          .bg-verde.p-4
            span Para su funcionamiento, la administración pública se organiza en distintos niveles jerárquicos con competencias definidas. Esta estructura permite asignar responsabilidades, supervisar la ejecución de políticas y evitar la duplicación de funciones, optimizando el uso de los recursos públicos. Además, el modelo de gestión colombiano combina la concentración del poder a nivel nacional con la descentralización de competencias hacia gobiernos departamentales y municipales, promoviendo una administración equitativa y ajustada a las necesidades territoriales.
        .col-5.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-3.png', alt='Texto que describa la imagen')
      
      #t_1_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 1.1
          h2 Características de la estructura administrativa

      p.mb-4 La administración pública en Colombia presenta elementos fundamentales que garantizan su organización y desempeño eficiente. La siguiente tabla sintetiza las principales características de esta estructura:

      .row.position-relative.mb-5.py-4.bg-fondo-2.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-4
                figure
                  img(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Jerarquización
                p Se organiza en niveles de autoridad y responsabilidades, desde la Presidencia hasta entidades descentralizadas.
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-4
                figure
                  img(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Especialización de funciones
                p Cada entidad tiene un propósito específico, como el Ministerio de Salud en temas sanitarios o el de Hacienda en finanzas públicas.
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-4
                figure
                  img(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Regulación normativa
                p Todas las actividades están regidas por la Constitución y normativas específicas para garantizar legalidad y equidad.
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-4
                figure
                  img(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Coordinación y articulación
                p Entidades trabajan de manera conjunta para evitar duplicidad de funciones y optimizar el uso de recursos.
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-4
                figure
                  img(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Descentralización administrativa
                p   Gobiernos departamentales y municipales tienen autonomía en la gestión de políticas y recursos.
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-4
                figure
                  img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Participación ciudadana
                p Se promueven mecanismos como cabildos abiertos y veedurías para supervisión social.
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-4
                figure
                  img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Transparencia y control de gestión
                p Existen organismos de supervisión como la Contraloría y la Procuraduría para evitar corrupción y garantizar rendición de cuentas.
      #t_1_2.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 1.2
          h2 Niveles y clasificación de la administración pública en Colombia

      .row.bg-gris.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3.row
          .col-12.col-xl-9.d-flex.justify-content-center.align-items-center
            span La administración pública colombiana está estructurada en distintos niveles para garantizar la descentralización y el desarrollo eficiente del Estado. La Constitución de 1991 establece la distribución de competencias entre la Nación, los departamentos y los municipios, permitiendo una gestión equitativa de los recursos públicos.
          .col-3.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')
            
      h2 Administración centralizada y descentralizada
      p.mb-4 En Colombia, la administración pública se divide en centralizada y descentralizada. La siguiente tabla presenta sus características y ejemplos representativos:
      TabsC.mb-0
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Centralizada', :iconUrl="require('@/assets/curso/unidad/img-12.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-13.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Centralizada 
              p(data-aos='fade-up') Depende del Gobierno Nacional y responde a la autoridad del Ejecutivo.
              p.text-bold Ejemplos:
              div.d-flex.mb-1
                img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Presidencia de la República: </strong>dirige la política general. 
              div.d-flex.mb-1
                img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Ministerios: </strong>gestionan sectores como salud y educación.
              div.d-flex.mb-1
                img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Departamentos Administrativos: </strong>como el DNP, que diseña políticas sectoriales. 
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Descentralizada', :iconUrl="require('@/assets/curso/unidad/img-12.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-14.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Descentralizada
              p(data-aos='fade-up') Entidades con autonomía en toma de decisiones y gestión de recursos.
              p.text-bold Ejemplos:
              div.d-flex.mb-1
                img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Superintendencias: </strong>regulan sectores específicos como la Superintendencia Financiera. 
              div.d-flex.mb-1
                img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Empresas Industriales y Comerciales del Estado: </strong> ejemplo, Ecopetrol.
              div.d-flex.mb-1
                img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Institutos Autónomos: </strong>como el ICBF, con autonomía en políticas sociales.
      .bg-amarillo.p-4.mb-4
        span La administración centralizada diseña y supervisa políticas, mientras que la descentralizada facilita su ejecución con mayor flexibilidad y cercanía a la ciudadanía.

      h2 Organismos autónomos y entidades adscritas
      p.mb-4 Además de la administración centralizada y descentralizada, existen organismos autónomos y entidades adscritas que cumplen funciones especializadas dentro del Estado. La siguiente tabla presenta sus diferencias y ejemplos:

      .row.mb-4
        .col-12.col-lg-7
          AcordionA(tipo="b")
            .div(titulo="Organismos autónomos")(data-aos="fade-up")
              p(data-aos='fade-up') No dependen de la jerarquía del Ejecutivo y tienen independencia en su gestión. 
              p.text-bold Ejemplos:
              div.d-flex.mb-1
                img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Banco de la República: </strong>regula la política monetaria.
              div.d-flex.mb-1
                img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Registraduría Nacional del Estado Civil: </strong>encargada del registro ciudadano y los procesos electorales.
              div.d-flex.mb-1
                img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Comisión de Regulación de Comunicaciones: </strong>regula el sector de telecomunicaciones.
            .div(titulo="Entidades adscritas")(data-aos="fade-up")
              p(data-aos='fade-up') Dependientes de un ministerio o departamento administrativo, pero con autonomía técnica y operativa.
              p.text-bold Ejemplos:
              div.d-flex.mb-1
                img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Instituto Nacional de Vías (Invías): </strong>responsable de la infraestructura vial del país, adscrito al Ministerio de Transporte.
              div.d-flex.mb-1
                img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Instituto Colombiano Agropecuario (ICA): </strong>regula la sanidad agropecuaria, adscrito al Ministerio de Agricultura.
              div.d-flex.mb-1
                img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Unidad de Planeación Minero-Energética (UPME): </strong>adscrita al Ministerio de Minas y Energía, planifica el desarrollo energético del país.
        .col-12.col-lg-5.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')

      p.mb-4 Las entidades adscritas tienen el reto de coordinar su gestión con los lineamientos estratégicos del gobierno central, manteniendo flexibilidad en su ejecución.

      h2 Descentralización territorial y funcional
      p.mb-4 En Colombia, la descentralización se da tanto a nivel territorial como funcional. La siguiente tabla resume las diferencias entre ambas y algunos ejemplos de su aplicación:

      .row.bg-fondo-2.bg-full-width.py-4.mb-0
        div.px-5.pb-md-3
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/cLjzbpEtUoQ?si=865aULgE2iKqrn8l" title="Descentralización en Colombia: territorial y funcional" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      .row.bg-verde.bg-full-width.p-4.mb-4
        div.px-5.pb-md-3
          span La descentralización territorial fortalece la gestión local, mientras que la funcional permite a entidades especializadas administrar recursos y políticas de manera autónoma.

      #t_1_3.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 1.3
          h2 Principales organismos administrativos en Colombia

      p.mb-4 La estructura administrativa del país está conformada por varias entidades que cumplen funciones específicas. La siguiente tabla presenta los organismos más relevantes y sus principales responsabilidades:

      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3
          .row.mb-4.justify-content-center
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-16.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Presidencia de la República
                p.px-1.text-small.mb-0.d-flex.text-center Lidera la política general del Estado y coordina la administración pública nacional.
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-17.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Ministerios y Departamentos Administrativos
                p.px-1.text-small.mb-0.d-flex.text-center Formulan e implementan políticas sectoriales en áreas clave como salud, educación y economía.
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-18.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Gobernaciones y Alcaldías
                p.px-1.text-small.mb-0.d-flex.text-center Administran los territorios a nivel departamental y municipal, ejecutando políticas según las necesidades locales.
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-19.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Entidades Descentralizadas
                p.px-1.text-small.mb-0.d-flex.text-center Supervisan y regulan sectores estratégicos como el financiero, la salud y la industria a través de organismos como las superintendencias.

      #t_1_4.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 1.4
          h2 Gestión en la estructura administrativa

      p.mb-4 Para garantizar una gestión pública eficiente, es fundamental que la administración opere bajo principios de transparencia, planeación y control. A continuación, se presentan algunas estrategias clave implementadas en Colombia:

      TabsC.mb-4
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Gobierno Digital', :iconUrl="require('@/assets/curso/unidad/img-20.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-21.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Gobierno Digital	
              p(data-aos='fade-up') Uso de plataformas tecnológicas para optimizar la gestión y mejorar el acceso a la información pública.
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Evaluación del Desempeño Institucional', :iconUrl="require('@/assets/curso/unidad/img-20.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-22.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Evaluación del Desempeño Institucional	
              p(data-aos='fade-up') Seguimiento y medición de los resultados obtenidos por las entidades públicas para mejorar su eficacia.
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Planes de Mejoramiento', :iconUrl="require('@/assets/curso/unidad/img-20.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-23.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Planes de Mejoramiento	
              p(data-aos='fade-up') Programas orientados a optimizar la calidad de los servicios prestados a la ciudadanía y corregir deficiencias.
      .row.bg-amarillo.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3.row
          .col-1.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-24.svg', alt='Texto que describa la imagen')
          .col-12.col-xl-11
            span La estructura administrativa en Colombia es el marco organizativo que permite la gestión eficiente del Estado. Su correcto funcionamiento depende de la articulación entre niveles de gobierno, la especialización de las entidades y la participación ciudadana en la toma de decisiones. Para fortalecer la administración pública, es clave avanzar en la descentralización, la modernización tecnológica y la rendición de cuentas.

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/38532") Barrera Zapata, R. (2012). La política y la administración pública.
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://youtu.be/DrCwKbM-7SU?si=-ERc4sp0N81GX64r") [Vídeo] Hablemos de derecho (2020, 25 de junio) Órganos de la administración pública.
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/69096") Cuello Duarte, F. (2009). Contratos de la administración pública.
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')
  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
