import { s } from "sanity-typed-schema-builder"

export const image = s.document({
  name: "imageAsset",
  title: "Images",
  fields: [
    {
      name: "title",
      description: "The title of the image. This will be used as the alt text.",
      title: "Title",
      type: s.string(),
    },
    {
      name: "id",
      title: "ID",
      description: "The ID of the image. This is used to uniquely identify the asset.",
      type: s.string(),
    },
    {
      name: "image",
      title: "Image",
      type: s.image(),
    }
  ],
});
