# ARMi GPT Edge Function

This Edge Function processes natural language input and returns structured JSON intents that ARMi can execute.

## Local Development

```bash
supabase functions serve --env-file supabase/.env
```

## Deployment

```bash
supabase functions deploy armi-gpt
```

## Environment Setup

```bash
supabase secrets set --env-file supabase/.env
```

## Usage

The function accepts POST requests with the following payload:

```json
{
  "message": "Add Sarah to my contacts, she's a friend from work",
  "context": {},
  "tier": "lite"
}
```

Returns structured intents like:

```json
{
  "ok": true,
  "result": {
    "intent": "add_profile",
    "args": {
      "name": "Sarah",
      "relationshipType": "friend",
      "tags": ["work"],
      "notes": "Friend from work"
    }
  }
}
```