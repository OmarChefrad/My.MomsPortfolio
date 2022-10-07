export default {
  name: "personal",
  title: "Personal",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      option: { hotspot: true },
    },
    {
      name: "backroundInformation",
      title: "BackroundInformation",
      type: "string",
    },
    {
      name: "profilePic",
      title: "ProfilePic",
      type: "image",
      option: { hotspot: true },
    },
    {
      name: "phoneNumber",
      title: "PhoneNumber",
      type: "string",
    },
    {
      name: "email",
      title: "Qui suis-je?",
      type: "string",
    },
  ],
}
