import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Link,
  Text,
  Row,
} from "@react-email/components";

interface EmailProps {
  position: number;
}

export const StakenetWelcomeEmail = ({ position }: EmailProps) => (
  <Html>
    <Head />
    <Preview>
      Thank you for joining the waitlist of Stakenet. Hold on to your seats
      while we bring online betting magic to you.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://res.cloudinary.com/dlnsqeeos/image/upload/v1711558948/sn2ps86urc3ek11tlp6d.png`}
          width="160"
          height="35"
          alt="Stakenet"
          style={logo}
        />
        <Section style={rounded}>
          <Column>
            <Text style={greetingTitle}>Hey there mate,</Text>
            <Text style={greetingBody}>
              Thank you for joining the waitlist of Stakenet. Hold on to your
              seats while we bring online betting magic to you.
            </Text>
          </Column>
        </Section>
        <Section style={{ marginTop: "32px" }}></Section>
        <Text style={waitlistText}>
          You&apos;re{" "}
          <span style={positionText}>#{`${position.toString()}`}</span> in line
        </Text>

        <Text style={paragraphDark}>Invite friends to move up in line</Text>

        <Section style={{ marginTop: "32px" }}></Section>
        <Section style={link}>
          <Column style={center}>
            <Link
              href="https://stakenet.co"
              target="_blank"
              style={{
                textAlign: "center",
                fontSize: "20px",
                color: "#fff",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              }}
            >
              https://stakenet.co
            </Link>
          </Column>
        </Section>
        <Text style={paragraphDark}>
          Copy and share this personalized link with your friends
        </Text>

        <Container style={containerTwo}>
          <Img
            src={`https://res.cloudinary.com/dlnsqeeos/image/upload/v1711559272/gzqorgnsdo0im8xqd4ed.png`}
            width="380"
            height="50"
            alt="Stakenet"
            style={logo}
          />
        </Container>

        <Text style={paragraph}>
          Stakenet will be available on both iOS and Android <br />
          on release day
        </Text>

        <Text style={paragraphLast}>
          We will let you know as soon as Stakenet becomes available
        </Text>
        <Section style={{ marginTop: "20px" }}></Section>
        <Hr style={hr} />
        <Section style={{ marginTop: "20px", marginBottom: "20px" }}></Section>
        <Section style={icons}>
          <Row>
            <Column align="left" style={{ paddingRight: "0px" }}>
              <Link href="/">
                <Img
                  width="28"
                  height="28"
                  src={`https://res.cloudinary.com/dlnsqeeos/image/upload/v1711560433/viuxxebxc1kf31dk9xow.png`}
                />
              </Link>
            </Column>
            <Column align="center" style={{ paddingLeft: "0px" }}>
              <Link href="https://instagram.com/stakenetapp">
                <Img
                  width="28"
                  height="28"
                  src={`https://res.cloudinary.com/dlnsqeeos/image/upload/v1711560434/fpx8vittc6qaez36rb3s.png`}
                />
              </Link>
            </Column>
            <Column align="right" style={{ paddingLeft: "0px" }}>
              <Link href="https://twitter.com/stakenetapp">
                <Img
                  width="28"
                  height="28"
                  src={`https://res.cloudinary.com/dlnsqeeos/image/upload/v1711560434/imw13igdqzyyn7hsplvy.png`}
                />
              </Link>
            </Column>
          </Row>
        </Section>
        <Section style={{ marginTop: "20px" }}></Section>
        <Text style={footer}>© 2024 Staknet All Rights Reserved</Text>
        <Text style={footer}>58 Okodee Road, KNUST</Text>
        <Text style={footer}>Kumasi, Ghana, West Africa</Text>
      </Container>
    </Body>
  </Html>
);

StakenetWelcomeEmail.PreviewProps = {
  position: 123,
} as EmailProps;

export default StakenetWelcomeEmail;

const icons = {
  textAlign: "center" as const,
  maxWidth: "200px",
  margin: "0 auto",
};

const main = {
  backgroundColor: "#0E0E0E",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "40px 20px 48px 20px",
};

const containerTwo = {
  margin: "0 auto",
  padding: "40px 20px 8px 20px",
};

const rounded = {
  marginTop: "40px",
  backgroundColor: "#1B1B1B",
  borderRadius: "16px",
  padding: "10px 20px",
};
const link = {
  border: "1px solid #323232",
  backgroundColor: "#0E0E0E",
  borderRadius: "12px",
  padding: "16px",
};

const socialMediaIcon = {
  display: "inline",
  marginLeft: "32px",
};
const center = {
  textAlign: "center" as const,
};
const greetingBody = {
  color: "#fff",
  fontSize: "16px",
};

const positionText = {
  color: "#AECE2A",
};

const waitlistText = {
  textAlign: "center" as const,
  color: "#fff",
  fontWeight: "bold",
  fontSize: "28px",
};

const greetingTitle = {
  color: "#fff",
  fontSize: "18px",
  lineHeight: "10px",
  fontWeight: "bold",
};
const logo = {
  margin: "0 auto",
};

const paragraph = {
  color: "#fff",
  textAlign: "center" as const,
  fontSize: "16px",
  lineHeight: "26px",
};
const paragraphDark = {
  color: "#848484",
  textAlign: "center" as const,
  fontSize: "16px",
  lineHeight: "26px",
};
const paragraphLast = {
  color: "#fff",
  textAlign: "center" as const,
  fontSize: "16px",
  margin: "60px 0 0 0",
  lineHeight: "26px",
};

const hr = {
  borderColor: "#323232",
  margin: "20px 0",
};

const footer = {
  textAlign: "center" as const,
  color: "#848484",
  fontSize: "14px",
  lineHeight: "14px",
};
