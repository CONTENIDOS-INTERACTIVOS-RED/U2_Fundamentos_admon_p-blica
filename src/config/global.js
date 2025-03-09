export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
    numeroUnidad: '2',
    tituloUnidad: 'La Administración Pública',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Elementos básicos de la estructura administrativa',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Características de la estructura administrativa',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Niveles y clasificación de la administración pública en Colombia',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Principales organismos administrativos en Colombia',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Gestión en la estructura administrativa',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'POLÍTICAS PÚBLICAS Y ACCIÓN POLÍTICA',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Definición y características de las políticas públicas',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Ciclo de formulación e implementación de políticas públicas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Actores en la Formulación de Políticas Públicas',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo:
              'La acción política y su influencia en la toma de decisiones gubernamentales',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo:
              'Evaluación y medición del impacto de las políticas públicas',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia: 'CEPAL. (2023). Política y Políticas Públicas.',
      link:
        'https://repositorio.cepal.org/server/api/core/bitstreams/70b2d111-ad5b-421a-8580-ac33de3c0bd4/content',
    },
    {
      referencia:
        'Constitución Política de Colombia. (1991). Constitución Política de Colombia de 1991.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4125',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (sf). Marco Normativo de la Administración Pública en Colombia.',
      link: 'https://www.dnp.gov.co',
    },
    {
      referencia:
        'Escuela Superior de Administración Pública (ESAP). (2017). Estructura y Organización del Estado y la Administración Pública.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/manual-estado/pdf/20_Sector_Funcion_Publica.pdf',
    },
    {
      referencia:
        'Escuela Superior de Administración Pública (ESAP). (2017). Gestión de las Organizaciones Públicas.',
      link: 'https://repositoriocdim.esap.edu.co/handle/20.500.14471/26030',
    },
    {
      referencia:
        'Función Pública. (sf). Modelo Integrado de Planeación y Gestión (MIPG).',
      link: 'https://www.funcionpublica.gov.co/web/mipg',
    },
    {
      referencia:
        'Instituto para la Evaluación de Políticas Públicas. (2023). Guía de Evaluación de Diseño de Políticas Públicas.',
      link:
        'https://www.sdp.gov.co/sites/default/files/guia_formulacion_implementacion_politicas_publicas.pdf',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones. (sf). Gobierno Digital en Colombia.',
      link: 'https://gobiernodigital.mintic.gov.co/portal/',
    },
    {
      referencia:
        'Secretaría Distrital de Planeación. (2023). Guía para la Formulación e Implementación de Políticas Públicas.',
      link:
        'https://www.sdp.gov.co/sites/default/files/guia_formulacion_implementacion_politicas_publicas.pdf',
    },
    {
      referencia:
        'Sánchez, M. (2015). Administración 1: (ed.). Grupo Editorial Patria.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/39474',
    },
    {
      referencia:
        'Carles, R. (2021). Teoría de la Organización en la Gestión Pública. Universidad Nacional de Educación a Distancia.',
      link:
        'https://content.lpderecho.pe/wp-content/uploads/2021/04/u1-carles-ramio-teoria-de-la-organizacion.pdf',
    },
    {
      referencia:
        'Guerrero, O. (2006). Teoría Administrativa del Estado. Universidad Nacional Autónoma de México.',
      link: 'https://omarguerrero.org/pdfs/libros/TAE.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Administración pública',
      significado:
        'Conjunto de instituciones, procesos y normativas mediante los cuales el estado gestiona recursos y presta servicios a la ciudadanía.',
    },
    {
      termino: 'Centralización',
      significado:
        'Modelo de organización administrativa en el cual las decisiones y el control de la gestión pública se concentran en el gobierno central.',
    },
    {
      termino: 'Descentralización',
      significado:
        'Transferencia de competencias y recursos desde el nivel central del gobierno hacia entidades territoriales o sectoriales con autonomía de gestión.',
    },
    {
      termino: 'Eficiencia',
      significado:
        'Uso óptimo de los recursos públicos para alcanzar los objetivos de las políticas gubernamentales con el menor costo posible.',
    },
    {
      termino: 'Evaluación de políticas públicas',
      significado:
        'Proceso mediante el cual se mide el impacto, la efectividad y los resultados de las acciones gubernamentales para determinar su pertinencia y mejorar su ejecución.',
    },
    {
      termino: 'Gobernabilidad',
      significado:
        'Capacidad del gobierno para ejercer su autoridad, implementar políticas públicas y mantener la estabilidad institucional.',
    },
    {
      termino: 'Gobierno electrónico',
      significado:
        'Uso de tecnologías de la información y la comunicación (TIC) en la gestión pública para mejorar la prestación de servicios y fortalecer la transparencia.',
    },
    {
      termino: 'Indicadores de desempeño',
      significado:
        'Parámetros utilizados para medir la efectividad de la administración pública en la implementación de programas y políticas.',
    },
    {
      termino: 'Marco normativo',
      significado:
        'Conjunto de leyes, decretos y reglamentos que regulan la organización y funcionamiento de la administración pública.',
    },
    {
      termino: 'Participación ciudadana',
      significado:
        'Mecanismos que permiten a la sociedad intervenir en la formulación, ejecución y evaluación de políticas públicas.',
    },
    {
      termino: 'Política Pública',
      significado:
        'Estrategia gubernamental diseñada para abordar problemas sociales, económicos o políticos mediante acciones planificadas y estructuradas.',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
