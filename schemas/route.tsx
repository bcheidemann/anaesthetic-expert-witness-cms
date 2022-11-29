import { s } from "sanity-typed-schema-builder"

export const route = s.document({
  name: "route",
  title: "Route",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "The title of the route. Displayed in the tab bar. Leave blank to use the default title",
      optional: true,
      type: s.string(),
    },
    {
      name: "path",
      title: "Path",
      description: "The path of the route. For example: /about",
      type: s.slug(),
    },
    {
      name: "layout",
      title: "Layout",
      description: "The layout of the route.",
      optional: true,
      type: s.array({
        of: [
          s.objectNamed({
            name: "banner",
            fields: [
              {
                name: "content",
                title: "Content",
                type: s.array({
                  of: [s.block()],
                }),
              },
              {
                name: "backgroundImage",
                title: "Background Image",
                optional: true,
                type: s.object({
                  fields: [
                    {
                      name: "image",
                      title: "Image",
                      optional: true,
                      type: s.image(),
                    },
                    {
                      name: "paralax",
                      title: "Paralax",
                      optional: true,
                      type: s.boolean({
                        initialValue: false,
                      }),
                    },
                  ],
                }),
              },
              {
                name: "css",
                title: "CSS",
                description: "CSS to apply to the banner. Accepts SCSS syntax.",
                optional: true,
                type: s.text(),
              }
            ],
          }),
        ],
      }),
    },
  ],
});
