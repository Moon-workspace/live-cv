export type Lang = 'pt' | 'es' | 'en'

export const translations = {
  pt: {
    typewriter: 'Frontend Developer • Designer Gráfico • Técnico de Multimédia',
    nav: {
      experience: 'Experiência',
      education: 'Formação',
      skills: 'Competências',
      contact: 'Contacto',
      projects: 'Projetos',
    },
    hero: {
      summary: 'Profissional versátil com formação em Engenharia Informática e Multimédia. Experiência sólida em atendimento ao cliente e suporte técnico, com competências em desenvolvimento web, design gráfico e edição audiovisual.',
      downloadCv: 'Download CV (PDF)',
      contactLink: 'Contactar',
    },
    sections: {
      experience: {
        title: 'Experiência profissional',
        jobs: [
          {
            role: 'Suporte Técnico',
            company: 'NewSpring Services',
            period: 'Ago 2025 – Presente',
            description: 'Prestação de assistência e suporte técnico especializado ao cliente, garantindo a resolução eficaz de problemas e a satisfação do utilizador.',
          },
          {
            role: 'Freelancer Multimédia e Audiovisual',
            company: 'Trabalho independente',
            period: '2019 – Presente',
            description: 'Realização de projetos em multimédia e audiovisual de forma esporádica: edição de vídeo, design gráfico e produção de conteúdo.',
          },
          {
            role: 'Assistente de Suporte Técnico',
            company: 'Fnac Darty · Manpowergroup TBO, Lisboa',
            period: 'Abr 2022 – Abr 2025',
            description: 'Suporte técnico e acompanhamento de reparações, atendimento ao público e gestão de encomendas. Informações sobre eventos, reparações e artigos FNAC.',
          },
          {
            role: 'Assistente de Apoio ao Cliente (Censos 2021)',
            company: 'Intelcia, Lisboa',
            period: 'Abr 2021 – Mai 2021',
            description: 'Prestação de assistência aos cidadãos no preenchimento dos Censos 2021. Trabalho temporário focado no suporte direto ao público.',
          },
          {
            role: 'Operadora de Restaurante Fast Food',
            company: 'Food4Kings, Lisboa',
            period: 'Ago 2019 – Out 2019',
            description: 'Desempenho de funções de empregada de balcão e atendimento ao público.',
          },
        ],
      },
      education: {
        title: 'Formação',
        items: [
          { title: 'Licenciatura em Engenharia Informática', place: 'IADE, Lisboa · Nov 2024 – Jul 2027 (previsão)' },
          { title: 'Técnico de Multimédia', place: 'Escola Técnica Profissional Digital, Lisboa · Set 2016 – Jul 2019' },
        ],
      },
      projects: {
        title: 'Projetos em destaque',
        items: [
          {
            name: 'CV Online',
            description:
              'Currículo online desenvolvido com React, TypeScript e Tailwind CSS, pensado para ser simples de navegar, responsivo e com foco em recrutadores.',
            techs: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'UX/UI'],
          },
          {
            name: 'Orbi — motor de busca',
            description:
              'Motor de busca focado em experiência do utilizador, organização de resultados e apresentação clara de informação.',
            status: 'Em desenvolvimento',
            techs: ['React', 'APIs de pesquisa (Google)', 'UX'],
          },
        ],
      },
      skills: {
        title: 'Competências',
        list: ['Programação e Desenvolvimento Web', 'Frontend Developer', 'Design Gráfico', 'Creative Cloud', 'Conceção de Produtos Multimédia', 'Captação e Edição de Imagem e Som', 'Edição de Vídeo', 'Animação 2D e 3D', 'Microsoft Office', 'Gestão de documentos digitais'],
      },
      certificates: {
        title: 'Certificados',
        text: 'Técnico de Multimédia e Audiovisual',
      },
      languages: {
        title: 'Línguas',
        items: [
          { name: 'Português', level: 'Nativo', percent: 100 },
          { name: 'Inglês', level: 'B2 (Intermédio)', percent: 65 },
          { name: 'Espanhol', level: 'B2 (Intermédio)', percent: 65 },
        ],
      },
    },
    contact: {
      title: 'Contacto',
      intro: 'Aberta a oportunidades de emprego. Recrutadores e empresas: pode falar comigo por WhatsApp, email ou LinkedIn.',
      emailLabel: 'Email direto:',
      whatsappCta: 'Falar no WhatsApp',
      ctaEmail: 'Enviar email',
      ctaLinkedIn: 'Abrir LinkedIn',
      form: {
        name: 'Nome',
        email: 'E-mail',
        message: 'Mensagem',
        placeholderName: 'O seu nome',
        placeholderEmail: 'o.seu@email.com',
        placeholderMessage: 'Escreva a sua mensagem...',
        submit: 'Enviar mensagem',
      },
      mailtoSubject: 'Contacto profissional - Site CV',
      mailtoFrom: 'De',
    },
  },
  es: {
    typewriter: 'Frontend Developer • Diseñador Gráfico • Técnico de Multimedios',
    nav: {
      experience: 'Experiencia',
      education: 'Formación',
      skills: 'Competencias',
      contact: 'Contacto',
      projects: 'Proyectos',
    },
    hero: {
      summary: 'Profesional versátil con formación en Ingeniería Informática y Multimedios. Experiencia sólida en atención al cliente y soporte técnico, con competencias en desarrollo web, diseño gráfico y edición audiovisual.',
      downloadCv: 'Descargar CV (PDF)',
      contactLink: 'Contactar',
    },
    sections: {
      experience: {
        title: 'Experiencia profesional',
        jobs: [
          {
            role: 'Soporte Técnico',
            company: 'NewSpring Services',
            period: 'Ago 2025 – Presente',
            description: 'Prestación de asistencia y soporte técnico especializado al cliente, garantizando la resolución eficaz de problemas y la satisfacción del usuario.',
          },
          {
            role: 'Freelance Multimedios y Audiovisual',
            company: 'Trabajo independiente',
            period: '2019 – Presente',
            description: 'Realización de proyectos en multimedios y audiovisual de forma esporádica: edición de vídeo, diseño gráfico y producción de contenido.',
          },
          {
            role: 'Asistente de Soporte Técnico',
            company: 'Fnac Darty · Manpowergroup TBO, Lisboa',
            period: 'Abr 2022 – Abr 2025',
            description: 'Soporte técnico y seguimiento de reparaciones, atención al público y gestión de pedidos. Información sobre eventos, reparaciones y artículos FNAC.',
          },
          {
            role: 'Asistente de Atención al Cliente (Censo 2021)',
            company: 'Intelcia, Lisboa',
            period: 'Abr 2021 – May 2021',
            description: 'Asistencia a los ciudadanos en el cumplimentación del Censo 2021. Trabajo temporal centrado en el soporte directo al público.',
          },
          {
            role: 'Operadora de Restaurante Fast Food',
            company: 'Food4Kings, Lisboa',
            period: 'Ago 2019 – Oct 2019',
            description: 'Empleada de mostrador y atención al público.',
          },
        ],
      },
      education: {
        title: 'Formación',
        items: [
          { title: 'Licenciatura en Ingeniería Informática', place: 'IADE, Lisboa · Nov 2024 – Jul 2027 (previsión)' },
          { title: 'Técnico de Multimedios', place: 'Escola Técnica Profissional Digital, Lisboa · Sep 2016 – Jul 2019' },
        ],
      },
      projects: {
        title: 'Proyectos destacados',
        items: [
          {
            name: 'CV Online',
            description:
              'Currículum online desarrollado con React, TypeScript y Tailwind CSS, pensado para ser sencillo de navegar, responsivo y orientado a recruiters.',
            techs: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'UX/UI'],
          },
          {
            name: 'Orbi — motor de búsqueda',
            description:
              'Motor de búsqueda centrado en la experiencia del usuario, organización de resultados y presentación clara de la información.',
            status: 'En desarrollo',
            techs: ['React', 'APIs de búsqueda (Google)', 'UX'],
          },
        ],
      },
      skills: {
        title: 'Competencias',
        list: ['Programación y Desarrollo Web', 'Frontend Developer', 'Diseño Gráfico', 'Creative Cloud', 'Concepción de Productos Multimedios', 'Captación y Edición de Imagen y Sonido', 'Edición de Vídeo', 'Animación 2D y 3D', 'Microsoft Office', 'Gestión de documentos digitales'],
      },
      certificates: {
        title: 'Certificados',
        text: 'Técnico de Multimedios y Audiovisual',
      },
      languages: {
        title: 'Idiomas',
        items: [
          { name: 'Portugués', level: 'Nativo', percent: 100 },
          { name: 'Inglés', level: 'B2 (Intermedio)', percent: 65 },
          { name: 'Español', level: 'B2 (Intermedio)', percent: 65 },
        ],
      },
    },
    contact: {
      title: 'Contacto',
      intro: 'Abierta a oportunidades laborales. Recruiters y empresas: puede hablar conmigo por WhatsApp, correo electrónico o LinkedIn.',
      emailLabel: 'Correo directo:',
      whatsappCta: 'Hablar por WhatsApp',
      ctaEmail: 'Enviar correo',
      ctaLinkedIn: 'Abrir LinkedIn',
      form: {
        name: 'Nombre',
        email: 'Correo electrónico',
        message: 'Mensaje',
        placeholderName: 'Su nombre',
        placeholderEmail: 'su@email.com',
        placeholderMessage: 'Escriba su mensaje...',
        submit: 'Enviar mensaje',
      },
      mailtoSubject: 'Contacto profesional - CV web',
      mailtoFrom: 'De',
    },
  },
  en: {
    typewriter: 'Frontend Developer • Graphic Designer • Multimedia Technician',
    nav: {
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      contact: 'Contact',
      projects: 'Projects',
    },
    hero: {
      summary: 'Versatile professional with a background in Computer Engineering and Multimedia. Solid experience in customer service and technical support, with skills in web development, graphic design and audiovisual editing.',
      downloadCv: 'Download CV (PDF)',
      contactLink: 'Contact',
    },
    sections: {
      experience: {
        title: 'Work experience',
        jobs: [
          {
            role: 'Technical Support',
            company: 'NewSpring Services',
            period: 'Aug 2025 – Present',
            description: 'Providing specialised technical assistance and support, ensuring effective problem resolution and user satisfaction.',
          },
          {
            role: 'Freelance Multimedia & Audiovisual',
            company: 'Self-employed',
            period: '2019 – Present',
            description: 'Delivering multimedia and audiovisual projects on a sporadic basis: video editing, graphic design and content production.',
          },
          {
            role: 'Technical Support Assistant',
            company: 'Fnac Darty · Manpowergroup TBO, Lisbon',
            period: 'Apr 2022 – Apr 2025',
            description: 'Technical support and repairs follow-up, customer service and order management. Information on events, repairs and FNAC products.',
          },
          {
            role: 'Customer Support Assistant (2021 Census)',
            company: 'Intelcia, Lisbon',
            period: 'Apr 2021 – May 2021',
            description: 'Assistance to citizens filling in the 2021 Census. Temporary role focused on direct public support.',
          },
          {
            role: 'Fast Food Restaurant Operator',
            company: 'Food4Kings, Lisbon',
            period: 'Aug 2019 – Oct 2019',
            description: 'Counter staff and customer service.',
          },
        ],
      },
      education: {
        title: 'Education',
        items: [
          { title: 'BSc Computer Engineering', place: 'IADE, Lisbon · Nov 2024 – Jul 2027 (expected)' },
          { title: 'Multimedia Technician', place: 'Escola Técnica Profissional Digital, Lisbon · Sep 2016 – Jul 2019' },
        ],
      },
      projects: {
        title: 'Featured projects',
        items: [
          {
            name: 'Online CV',
            description:
              'Online CV built with React, TypeScript and Tailwind CSS, designed to be easy to navigate, responsive and focused on recruiters.',
            techs: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'UX/UI'],
          },
          {
            name: 'Orbi — search engine',
            description:
              'A search engine focused on user experience, result organisation and clear information presentation.',
            status: 'In development',
            techs: ['React', 'Search APIs (Google)', 'UX'],
          },
        ],
      },
      skills: {
        title: 'Skills',
        list: ['Web Programming & Development', 'Frontend Developer', 'Graphic Design', 'Creative Cloud', 'Multimedia Product Design', 'Image & Sound Capture & Editing', 'Video Editing', '2D & 3D Animation', 'Microsoft Office', 'Digital document management'],
      },
      certificates: {
        title: 'Certificates',
        text: 'Multimedia and Audiovisual Technician',
      },
      languages: {
        title: 'Languages',
        items: [
          { name: 'Portuguese', level: 'Native', percent: 100 },
          { name: 'English', level: 'B2 (Intermediate)', percent: 65 },
          { name: 'Spanish', level: 'B2 (Intermediate)', percent: 65 },
        ],
      },
    },
    contact: {
      title: 'Contact',
      intro: 'Open to job opportunities. Recruiters and employers: you can contact me via WhatsApp, email or LinkedIn.',
      emailLabel: 'Email:',
      whatsappCta: 'Chat on WhatsApp',
      ctaEmail: 'Send email',
      ctaLinkedIn: 'Open LinkedIn',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        placeholderName: 'Your name',
        placeholderEmail: 'your@email.com',
        placeholderMessage: 'Write your message...',
        submit: 'Send message',
      },
      mailtoSubject: 'Professional contact - CV site',
      mailtoFrom: 'From',
    },
  },
} as const
