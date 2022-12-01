import { s } from "sanity-typed-schema-builder";
import { footerSection } from "./schemas/footerSection";
import { image } from "./schemas/image";
import { route } from "./schemas/route";
import { navBarItem } from "./schemas/navBarItem";

export type FooterSection = s.infer<typeof footerSection>;
export type Image = s.infer<typeof image>;
export type Route = s.infer<typeof route>;
export type NavBarItem = s.infer<typeof navBarItem>;
