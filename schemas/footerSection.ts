import { s } from "sanity-typed-schema-builder"

export const footerSection = s.document({
  name: "footerSection",
  title: "Footer Sections",
  fields: [
    {
      name: "title",
      description: 'The title of the section. Displayed as a heading above the section when the section type is "Default".',
      title: "Title",
      type: s.string(),
    },
    {
      name: "index",
      title: "Index",
      description: "The order in which the section will appear in the footer. Sections with a lower index will appear first.",
      type: s.number(),
    },
    {
      name: "content",
      title: "Content",
      description: "The content of the section.",
      type: s.array({
        of: [
          s.block(),
        ]
      }),
    },
    {
      name: "type",
      title: "Type",
      description: 'The type of the section. The "Small Print" type is displayed below the other sections. This can be used for legal information, such as a copyright notice.',
      type: s.string({
        options: {
          list: [
            { title: "Default", value: "default" },
            { title: "Small Print", value: "smallPrint" },
          ]
        },
        initialValue: "default  ",
      }),
    }
  ],
});
