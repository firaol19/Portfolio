// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a user loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

try {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN, // Use an environment variable for the DSN

    // Add optional integrations for additional features
    integrations: [
      Sentry.replayIntegration({
        maskAllInputs: true,
        blockAllMedia: true,
      }),
      Sentry.feedbackIntegration({
        // Additional SDK configuration goes in here, for example:
        colorScheme: "dark",
      }),
    ],

    // Define how likely traces are sampled.
    tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.2 : 1, // Adjust for production

    // Define how likely Replay events are sampled.
    replaysSessionSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1,

    // Define how likely Replay events are sampled when an error occurs.
    replaysOnErrorSampleRate: 1.0,

    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: process.env.NODE_ENV !== 'production', // Enable debug in development
  });
} catch (error) {
  console.error("Sentry initialization failed:", error);
}
