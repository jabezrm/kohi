CREATE TABLE `made_entries` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`date` text NOT NULL,
	`drink_type` text NOT NULL,
	`brew_method` text NOT NULL,
	`bean` text,
	`roast_date` text,
	`grind_size` text,
	`dose` real,
	`yield` real,
	`extraction_time` integer,
	`milk` text,
	`add_ins` text,
	`photo_uri` text,
	`rating` integer,
	`notes` text
);
--> statement-breakpoint
CREATE TABLE `tasted_entries` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`date` text NOT NULL,
	`cafe_name` text NOT NULL,
	`suburb` text,
	`drink_ordered` text NOT NULL,
	`milk` text,
	`price` real,
	`rating` integer,
	`would_order_again` integer,
	`notes` text,
	`photo_uri` text
);
