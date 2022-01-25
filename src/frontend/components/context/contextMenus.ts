export interface ContextMenuItem {
  id?: string
  color?: string
  label: string
  translate?: boolean
  items?: string[]
  icon?: string
  shortcuts?: string[]
  enabled?: boolean
}
// export interface ContextMenuLayout {
//   [key: string | "SEPERATOR"]: string[] | null
// }

export const contextMenuItems: { [key: string]: ContextMenuItem } = {
  // MENU
  save: { label: "actions.save", icon: "save", shortcuts: ["Ctrl+S"] },
  import: { label: "actions.import", icon: "import", items: ["txt", "media", "pptx", "ew", "pro"] },
  export_more: { label: "actions.export", icon: "export", items: ["projects", "current project", "lyrics as txt", "..."] },
  // MAIN
  quit: { label: "main.quit", icon: "close", shortcuts: ["Alt+F4"] },
  settings: { label: "menu.settings", icon: "settings" },
  about: { label: "main.about", icon: "info" },
  rename: { label: "actions.rename", icon: "rename", shortcuts: ["F2"] },
  delete: { label: "actions.delete", icon: "delete" },
  export: { label: "actions.export", icon: "export" },
  // DRAWER
  enabledTabs: { label: "context.enabledTabs", items: ["LOAD_enabled_drawer_tabs"] },
  newCategory: { label: "context.newCategory", icon: "all" },
  changeIcon: { label: "context.changeIcon", icon: "noIcon" },
  // PROJECT
  close: { label: "actions.close", icon: "close" },
  newProject: { label: "new.project", icon: "project" },
  newFolder: { label: "new.folder", icon: "folder" },
  newShowPopup: { label: "new.show", icon: "showIcon" },
  newShow: { label: "new.empty_show", icon: "showIcon" },
  newPrivateShow: { label: "new.private", icon: "private" },
  private: { label: "actions.private", icon: "private" },
  duplicate: { label: "actions.duplicate", icon: "duplicate" },
  // SHOWS
  addToProject: { label: "context.addToProject", icon: "project" },
  remove: { label: "actions.remove", icon: "remove" },
  slideGroups: { label: "context.changeGroup", icon: "groups", items: ["rename", "recolor", "remove", "SEPERATOR", "LOAD_slide_groups"] },
  selectAll: { label: "context.selectAll", icon: "select" },
  newSlide: { label: "new.slide", icon: "add" },
  // newGroup: { label: "context.createNew", icon: "add" },
  // SLIDE
  disable: { label: "actions.disable", icon: "disable" },
  edit: { label: "menu.edit", icon: "edit" },
  recolor: { label: "actions.recolor", icon: "color" },
}

export const contextMenuLayouts: { [key: string]: string[] } = {
  // MENU
  file: ["save", "import", "export_more", "SEPERATOR", "quit"],
  about: ["about"],
  // MAIN
  default: ["settings", "about", "SEPERATOR", "quit"],
  rename: ["rename"],

  // DRAWER
  drawer_top: ["enabledTabs"],
  // NAVIGATION
  category_shows: ["newCategory"],
  category_overlays: ["newCategory"],
  category_templates: ["newCategory"],
  category_media: ["newFolder"],
  category_audio: ["newFolder"],
  category_shows_button: ["rename", "changeIcon", "delete"],
  category_overlays_button: ["rename", "changeIcon", "delete"],
  category_templates_button: ["rename", "changeIcon", "delete"],
  category_media_button: ["rename", "delete"],
  category_audio_button: ["rename", "delete"],
  // CONTENT
  drawer_show: ["newShowPopup", "newShow"],
  // , "changeCategory" ? edit with rename & categories...
  // , "convertToOverlay"
  drawer_show_button: ["addToProject", "rename", "duplicate", "delete", "SEPERATOR", "export"],
  // media / audio
  media_card: ["add_to_project"],
  overlay_card: ["rename", "recolor", "addToFirstSlide", "edit", "SEPERATOR", "duplicate", "delete"],
  template_card: ["rename", "recolor", "addToShow", "edit", "SEPERATOR", "duplicate", "delete"],
  player_button: ["edit", "addToProjct", "delete"],
  live_card: ["addToFirstSlide"],

  // PROJECT
  projects: ["newProject", "newFolder"],
  projectTab: ["close"],
  project: ["newShowPopup", "newShow"], // , "newPrivateShow"
  show: ["rename", "remove", "private", "duplicate"],
  shows: ["newSlide", "selectAll"],

  // SHOWS
  // , "copy", "paste"
  slide: ["slideGroups", "disable", "edit", "SEPERATOR", "duplicate", "delete"],
  group: ["rename", "recolor", "disable", "selectAll", "SEPERATOR", "duplicate", "delete"],
  global_group: ["rename", "recolor"],
  // global_group: ["rename"],
}

// accelerator: process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',