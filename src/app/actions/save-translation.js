"use server";
import { auth } from "@clerk/nextjs/server";
import { neon } from "@neondatabase/serverless";

export async function saveTranslation(sourceLan, targetLan, sourceText, translatedText) {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn();
  const sql = neon(process.env.DATABASE_URL);
  const response = await sql`
  INSERT INTO translations (
    user_id,
    source_language,
    target_language,
    source_text,
    translated_text
  ) VALUES (
    ${userId},
    ${sourceLan},
    ${targetLan},
    ${sourceText},
    ${translatedText}
  )`;
  console.log(response);
}
