import DefaultLayout from "./DefaultLayout";
import NoLayout from "./NoLayout";
export const Layouts = {
        undefined: DefaultLayout,
        nolayout: NoLayout
};
export type LayoutKeys = keyof typeof Layouts; // "Main" | "Admin"

