ALTER TABLE "concert_user" ADD COLUMN "notes" text;--> statement-breakpoint
ALTER TABLE "concert_user" ADD COLUMN "rating" numeric;--> statement-breakpoint
ALTER TABLE "concerts" DROP COLUMN IF EXISTS "notes";--> statement-breakpoint
ALTER TABLE "concerts" DROP COLUMN IF EXISTS "rating";