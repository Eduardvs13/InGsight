export default {
  name: "author",
  title: "Autor",
  type: "document",
  fields: [
    { name: "nombre", title: "Nombre", type: "string" },
    { name: "apellido", title: "Apellido", type: "string" },
    { name: "institucion", title: "Institución", type: "string" },
    {
      name: "identificador",
      title: "Identificador",
      description: "Ej: ORCID, ResearcherID, Google Scholar ID, etc.",
      type: "string",
    },
  ],
  preview: {
    select: { title: "nombre", subtitle: "apellido" },
    prepare({ title, subtitle }) {
      return {
        title:
          [title, subtitle].filter(Boolean).join(" ") || "Autor sin nombre",
      };
    },
  },
};
