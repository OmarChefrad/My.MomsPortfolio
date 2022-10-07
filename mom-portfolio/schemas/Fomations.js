export default {
  name: "formations",
  title: "Formations",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "title of the project",
      type: "string",
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      description: "Progress of the project from 1 to 100",
      validation: (Rule) => Rule.min(0).max(100),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      option: { hotspot: true },
    },
  ],
}
