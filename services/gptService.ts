import { ArmiIntent } from "../types/armi-intents";

const BASE = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const GPT_FN_URL = `${BASE}/functions/v1/armi-gpt`;

export async function understandUserCommand(message: string, context?: object, tier: "default" | "lite" = "default"): Promise<ArmiIntent> {
  const res = await fetch(GPT_FN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, context, tier })
  });
  const data = await res.json();
  if (!data.ok) throw new Error(data.error || "GPT failed");
  return data.result as ArmiIntent;
}