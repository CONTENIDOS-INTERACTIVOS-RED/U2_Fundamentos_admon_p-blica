<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. POLÍTICAS PÚBLICAS Y ACCIÓN POLÍTICA'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-4.mx-0
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-amarillo.p-4(data-aos="fade-left")
        p.mb-0(data-aos="fade-up") Las políticas públicas son herramientas clave en la gestión del Estado, diseñadas para abordar problemáticas sociales y mejorar la calidad de vida de la población. Su formulación, implementación y evaluación requieren un enfoque estructurado para garantizar su pertinencia. En este contexto, la acción política desempeña un papel crucial en la toma de decisiones gubernamentales, dado que los actores involucrados inciden directamente en el desarrollo y aplicación de estrategias públicas (CEPAL, 2023).

    #t_2_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 2.1
        h2 Definición y características de las políticas públicas

    p.mb-4 Las políticas públicas comprenden un conjunto de decisiones, acciones y estrategias adoptadas por el Estado para atender necesidades colectivas y promover el desarrollo social y económico. Se elaboran con base en el reconocimiento de problemáticas que requieren intervención gubernamental, apoyadas en estudios técnicos y en la evaluación de su viabilidad (Secretaría de Planificación y Programación de la Presidencia, 2023).

    ImagenInfografica.color-secundario.mb-0.bg-white
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-26.png', alt='Descripción de la imagen')
      .tarjeta.bg-white.p-4(x='21.5%' y='60.4%' numero='+')
        .h5.mb-2 Intencionalidad 
        p Son diseñadas con objetivos claros y específicos para abordar un problema identificado.
      .tarjeta.bg-white.p-4(x='34%' y='24%' numero='+')
        .h5.mb-2 Intervención estatal
        p Su ejecución es responsabilidad de entidades gubernamentales.
      .tarjeta.bg-white.p-4(x='56.5%' y='17%' numero='+')
        .h5.mb-2 Multidimensionalidad
        p Integran diversas áreas del conocimiento para un enfoque integral.
      .tarjeta.bg-white.p-4(x='75%' y='40%' numero='+')
        .h5.mb-2 Participación de actores
        p Involucran a la ciudadanía, sector privado y organismos internacionales.
      .tarjeta.bg-white.p-4(x='79%' y='80%' numero='+')
        .h5.mb-2 Evaluabilidad
        p Su impacto y resultados deben ser medibles para ajustes posteriores.
        
    .bg-verde.p-4.mb-4
      span Estas características reflejan la complejidad del proceso de formulación y gestión de políticas públicas, resaltando la necesidad de una planificación estratégica que garantice su impacto y continuidad.

    #t_2_2.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 2.2
        h2 Ciclo de formulación e implementación de políticas públicas

    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 El ciclo de las políticas públicas comprende distintas etapas que estructuran y aplican medidas gubernamentales de manera ordenada. A lo largo del proceso, se identifican necesidades, se diseñan soluciones y se ejecutan acciones para transformar la realidad social y económica del país (Secretaría Distrital de Planeación, 2023).
        h3 Identificación del problema
        .bg-rojo-claro.p-4
          span El primer paso en la formulación de una política pública es detectar una problemática que requiera intervención estatal. Para ello, se analizan datos técnicos, evidencia empírica y percepciones ciudadanas. Según la Guía de Formulación e Implementación de Políticas Públicas, este diagnóstico es fundamental para establecer la relevancia de la intervención gubernamental y definir el alcance de la estrategia (Secretaría de Planificación y Programación de la Presidencia, 2023).
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-12.col-md-6.col-xl-4.mb-4
        .d-flex.align-items-start.bg-verde-claro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-28.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-2.text-bold Análisis estadístico	
            span Uso de datos cuantitativos para dimensionar el problema.
      .col-12.col-md-6.col-xl-4.mb-4
        .d-flex.align-items-start.bg-verde-claro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-28.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-2.text-bold Consultas ciudadanas
            span Encuestas, foros y diálogos con la comunidad.
      .col-12.col-md-6.col-xl-4.mb-4
        .d-flex.align-items-start.bg-verde-claro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-28.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-2.text-bold Evaluaciones previas
            span Revisión de políticas anteriores para identificar aciertos y errores.
    p.mb-4 Un problema mal definido puede generar estrategias ineficaces, por lo que esta fase requiere rigor metodológico y evidencia sólida.
    h2 Diseño y formulación
    p.mb-4 Una vez identificado el problema, se establecen los objetivos, estrategias de acción y recursos necesarios. Según la CEPAL (2023), esta fase debe considerar:

    .row.mb-4
      .col-6.col-lg-3.mx-auto.d-flex.flex-column.mb-4(data-aos="fade-up")
        .bg-verde.px-4.py-3.mb-0.h-100.d-flex.justify-content-center.align-items-center
          p.text-bold.mb-0.text-center Definición de objetivos	
        .bg-verde-claro.p-4.h-100 
          p.mb-0.text-small.text-center Determinar qué se busca lograr con la intervención. 
      .col-6.col-lg-3.mx-auto.d-flex.flex-column.mb-4(data-aos="fade-up")
        .bg-amarillo-oscuro.px-4.py-3.mb-0.h-100.d-flex.justify-content-center.align-items-center
          p.text-bold.mb-0.text-center Identificación de beneficiarios	
        .bg-amarillo.p-4.h-100
          p.mb-0.text-small.text-center Precisar qué población se verá impactada.
      .col-6.col-lg-3.mx-auto.d-flex.flex-column.mb-4(data-aos="fade-up")
        .bg-rojo.px-4.py-3.mb-0.h-100.d-flex.justify-content-center.align-items-center
          p.text-bold.mb-0.text-center Asignación de recursos	
        .bg-rojo-claro.p-4.h-100
          p.mb-0.text-small.text-center Definir presupuesto y medios logísticos disponibles.
      .col-6.col-lg-3.mx-auto.d-flex.flex-column.mb-4(data-aos="fade-up")
        .bg-gris-oscuro.px-4.py-3.mb-0.h-100.d-flex.justify-content-center.align-items-center
          p.text-bold.mb-0.text-center.text-white Marco normativo
        .bg-gris-claro.p-4.h-100
          p.mb-0.text-small.text-center Establecer la base legal que respalde la política.
    
    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        .bg-gris.p-4.mb-4
          span Un aspecto fundamental es la participación de actores relevantes, quienes aportan conocimientos técnicos y validan la viabilidad de la propuesta. La articulación entre gobierno, academia, sector privado y sociedad civil facilita la construcción de estrategias adaptadas a la realidad nacional (Instituto para la Evaluación de Políticas Públicas, 2023).
        h3 Implementación y evaluación
        span La ejecución de una política pública requiere coordinación interinstitucional y seguimiento continuo para garantizar el cumplimiento de los objetivos. La Guía de Evaluación de Diseño de Políticas Públicas destaca tres factores clave para una implementación efectiva (Instituto para la Evaluación de Políticas Públicas, 2023):

    .row.position-relative.mb-5.py-4.bg-fondo-2.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Capacidad institucional 
              p Disponibilidad de recursos humanos y técnicos adecuados.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Coordinación intergubernamental
              p Establecimiento de mecanismos de cooperación entre distintos niveles de gobierno.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Flexibilidad en la gestión
              p Adaptación de estrategias ante desafíos emergentes.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')

    p.mb-4 Además, la evaluación permite medir el impacto de la política pública y determinar si los objetivos se han cumplido. Existen distintos tipos de evaluación (Secretaría Distrital de Planeación, 2023):

    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3
        .row.mb-4
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Evaluación de procesos	
                p.text-small.px-4.text-center.pb-2 Examina cómo se ha implementado la política y si se cumplieron los procedimientos.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Evaluación de impacto	
                p.text-small.px-4.text-center.pb-2 Analiza los efectos generados en la población beneficiaria.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Evaluación de costo-beneficio	
                p.text-small.px-4.text-center.pb-2 Determina si los recursos invertidos han generado los resultados esperados.

    p.mb-4 Un sistema de monitoreo adecuado es esencial para garantizar la sostenibilidad y el ajuste de las políticas públicas en función de sus resultados.
    #t_2_3.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 2.3
        h2 Actores en la Formulación de Políticas Públicas

    .row.mb-4
      .col-12.col-xl-8
        .bg-amarillo-claro.p-4
          span Las políticas públicas responden a problemáticas que requieren la intervención del Estado, pero su formulación no es exclusiva del gobierno. Es el resultado de la interacción entre múltiples actores que contribuyen a identificar problemas, diseñar soluciones e implementar estrategias. Entre estos actores se encuentran el gobierno central y local, la sociedad civil, los organismos internacionales y el sector privado, cada uno con roles y responsabilidades que influyen en el desarrollo de las políticas públicas (Secretaría de Planificación y Programación de la Presidencia, 2023).
        .bg-amarillo.p-4
          span La articulación entre estos actores es clave para garantizar que las políticas atiendan las necesidades de la ciudadanía y cuenten con mecanismos de ejecución y monitoreo adecuados. Además, la participación de diversos sectores fortalece la legitimidad de las decisiones gubernamentales, promoviendo un proceso inclusivo y transparente (CEPAL, 2023).
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')

    h2 Gobierno central y local en la formulación de políticas públicas
    p.mb-4 El gobierno es el principal responsable de diseñar e implementar políticas públicas, pues cuenta con la autoridad y los recursos para gestionar el aparato estatal. Su participación se da en distintos niveles:

    TabsC.mb-0
      .tabs-content.border.px-4.p-md-5.py-3(titulo='Gobierno central', :iconUrl="require('@/assets/curso/unidad/img-37.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
            figure
              img(src='@/assets/curso/unidad/img-38.png', alt='Descripción de la imagen')
          .col-md-12.col-lg-7.mb-4.mb-md-0
            h4(data-aos='fade-up') Gobierno central	
            div.d-flex.mb-1
              img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0 Define prioridades nacionales en salud, educación, infraestructura, entre otros sectores estratégicos. 

            div.d-flex.mb-1
              img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0 Asigna recursos públicos a través del presupuesto nacional.
            div.d-flex.mb-1
              img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0 Supervisa la ejecución de políticas mediante mecanismos de control y seguimiento.
      .tabs-content.border.px-4.p-md-5.mb-4.py-3(titulo='', :iconUrl="require('@/assets/curso/unidad/img-37.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
            figure
              img(src='@/assets/curso/unidad/img-39.png', alt='Descripción de la imagen')
          .col-md-12.col-lg-7.mb-4.mb-md-0
            h4(data-aos='fade-up') Gobierno local
            div.d-flex.mb-1
              img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0 Diagnostica necesidades territoriales. 
            div.d-flex.mb-1
              img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0 Gestiona recursos para la ejecución de programas locales.
            div.d-flex.mb-1
              img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0 Coordina con actores comunitarios para implementar políticas.
    .row.bg-rojo-claro.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.row
        .col-1.d-none.d-lg-block
          img(src='@/assets/curso/unidad/img-40.svg', alt='Texto que describa la imagen')
        .col-12.col-lg-11
          span La descentralización permite que los gobiernos locales diseñen políticas adaptadas a sus contextos territoriales. Gobernaciones y alcaldías formulan planes de desarrollo departamentales y municipales que responden a problemáticas específicas. Esta cercanía con la ciudadanía facilita la participación y el control social sobre la gestión pública (CEPAL, 2023).
    
    h2 Sociedad civil y organismos internacionales en la formulación de políticas públicas
    p.mb-4 La sociedad civil y los organismos internacionales han adquirido mayor relevancia en la formulación de políticas, pues aportan conocimiento técnico, financiamiento y supervisión en la implementación de estrategias gubernamentales.
    .row.mb-4
      .col-12.col-lg-7
        AcordionA(tipo="b")
          .div(titulo="Sociedad civil")(data-aos="fade-up")
            div.d-flex.mb-1
              img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0  Incide en la agenda pública mediante activismo y movilización social. 
            div.d-flex.mb-1
              img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0 Supervisa la gestión gubernamental a través de veedurías y control social. 
            div.d-flex.mb-1
              img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0  Participa en consultas ciudadanas para diseñar políticas más inclusivas.
          .div(titulo="Organismos internacionales")(data-aos="fade-up")
            div.d-flex.mb-1
              img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0 Ofrecen asistencia técnica para el diseño de estrategias gubernamentales.
            div.d-flex.mb-1
              img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0 Financian programas sociales y de desarrollo en sectores clave.
            div.d-flex.mb-1
              img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0 Monitorean el cumplimiento de compromisos internacionales en derechos humanos y sostenibilidad.
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-41.png', alt='Texto que describa la imagen')
    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-42.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        p.mb-4 Ejemplos de su participación incluyen la creación de normativas en derechos humanos, igualdad de género y protección ambiental, donde su intervención ha sido clave para incorporar nuevos enfoques en la gestión pública (Secretaría de Planificación y Programación de la Presidencia, 2023).
        h3 El sector privado en la formulación de políticas públicas
        span El sector privado influye en la formulación de políticas debido a su impacto en la economía y la generación de empleo. Su participación se da a través de cámaras de comercio, gremios empresariales y alianzas público-privadas.
    .row.mb-4
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-43.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7
        AcordionA(tipo="b")
          .div(titulo="Inversión en infraestructura y servicios públicos")(data-aos="fade-up")
            p Participación en proyectos estratégicos mediante concesiones y contratos con el Estado.
          .div(titulo="Innovación y desarrollo tecnológico")(data-aos="fade-up")
            p Generación de soluciones adoptadas por el sector público para mejorar la gestión.
          .div(titulo="Aportación de recursos financieros y logísticos")(data-aos="fade-up")
            p Modelos de colaboración que permiten ampliar la cobertura de programas gubernamentales.

    .row.bg-verde-claro.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3
        span Su participación debe estar regulada para evitar conflictos de interés y garantizar que el diseño de políticas responda a criterios de equidad y bienestar social (Instituto para la Evaluación de Políticas Públicas, 2023).

    #t_2_4.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 2.4
        h2 La acción política y su influencia en la toma de decisiones gubernamentales
    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 La acción política es un elemento clave en la gestión del Estado, ya que define la dirección de las políticas públicas y orienta la toma de decisiones gubernamentales. Mediante ella, los actores políticos establecen prioridades, diseñan estrategias y ejecutan programas que responden a las necesidades de la población. La capacidad de un gobierno para ejercer su autoridad de manera legítima depende de su nivel de gobernabilidad y del grado de participación ciudadana en la formulación de políticas públicas (CEPAL, 2023).
        h3 Gobernabilidad y legitimidad en el proceso político
        .d-flex.align-items-start.bg-gris-claro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-44.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 La gobernabilidad es la capacidad del gobierno para gestionar los asuntos públicos dentro de un marco de estabilidad. Su efectividad depende de la legitimidad del sistema político, que se fundamenta en la confianza ciudadana y la aceptación de las reglas institucionales (Secretaría de Planificación y Programación de la Presidencia, 2023).

      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-45.png', alt='Texto que describa la imagen')

    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3
        .row.mb-4
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-46.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Implementación de políticas sin conflictos institucionales
                p.text-small.px-4.text-center.pb-2 Permite la ejecución eficiente de estrategias públicas.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-47.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Cumplimiento del Estado de derecho
                p.text-small.px-4.text-center.pb-2 Garantiza estabilidad y orden en la gestión gubernamental.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-48.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Construcción de consensos
                p.text-small.px-4.text-center.pb-2 Facilita acuerdos entre diferentes sectores para la toma de decisiones.
    p.mb-4 Cuando la legitimidad se ve afectada por corrupción o incumplimiento de promesas, la gobernabilidad se debilita y se generan crisis políticas que afectan la formulación de políticas públicas (Instituto para la Evaluación de Políticas Públicas, 2023).
    #t_2_5.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 2.5
        h2 Evaluación y medición del impacto de las políticas públicas

    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-49.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7
        .bg-rojo-claro.p-4.mb-4
          span La evaluación y medición del impacto de las políticas públicas son herramientas esenciales para garantizar su efectividad y optimizar el uso de recursos estatales. Este proceso permite analizar resultados, identificar fortalezas y mejorar estrategias de intervención gubernamental (Secretaría de Planificación y Programación de la Presidencia, 2023).
        h3 Indicadores de desempeño
        span Para medir el impacto de una política pública, es clave contar con indicadores que evalúen su alcance y eficacia. Estos se clasifican en tres categorías (Secretaría Distrital de Planeación, 2023):

    .row.mb-4
      .col-6.col-lg-4.mx-auto.d-flex.flex-column.mb-4(data-aos="fade-up")
        .bg-verde.px-4.py-3.mb-0.h-100.d-flex.justify-content-center.align-items-center
          p.text-bold.mb-0.text-center Eficiencia
        .bg-verde-claro.p-4.h-100
          p.mb-0.text-small.text-center Evalúa el uso adecuado de los recursos disponibles. Ejemplo: costo por beneficiario en un programa de salud.
      .col-6.col-lg-4.mx-auto.d-flex.flex-column.mb-4(data-aos="fade-up")
        .bg-amarillo-oscuro.px-4.py-3.mb-0.h-100.d-flex.justify-content-center.align-items-center
          p.text-bold.mb-0.text-center Efectividad
        .bg-amarillo.p-4.h-100 Mide el grado de cumplimiento de los objetivos. Ejemplo: reducción de la tasa de pobreza tras un programa social.
          p.mb-0.text-small.text-center 
      .col-6.col-lg-4.mx-auto.d-flex.flex-column.mb-4(data-aos="fade-up")
        .bg-rojo.px-4.py-3.mb-0.h-100.d-flex.justify-content-center.align-items-center
          p.text-bold.mb-0.text-center Impacto
        .bg-rojo-claro.p-4.h-100
          p.mb-0.text-small.text-center Analiza los efectos a largo plazo. Ejemplo: aumento en la alfabetización después de una política educativa.

    p.mb-4 Estos indicadores garantizan un proceso de evaluación riguroso, optimizando la gestión pública y ajustando estrategias según los resultados obtenidos (Instituto para la Evaluación de Políticas Públicas, 2023).
    h3 Transparencia y rendición de cuentas
    .row.bg-amarillo.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.row
        .col-12.col-xl-8
          p.mb-4 La evaluación de políticas debe ir acompañada de mecanismos que permitan a la población conocer los resultados de la gestión estatal y participar en el control social.
          div.d-flex.mb-3
            img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 <strong>Informes de gestión: </strong>Detallan avances y desafíos en la implementación de políticas públicas.

          div.d-flex.mb-3
            img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 <strong>Auditorías externas: </strong>Evaluaciones realizadas por organismos independientes para verificar el uso de recursos públicos.
          div.d-flex.mb-3
            img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 <strong>Plataformas de datos abiertos: </strong>Sistemas digitales que permiten el acceso a información sobre la ejecución presupuestal.
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-50.png', alt='Texto que describa la imagen')

    p.mb-4 La transparencia fortalece la confianza en las instituciones y mejora la efectividad de las políticas implementadas. Implementar mecanismos de rendición de cuentas contribuye a una gestión pública más democrática y eficiente (CEPAL, 2023).

    .row.bg-gris.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
          img.h-100(src='@/assets/curso/unidad/img-51.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7.d-flex.ps-4.ps-xl-5.align-items-center.flex-column
          h2.mb-4.pb-2.me-auto Administración pública: principales aportes de la teoría administrativa a la administración pública
          p.mb-5(data-aos="fade-up") Les invitamos a explorar el documento Administración pública: principales aportes de la teoría administrativa a la administración pública, donde se analiza cómo la teoría administrativa ha influido en la gestión del sector público, optimizando procesos, estructurando instituciones y fortaleciendo la toma de decisiones gubernamentales.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_Administración pública.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong>Administración pública: principales aportes de la teoría administrativa a la administración pública

    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/38543") Caldera Ortega, A. R. (2012). De la administración pública a las políticas públicas: ensayos desde las ciencias política.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=GepHww9s4GQ") [Vídeo] Universidad Continental. (2020, 10 de septiembre). Diseño, implementación y evaluación de políticas públicas.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/4p-N6_MUpHk?si=ZxS--mw3p10TRcVS") [Vídeo] Manyari J.F. (2020, 13 de febrero). Las políticas públicas y los sistemas. Universidad continental-modalidad a distancia.
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
