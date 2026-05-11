export const getAllArticleSlugs = `*[_type == "article"].slug.current`;

export const getArticleBySlug = `*[_type == "article" && slug.current == $slug][0]{
  titulo,
  "slug": slug.current,
  fechaPublicacion,
  portada,
  contenido,
  "autores": autores[]->{nombre, apellido, institucion, identificador}
}`;

export const getAllArticles = `*[_type == "article"] | order(fechaPublicacion desc){
  titulo,
  "slug": slug.current,
  fechaPublicacion,
  portada,
  palabrasClave,
  contenido,
  "autores": autores[]->{nombre, apellido}
}`;
