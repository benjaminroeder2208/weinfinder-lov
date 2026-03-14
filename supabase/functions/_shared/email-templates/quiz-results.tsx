/// <reference types="npm:@types/react@18.3.1" />
import * as React from "npm:react@18.3.1";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Button,
  Hr,
  Img,
} from "npm:@react-email/components@0.0.22";

interface QuizResultsEmailProps {
  wineName: string;
  winery: string;
  description: string;
  price: string;
  grapeVariety?: string;
  region?: string;
  bodyStyle?: string;
  foodPairings?: string[];
  wineLink?: string;
  alternativeName?: string;
  alternativeWinery?: string;
  siteUrl: string;
}

export const QuizResultsEmail = ({
  wineName = "Spätburgunder Reserve",
  winery = "Weingut Muster",
  description = "Ein eleganter Rotwein mit feinen Aromen.",
  price = "€18,90",
  grapeVariety,
  region,
  bodyStyle,
  foodPairings = [],
  wineLink,
  alternativeName,
  alternativeWinery,
  siteUrl = "https://weinfinder.lovable.app",
}: QuizResultsEmailProps) => {
  const primaryColor = "hsl(345, 60%, 35%)";
  const primaryFg = "hsl(30, 20%, 97%)";
  const foreground = "hsl(350, 15%, 15%)";
  const mutedFg = "hsl(350, 8%, 45%)";
  const bgColor = "hsl(30, 25%, 95%)";
  const cardBg = "#ffffff";
  const borderColor = "hsl(30, 15%, 85%)";
  const goldColor = "hsl(38, 70%, 55%)";

  return (
    <Html>
      <Head />
      <Body
        style={{
          backgroundColor: bgColor,
          fontFamily: "'Inter', Arial, sans-serif",
          margin: "0",
          padding: "0",
        }}
      >
        <Container
          style={{
            maxWidth: "520px",
            margin: "0 auto",
            padding: "40px 20px",
          }}
        >
          {/* Header */}
          <Section style={{ textAlign: "center", marginBottom: "32px" }}>
            <Text
              style={{
                fontSize: "28px",
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: "700",
                color: foreground,
                margin: "0 0 4px",
              }}
            >
              🍷 Dein Wein-Match
            </Text>
            <Text
              style={{
                fontSize: "14px",
                color: mutedFg,
                margin: "0",
              }}
            >
              Weinfinder Premium
            </Text>
          </Section>

          {/* Main Wine Card */}
          <Section
            style={{
              backgroundColor: cardBg,
              borderRadius: "12px",
              padding: "28px 24px",
              border: `1px solid ${borderColor}`,
              marginBottom: "16px",
            }}
          >
            <Text
              style={{
                fontSize: "11px",
                fontWeight: "600",
                textTransform: "uppercase" as const,
                letterSpacing: "1px",
                color: goldColor,
                margin: "0 0 12px",
              }}
            >
              Top Empfehlung
            </Text>

            <Text
              style={{
                fontSize: "22px",
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: "700",
                color: foreground,
                margin: "0 0 4px",
              }}
            >
              {wineName}
            </Text>

            <Text
              style={{
                fontSize: "14px",
                color: mutedFg,
                margin: "0 0 16px",
              }}
            >
              {winery} · {price}
            </Text>

            <Text
              style={{
                fontSize: "14px",
                color: foreground,
                lineHeight: "1.6",
                margin: "0 0 16px",
              }}
            >
              {description}
            </Text>

            {/* Wine details */}
            {(grapeVariety || region || bodyStyle) && (
              <Section
                style={{
                  backgroundColor: bgColor,
                  borderRadius: "8px",
                  padding: "12px 16px",
                  marginBottom: "16px",
                }}
              >
                {grapeVariety && (
                  <Text style={{ fontSize: "13px", color: mutedFg, margin: "2px 0" }}>
                    <strong style={{ color: foreground }}>Rebsorte:</strong> {grapeVariety}
                  </Text>
                )}
                {region && (
                  <Text style={{ fontSize: "13px", color: mutedFg, margin: "2px 0" }}>
                    <strong style={{ color: foreground }}>Region:</strong> {region}
                  </Text>
                )}
                {bodyStyle && (
                  <Text style={{ fontSize: "13px", color: mutedFg, margin: "2px 0" }}>
                    <strong style={{ color: foreground }}>Stil:</strong> {bodyStyle}
                  </Text>
                )}
              </Section>
            )}

            {/* Food Pairings */}
            {foodPairings.length > 0 && (
              <Text
                style={{
                  fontSize: "13px",
                  color: mutedFg,
                  margin: "0 0 16px",
                }}
              >
                🍽 Passt zu: {foodPairings.join(", ")}
              </Text>
            )}

            {/* CTA */}
            {wineLink && (
              <Button
                href={wineLink}
                style={{
                  backgroundColor: primaryColor,
                  color: primaryFg,
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: "600",
                  padding: "12px 24px",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Zum Wein →
              </Button>
            )}
          </Section>

          {/* Alternative wine */}
          {alternativeName && (
            <Section
              style={{
                backgroundColor: cardBg,
                borderRadius: "12px",
                padding: "20px 24px",
                border: `1px solid ${borderColor}`,
                marginBottom: "16px",
              }}
            >
              <Text
                style={{
                  fontSize: "11px",
                  fontWeight: "600",
                  textTransform: "uppercase" as const,
                  letterSpacing: "1px",
                  color: mutedFg,
                  margin: "0 0 8px",
                }}
              >
                Ähnliche Alternative
              </Text>
              <Text
                style={{
                  fontSize: "16px",
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: "600",
                  color: foreground,
                  margin: "0 0 2px",
                }}
              >
                {alternativeName}
              </Text>
              {alternativeWinery && (
                <Text style={{ fontSize: "13px", color: mutedFg, margin: "0" }}>
                  {alternativeWinery}
                </Text>
              )}
            </Section>
          )}

          {/* Restart CTA */}
          <Section style={{ textAlign: "center", marginTop: "24px" }}>
            <Button
              href={siteUrl}
              style={{
                color: primaryColor,
                fontSize: "13px",
                fontWeight: "600",
                textDecoration: "underline",
                background: "none",
                border: "none",
              }}
            >
              Quiz nochmal starten
            </Button>
          </Section>

          {/* Footer */}
          <Hr style={{ borderColor: borderColor, margin: "32px 0 16px" }} />
          <Text
            style={{
              fontSize: "12px",
              color: mutedFg,
              textAlign: "center",
              margin: "0",
            }}
          >
            Weinfinder Premium · Deine persönliche Weinberatung
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default QuizResultsEmail;
