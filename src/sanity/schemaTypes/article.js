export default {
  name: 'article',
  title: 'Artículo',
  type: 'document',
  fields: [
    {
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'titulo',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'autores',
      title: 'Autores',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'author' }],
        },
      ],
    },
    {
      name: 'fechaPublicacion',
      title: 'Fecha de publicación',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    },
    {
      name: 'palabrasClave',
      title: 'Palabras clave',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'portada',
      title: 'Imagen de Portada',
      type: 'image',
      options: {
        hotspot: true, // Permite recortar la imagen en el Studio
      },
    },
    {
      name: 'contenido',
      title: 'Contenido',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
  preview: {
    select: {
      title: 'titulo',
      author0: 'autores.0.nombre',
      author0Last: 'autores.0.apellido',
      date: 'fechaPublicacion',
    },
    prepare({ title, author0, author0Last, date }) {
      const author = [author0, author0Last].filter(Boolean).join(' ');
      return {
        title: title || 'Artículo sin título',
        subtitle: [author, date].filter(Boolean).join(' · '),
      };
    },
  },
};
