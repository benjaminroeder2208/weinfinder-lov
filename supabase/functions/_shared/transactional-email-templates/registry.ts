import { template as pilotRequestNotification } from './pilot-request-notification.tsx'
import { template as pilotRequestConfirmation } from './pilot-request-confirmation.tsx'

export interface TemplateEntry {
  component: (props: any) => any
  subject: string | ((data: any) => string)
  displayName?: string
  previewData?: Record<string, any>
  to?: string
}

export const TEMPLATES: Record<string, TemplateEntry> = {
  'pilot-request-notification': pilotRequestNotification,
  'pilot-request-confirmation': pilotRequestConfirmation,
}