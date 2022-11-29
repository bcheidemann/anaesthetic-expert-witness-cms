import { s } from "sanity-typed-schema-builder"

const image = s.objectNamed({
  name: "image",
  title: "Image",
  fields: [
    {
      name: "description",
      title: "Description",
      description: "The title of the column. This will be used as the alt text.",
      type: s.string(),
    },
    {
      name: "image",
      title: "Image",
      type: s.image(),
    },
    {
      name: "css",
      title: "CSS",
      description: "CSS to apply to the image. Accepts SCSS syntax.",
      optional: true,
      type: s.text(),
    },
  ],
});

const columnImage = s.objectNamed({
  name: "columnImage",
  title: "Column Image",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "The of the image. It is not displayed anywhere.",
      optional: true,
      type: s.string(),
    },
    {
      name: "index",
      title: "Index",
      description: "The index of the column. This is used to determine the order of the columns.",
      optional: true,
      type: s.number(),
    },
    {
      name: "image",
      title: "Image",
      type: image,
    }
  ]
});

const content = s.objectNamed({
  name: "content",
  title: "Content",
  fields: [
    {
      name: "content",
      title: "Content",
      type: s.array({
        of: [ s.block(), image ],
      }),
    },
    {
      name: "css",
      title: "CSS",
      description: "CSS to apply to the column. Accepts SCSS syntax.",
      optional: true,
      type: s.text(),
    },
  ],
});

const columnContent = s.objectNamed({
  name: "columnContent",
  title: "Column Content",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "The of the column. It is not displayed anywhere.",
      optional: true,
      type: s.string(),
    },
    {
      name: "index",
      title: "Index",
      description: "The index of the column. This is used to determine the order of the columns.",
      optional: true,
      type: s.number(),
    },
    {
      name: "content",
      title: "Content",
      type: content,
    }
  ]
});

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
              },
            ],
          }),
          s.objectNamed({
            name: "columns",
            title: "Columns",
            fields: [
              {
                name: "title",
                title: "Title",
                description: "The of the column group. It is not displayed anywhere.",
                optional: true,
                type: s.string(),
              },
              {
                name: "columns",
                title: "Columns",
                optional: true,
                type: s.array({
                  initialValue: [],
                  of: [columnContent, columnImage],
                }),
              },
              {
                name: "css",
                title: "CSS",
                description: "CSS to apply to the columns. Accepts SCSS syntax.",
                optional: true,
                type: s.text(),
              },
            ],
          }),
          content,
        ],
      }),
    },
  ],
});
