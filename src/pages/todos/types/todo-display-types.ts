export const TODO_DISPLAY_MODE = {
  view: "view",
  edit: "edit",
} as const;

export type TodoDisplayMode =
  (typeof TODO_DISPLAY_MODE)[keyof typeof TODO_DISPLAY_MODE];
