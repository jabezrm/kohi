import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const madeEntries = sqliteTable("made_entries", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  date: text("date").notNull(),
  drinkType: text("drink_type").notNull(),
  brewMethod: text("brew_method").notNull(),
  bean: text("bean"),
  roastDate: text("roast_date"),
  grindSize: text("grind_size"),
  dose: real("dose"),
  yield: real("yield"),
  extractionTime: integer("extraction_time"),
  milk: text("milk"),
  addIns: text("add_ins"),
  photoUri: text("photo_uri"),
  rating: integer("rating"),
  notes: text("notes"),
});

export const tastedEntries = sqliteTable("tasted_entries", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  date: text("date").notNull(),
  cafeName: text("cafe_name").notNull(),
  suburb: text("suburb"),
  drinkOrdered: text("drink_ordered").notNull(),
  milk: text("milk"),
  price: real("price"),
  rating: integer("rating"),
  wouldOrderAgain: integer("would_order_again", { mode: "boolean" }),
  notes: text("notes"),
  photoUri: text("photo_uri"),
});