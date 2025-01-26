export default defineNuxtConfig({
    app: {
      head: {
        title: 'Medical Image Annotation SaaS',
        meta: [
          { name: 'description', content: 'A SaaS tool for medical image annotation and analysis.' },
        ],
      },
    },
    modules: ['@nuxtjs/tailwindcss'],
    css: ['~/assets/css/tailwind.css'],
    components: true,
    build: {
      transpile: ['konva'],
    },
  });
   
