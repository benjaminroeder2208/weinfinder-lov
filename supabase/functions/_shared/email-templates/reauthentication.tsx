/// <reference types="npm:@types/react@18.3.1" />

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

interface ReauthenticationEmailProps {
  token: string
}

export const ReauthenticationEmail = ({ token }: ReauthenticationEmailProps) => (
  <Html lang="de" dir="ltr">
    <Head />
    <Preview>Dein Bestätigungscode – Weinfinder Premium</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={brand}>🍷 Weinfinder Premium</Text>
        <Heading style={h1}>Bestätigungscode</Heading>
        <Text style={text}>Verwende den folgenden Code, um deine Identität zu bestätigen:</Text>
        <Text style={codeStyle}>{token}</Text>
        <Hr style={hr} />
        <Text style={footer}>
          Dieser Code ist nur kurze Zeit gültig. Falls du ihn nicht angefordert hast,
          kannst du diese E-Mail ignorieren.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default ReauthenticationEmail

const foreground = 'hsl(350, 15%, 15%)'
const mutedFg = 'hsl(350, 8%, 45%)'
const bgColor = 'hsl(30, 25%, 95%)'
const borderColor = 'hsl(30, 15%, 85%)'

const main = { backgroundColor: bgColor, fontFamily: "'Inter', Arial, sans-serif" }
const container = { maxWidth: '520px', margin: '0 auto', padding: '40px 24px' }
const brand = { fontSize: '14px', color: mutedFg, margin: '0 0 24px', textAlign: 'center' as const }
const h1 = {
  fontSize: '24px',
  fontWeight: 'bold' as const,
  fontFamily: "'Playfair Display', Georgia, serif",
  color: foreground,
  margin: '0 0 20px',
}
const text = { fontSize: '14px', color: mutedFg, lineHeight: '1.6', margin: '0 0 25px' }
const codeStyle = {
  fontFamily: 'Courier, monospace',
  fontSize: '28px',
  fontWeight: 'bold' as const,
  color: foreground,
  letterSpacing: '4px',
  margin: '0 0 30px',
}
const hr = { borderColor, margin: '30px 0 16px' }
const footer = { fontSize: '12px', color: mutedFg, margin: '0' }
