ALTER TABLE "concert_user" DROP CONSTRAINT "concert_user_concert_id_concerts_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "concert_user" ADD CONSTRAINT "concert_user_concert_id_concerts_id_fk" FOREIGN KEY ("concert_id") REFERENCES "concerts"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
