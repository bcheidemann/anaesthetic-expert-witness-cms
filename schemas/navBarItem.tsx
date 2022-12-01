import { s } from "sanity-typed-schema-builder"
import { route } from './route'

export const navBarItem = s.document({
  name: "navBarItem",
  title: "Nav Bar Item",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "The title of the nav bar item.",
      type: s.string(),
    },
    {
      name: "index",
      title: "Index",
      description: "The index of the nav bar item. This is used to determine the order of the nav bar items.",
      optional: true,
      type: s.number(),
    },
    {
      name: "route",
      title: "Route",
      description: "The route to link to.",
      type: s.reference({
        to: [route],
      })
    }
  ],
});
