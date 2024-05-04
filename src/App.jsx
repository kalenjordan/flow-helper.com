import "./App.css";

import enTranslations from "@shopify/polaris/locales/en.json";
import {
  AppProvider,
  Badge,
  Banner,
  Bleed,
  Button,
  Box,
  Card,
  Divider,
  Grid,
  Page,
  Text,
  Thumbnail,
  InlineStack,
  FooterHelp,
  Layout,
  Link,
  Frame,
  BlockStack,
  Avatar,
} from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import { CartIcon, CalendarIcon } from "@shopify/polaris-icons";
import { useState, useCallback } from "react";
import { SimpleIndexTableExample } from "./IndexTable";

function App() {
  const [dismissed, setDismissed] = useState(false);

  return (
    <AppProvider i18n={enTranslations}>
      <Frame>
        <Page>
          <Box paddingBlockStart={{ xs: 400, lg: 400 }}>
            <BlockStack gap="500">
              <BlockStack gap="200">
                <Text
                  as="h1"
                  variant="headingXl"
                  alignment="center"
                  fontWeight="regular"
                >
                  Shopify Automation
                  As&nbsp;A&nbsp;Service&nbsp;(And&nbsp;As&nbsp;An&nbsp;App!)
                </Text>
                <Box paddingInline={{ xs: 600, lg: 3200 }}>
                  <Text
                    alignment="center"
                    variant="headingMd"
                    fontWeight="regular"
                    className="subtitle"
                  >
                    Whether using Shopify Flow, IPaaS systems, or writin custom
                    - if you need any automation done in Shopify or integrations
                    with systems, I'm your guy.
                  </Text>
                </Box>
              </BlockStack>
              <Box paddingInline={{ xs: "400", sm: "0" }}>
                <Card>
                  <Bleed marginInline="400" marginBlock="400">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `<video width="100%" autoplay muted>
                      <source src="flow-hire.mp4" />
                    </video>`,
                      }}
                    />
                  </Bleed>
                </Card>
              </Box>
              <BlockStack gap="100">
                <Box
                  paddingBlockStart={{ xs: 200, sm: 400, md: 800 }}
                  paddingBlockEnd={{ xs: 200, sm: 400, md: 800 }}
                >
                  <Text alignment="center" tone="subdued">
                    Brands I've worked with
                  </Text>
                  <InlineStack gap={{ xs: 0, sm: 100, lg: 800 }} align="center">
                    <img
                      className="logo chubbies"
                      src="logo-chubbies.png"
                      style={{ height: "40px" }}
                    />
                    <img
                      className="logo rothys"
                      src="logo-rothys.png"
                      style={{ height: "35px", marginTop: "5px" }}
                    />
                  </InlineStack>
                </Box>
              </BlockStack>
              <Layout>
                <Layout.Section>
                  <BlockStack gap="500">
                    <Card title="Order details" sectioned>
                      <BlockStack gap="300">
                        <Text as="h2" variant="headingMd">
                          Services
                        </Text>

                        <Text as="p" variant="bodyLg">
                          Having built hundreds of workflow automations for
                          Shopify using 3rd party apps, Flow, and custom code,
                          if there's something that's possible to do in Shopify,
                          I should be able to do it for you. And usually pretty
                          quickly.
                        </Text>
                        <Text as="p" variant="bodyLg">
                          Don't bang your head against the wall trying to
                          articulate exactly what needs to happen. Figuring it
                          out is my specialty.
                        </Text>
                        <Text as="p" variant="bodyLg">
                          So, if you're looking for help with anything along
                          these lines, I can't wait to get started!
                        </Text>
                        <Text as="p" variant="bodyLg">
                          Hit me on{" "}
                          <Link
                            monochrome
                            url="https://twitter.com/kalenjordan"
                          >
                            twitter
                          </Link>
                          {",  "}
                          <Link monochrome url="https://linkedin.com/in/kalen">
                            linkedin
                          </Link>
                          {", or "}
                          <Link monochrome url="mailto:kalenj@gmail.com">
                            email
                          </Link>
                          .
                        </Text>
                        <Box padding="200">
                          <Divider borderColor="border" />
                        </Box>
                        <InlineStack gap="200">
                          <span>
                            <Thumbnail
                              as="span"
                              size="small"
                              source="kalen-avatar-circle.png"
                            />
                          </span>
                          <Text as="p" variant="bodyLg">
                            Kalen Jordan
                            <br />
                            Shopify Automation Specialist
                          </Text>
                        </InlineStack>
                      </BlockStack>
                    </Card>
                    <Card>
                      <Grid columns={{ sm: 3 }}>
                        <Grid.Cell
                          columnSpan={{ xs: 6, sm: 4, md: 1, lg: 4, xl: 4 }}
                        >
                          <BlockStack gap="300" as="lfdsafdsa">
                            <Text as="h2" variant="headingMd">
                              10 Hours
                            </Text>
                            <Text as="p" variant="bodyLg">
                              With 10 hours of consulting, let's get off to the
                              races with a quick win.
                            </Text>
                            <span>
                              <Button
                                icon={CartIcon}
                                url="https://buy.stripe.com/dR601u0mX4eP9vafZ4"
                                target="_blank"
                              >
                                $1,200
                              </Button>
                            </span>
                          </BlockStack>
                        </Grid.Cell>
                        <Grid.Cell
                          columnSpan={{ xs: 6, sm: 4, md: 1, lg: 4, xl: 4 }}
                        >
                          <BlockStack gap="300">
                            <Text as="h2" variant="headingMd">
                              20 Hours
                            </Text>
                            <Text as="p" variant="bodyLg">
                              With 20 hours, we'll have a little more time to
                              get things just right.
                            </Text>
                            <span>
                              <Button
                                url="https://buy.stripe.com/7sI15yedNeTtazeeV1"
                                target="_blank"
                                icon={CartIcon}
                              >
                                $2,100
                              </Button>
                            </span>
                          </BlockStack>
                        </Grid.Cell>
                        <Grid.Cell
                          columnSpan={{ xs: 6, sm: 4, md: 1, lg: 4, xl: 4 }}
                        >
                          <BlockStack gap="300">
                            <InlineStack gap="200">
                              <Text as="h2" variant="headingMd">
                                30 Hours
                              </Text>
                              <Badge gap="500" tone="success">
                                Best Value
                              </Badge>
                            </InlineStack>
                            <Text as="p" variant="bodyLg">
                              With a 30 hour consulting package, we're ready to
                              start cooking with fire.
                            </Text>
                            <span>
                              <Button
                                url="https://buy.stripe.com/28oaG85Hh3aL6iY3ch"
                                target="_blank"
                                icon={CartIcon}
                              >
                                $3,000
                              </Button>
                            </span>
                          </BlockStack>
                        </Grid.Cell>
                      </Grid>
                    </Card>
                    {SimpleIndexTableExample()}
                  </BlockStack>
                </Layout.Section>
                <Layout.Section variant="oneThird">
                  <BlockStack gap="500">
                    <Card title="Tags" sectioned>
                      <BlockStack gap="300">
                        <InlineStack gap="200">
                          <Avatar size="xs" source="flow-helper-icon.png" />
                          <Text as="h2" variant="headingMd">
                            The Shopify App
                          </Text>
                        </InlineStack>
                        <Text as="p" variant="bodyLg">
                          Flow Helper is a Shopify app that adds missing
                          triggers and actions to use natively within Flow,
                          including bulk flow runs.
                        </Text>
                        <span>
                          <Badge as="span" tone="info">
                            Pending Review
                          </Badge>
                        </span>
                      </BlockStack>
                    </Card>
                    <Card>
                      <Bleed marginInline="400" marginBlock="400">
                        <video
                          width="100%"
                          controls="controls"
                          poster="welcome.jpg"
                        >
                          <source src="welcome.mp4" />
                        </video>
                      </Bleed>
                    </Card>
                    {dismissed ? null : (
                      <Banner
                        title="My current availability"
                        tone="info"
                        action={{
                          content: "Book a call",
                          variant: "primary",
                          url: "https://cal.com/kalenjordan",
                          target: "_blank",
                          icon: CalendarIcon,
                        }}
                        secondaryAction={{
                          content: "Email me",
                          url: "mailto:kalenj@gmail.com",
                        }}
                        onDismiss={() => {
                          setDismissed(!dismissed);
                        }}
                      >
                        <Text as="p" variant="bodyLg">
                          I currently have around 20 hours/week available.You
                          can prepay by selecting a package or feel free to
                          reach out with any questions.
                        </Text>
                      </Banner>
                    )}
                  </BlockStack>
                </Layout.Section>
              </Layout>
              <FooterHelp>
                <BlockStack gap="500">
                  <BlockStack gap="400">
                    <Text alignment="center" tone="subdued">
                      Systems I've integrated with
                    </Text>
                    <InlineStack gap="600" align="center">
                      <img
                        className="logo shopify"
                        src="logo-shopify.png"
                        alt="Shopify Logo"
                      />
                      <img
                        className="logo shopify-plus"
                        src="logo-shopify-plus.png"
                        alt="Shopify Plus Logo"
                      />
                      <img className="logo klaviyo" src="logo-klaviyo.png" />
                      <img className="logo xero" src="logo-xero.png" />
                      <img className="logo recharge" src="logo-recharge.png" />
                      <img className="logo" src="logo-netsuite.png" />
                    </InlineStack>
                  </BlockStack>
                  <Divider borderColor="border" />
                  <Text alignment="center">Made with 💚 by Kalen Jordan</Text>
                </BlockStack>
              </FooterHelp>
            </BlockStack>
          </Box>
        </Page>
      </Frame>
    </AppProvider>
  );
}

export default App;
