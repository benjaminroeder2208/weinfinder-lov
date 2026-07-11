import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  name?: string
  email?: string
  company?: string
  shop_url?: string
  phone?: string
  message?: string
}

const Email = ({ name, email, company, shop_url, phone, message }: Props) => (
  <Html lang="de" dir="ltr">
    <Head />
    <Preview>Neue Pilotanfrage von {name || 'Interessent'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Neue Pilotanfrage</Heading>
        <Text style={intro}>
          Es ist eine neue Anfrage über das Kontaktformular auf premium-weinfinder.de eingegangen.
        </Text>
        <Section style={card}>
          <Row label="Name" value={name} />
          <Row label="E-Mail" value={email} />
          <Row label="Weingut / Firma" value={company} />
          <Row label="Shop-URL" value={shop_url} />
          <Row label="Telefon" value={phone} />
        </Section>
        {message ? (
          <Section style={card}>
            <Text style={label}>Nachricht</Text>
            <Text style={messageText}>{message}</Text>
          </Section>
        ) : null}
        <Hr style={hr} />
        <Text style={footer}>Premium Weinfinder · Interne Benachrichtigung</Text>
      </Container>
    </Body>
  </Html>
)

const Row = ({ label: l, value }: { label: string; value?: string }) => (
  <Text style={rowText}>
    <span style={label}>{l}: </span>
    <span style={rowValue}>{value && value.length > 0 ? value : '—'}</span>
  </Text>
)

export const template = {
  component: Email,
  subject: (d: Props) => `Neue Pilotanfrage – ${d?.name || 'Interessent'}`,
  displayName: 'Pilotanfrage (Benachrichtigung)',
  to: 'info@premium-weinfinder.de',
  previewData: {
    name: 'Anna Muster',
    email: 'anna@weingut-muster.de',
    company: 'Weingut Muster',
    shop_url: 'https://weingut-muster.de',
    phone: '+49 6721 000000',
    message: 'Wir würden gerne am Piloten teilnehmen.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Georgia, "Playfair Display", serif', color: '#1a1a1a' }
const container = { padding: '32px 28px', maxWidth: '560px', margin: '0 auto' }
const h1 = { fontSize: '24px', fontWeight: 600, margin: '0 0 12px', color: '#5b1a2a' }
const intro = { fontSize: '15px', lineHeight: '22px', color: '#333', margin: '0 0 20px' }
const card = { backgroundColor: '#faf7f2', border: '1px solid #ecdfcf', borderRadius: '6px', padding: '18px 20px', margin: '0 0 16px' }
const rowText = { fontSize: '14px', lineHeight: '22px', margin: '4px 0', fontFamily: 'Inter, Arial, sans-serif' }
const label = { color: '#5b1a2a', fontWeight: 600 }
const rowValue = { color: '#1a1a1a' }
const messageText = { fontSize: '14px', lineHeight: '22px', color: '#1a1a1a', margin: '8px 0 0', whiteSpace: 'pre-wrap' as const, fontFamily: 'Inter, Arial, sans-serif' }
const hr = { borderColor: '#ecdfcf', margin: '24px 0 12px' }
const footer = { fontSize: '12px', color: '#888', textAlign: 'center' as const, fontFamily: 'Inter, Arial, sans-serif' }