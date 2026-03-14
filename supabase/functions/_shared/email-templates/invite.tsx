/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'

interface InviteEmailProps {
  siteName: string
  siteUrl: string
  confirmationUrl: string
}

export const InviteEmail = ({
  siteName,
  siteUrl,
  confirmationUrl,
}: InviteEmailProps) => (
  <Html lang="de" dir="ltr">
    <Head />
    <Preview>Du wurdest zu Weinfinder Premium eingeladen</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={brand}>🍷 Weinfinder Premium</Text>
        <Heading style={h1}>Du bist eingeladen!</Heading>
        <Text style={text}>
          Du wurdest eingeladen,{' '}
          <Link href={siteUrl} style={link}>
            <strong>Weinfinder Premium</strong>
          </Link>{' '}
          beizutreten. Klicke auf den Button, um dein Konto zu erstellen.
        </Text>
        <Button style={button} href={confirmationUrl}>
          Einladung annehmen
        </Button>
        <Hr style={hr} />
        <Text style={footer}>
          Falls du diese Einladung nicht erwartet hast, kannst du diese E-Mail ignorieren.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default InviteEmail

const primary = 'hsl(345, 60%, 35%)'
const primaryFg = 'hsl(30, 20%, 97%)'
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
const link = { color: 'inherit', textDecoration: 'underline' }
const button = {
  backgroundColor: primary,
  color: primaryFg,
  fontSize: '14px',
  fontWeight: '600' as const,
  borderRadius: '12px',
  padding: '12px 24px',
  textDecoration: 'none',
}
const hr = { borderColor, margin: '30px 0 16px' }
const footer = { fontSize: '12px', color: mutedFg, margin: '0' }
