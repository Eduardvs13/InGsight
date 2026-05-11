export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "title",
      title: "Site title",
      type: "string",
      description: "Displayed in the header and previews",
      validation: (Rule) => Rule.required(),
    },
    { name: "description", title: "Site description", type: "text" },
    {
      name: "logo",
      title: "Site logo",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "defaultAuthor",
      title: "Default author",
      type: "reference",
      to: [{ type: "author" }],
    },
  ],
};
