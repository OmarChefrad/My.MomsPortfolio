export default {
  name: "experiences",
  title: "Experiences",
  type: "document",
  fields: [
    {
      name: "jobTitle",
      title: "JobTitle",
      type: "string",
    },
    {
      name: "institution",
      title: "Institution",
      type: "string",
    },
    {
      name: "dateDeTravail",
      title: "DateDeTravail",
      type: "date",
    },
    {
      name: "dateDarretTravail",
      title: "DateDarretTravail",
      type: "date",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "MainImage",
      title: "Image",
      type: "image",
      option: { hotspot: true },
    },
  ],
}
