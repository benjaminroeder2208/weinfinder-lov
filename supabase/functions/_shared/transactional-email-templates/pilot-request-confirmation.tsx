import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  name?: string
}

const Email = ({ name }: Props) => (
  <Html lang="de" dir="ltr">
    <Head />
    <Preview>Vielen Dank für Ihre Anfrage beim Premium Weinfinder</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Vielen Dank für Ihre Anfrage</Heading>
        <Text style={p}>
          {name ? `Liebe/r ${name},` : 'Hallo,'}
        </Text>
        <Text style={p}>
          wir haben Ihre Anfrage zum Piloten des Premium Weinfinders erhalten. Vielen Dank
          für Ihr Interesse an unserem digitalen Sommelier.
        </Text>
        <Text style={p}>
          Wir melden uns in den nächsten Tagen persönlich bei Ihnen mit den nächsten
          Schritten und Details zur Einbindung in Ihren Weingut-Shop.
        </Text>
        <Text style={p}>
          Bei Rückfragen erreichen Sie uns jederzeit unter{' '}
          <span style={accent}>info@premium-weinfinder.de</span>.
        </Text>
        <Hr style={hr} />
        <Text style={signature}>Herzliche Grüße</Text>
        <Text style={signatureName}>Ihr Team vom Premium Weinfinder</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: 'Ihre Anfrage beim Premium Weinfinder',
  displayName: 'Pilotanfrage (Bestätigung)',
  previewData: { name: 'Anna Muster' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Georgia, "Playfair Display", serif', color: '#1a1a1a' }
const container = { padding: '36px 28px', maxWidth: '560px', margin: '0 auto' }
const h1 = { fontSize: '26px', fontWeight: 600, margin: '0 0 20px', color: '#5b1a2a' }
const p = { fontSize: '15px', lineHeight: '24px', color: '#1a1a1a', margin: '0 0 14px', fontFamily: 'Inter, Arial, sans-serif' }
const accent = { color: '#5b1a2a', fontWeight: 600 }
const hr = { borderColor: '#ecdfcf', margin: '28px 0 16px' }
const signature = { fontSize: '14px', color: '#333', margin: '0', fontFamily: 'Inter, Arial, sans-serif' }
const signatureName = { fontSize: '14px', color: '#5b1a2a', fontWeight: 600, margin: '4px 0 0', fontFamily: 'Inter, Arial, sans-serif' }