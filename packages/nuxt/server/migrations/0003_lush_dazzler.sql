DROP TABLE "concert_user";--> statement-breakpoint
ALTER TABLE "concerts" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "concerts" ADD COLUMN "image_url" text NOT NULL;--> statement-breakpoint
ALTER TABLE "concerts" ADD COLUMN "notes" text;--> statement-breakpoint
ALTER TABLE "concerts" ADD COLUMN "rating" numeric;