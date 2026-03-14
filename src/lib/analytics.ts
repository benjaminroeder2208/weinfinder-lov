/**
 * Analytics-ready event tracking.
 * Currently logs to console. Replace with real analytics SDK later.
 */

type AnalyticsEvent =
  | "quiz_started"
  | "question_answered"
  | "result_viewed"
  | "lead_capture_opened"
  | "lead_capture_submitted"
  | "wine_cta_clicked"
  | "share_clicked"
  | "restart_clicked";

export function trackEvent(event: AnalyticsEvent, data?: Record<string, unknown>) {
  if (import.meta.env.DEV) {
    console.log(`[Analytics] ${event}`, data ?? "");
  }
  // Future: window.gtag?.("event", event, data);
  // Future: posthog?.capture(event, data);
}
