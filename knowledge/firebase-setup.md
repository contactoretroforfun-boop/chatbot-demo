# Nuvora Agency - Firebase Configuration & Services

The project uses a "Hybrid Mock-Live" architecture to ensure the UI remains functional even without active API keys (Demo Mode).

## Initialization (`src/lib/firebase.ts`)
- **Environment Variables**: Mandatory for live mode.
  - `NEXT_PUBLIC_FIREBASE_API_KEY`
  - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
  - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- **Validation**: The initialization checks if keys are present and not equal to "your_api_key". If invalid, it silently falls back to Mock mode.

## Data Structure (`src/services/firebase.ts`)
- **Collections**:
  - `users`: Basic profile info.
  - `businesses`: Business-specific settings.
  - `leads`: Captured contact info from AI interactions.
  - `appointments`: Scheduled dates/times.
  - `settings`: Global AI personality and FAQs.

## Service Pattern
- **`firebaseService`**: A wrapper that handles all Firestore calls.
- **Mock Fallback**: Every method in `firebaseService` includes a check for `db`. If `db` is null, it returns predefined mock data or logs actions to the console, preventing crashes in development or portfolio views.
