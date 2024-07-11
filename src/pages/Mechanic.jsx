import "../main.css";

import enTranslations from "@shopify/polaris/locales/en.json";
import {
  AppProvider,
  Badge,
  Bleed,
  Box,
  Button,
  Card,
  DescriptionList,
  Divider,
  Icon,
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
import {
  AutomationIcon,
  CalendarIcon,
  DiscountIcon,
  ReceiptRefundIcon,
  ReplayIcon,
  ReturnIcon,
  ThemeIcon,
  ImportIcon,
  PaymentIcon,
  WorkIcon,
} from "@shopify/polaris-icons";
import { useState } from "react";
import { SimpleIndexTableExample } from "../components/MechanicIndexTable";
import { Availability } from "../components/Availability";
import RatesMechanic from "../components/RatesMechanic";
import useDocumentTitle from "../useDocumentTitle";

function App() {
  const [dismissed, setDismissed] = useState(false);
  const [showNewsletter, setShowNewsletter] = useState(false);

  // useDocumentTitle("Hire A Shopify Mechanic | Kalen Jordan");

  return (
    <AppProvider i18n={enTranslations}>
      <Frame>
        <Page>
          <Box paddingBlockStart={{ xs: 400, lg: 400 }}>
            <BlockStack gap="500">
              <BlockStack gap="200">
                <Text as="h1" variant="headingXl" alignment="center" fontWeight="regular">
                  Hire A Shopify Mechanic
                </Text>
                <Box paddingInline={{ xs: 600, lg: 3200 }}>
                  <Text alignment="center" variant="bodyLg" fontWeight="400" className="subtitle">
                    I specialize in automations for Shopify and love Mechanic!
                  </Text>
                </Box>
              </BlockStack>
              <Box paddingInline={{ xs: "400", sm: "0" }}>
                <Card>
                  <Bleed marginInline="400" marginBlock="400">
                    <img style={{ width: "100%", marginBottom: "-7px" }} src="/flow-hire.png"></img>
                  </Bleed>
                </Card>
              </Box>
              <BlockStack gap="100">
                <Box paddingBlockStart={{ xs: 200, sm: 400, md: 800 }} paddingBlockEnd={{ xs: 200, sm: 400, md: 800 }}>
                  <Text alignment="center" tone="subdued">
                    Brands I've worked with
                  </Text>
                  <InlineStack gap={{ xs: 0, sm: 100, lg: 800 }} align="center">
                    <img className="logo chubbies" src="/logo-chubbies.png" style={{ height: "30px" }} />
                    <img className="logo rothys" src="/logo-rothys.png" style={{ height: "25px", marginTop: "3px" }} />
                    <img className="logo rothys" src="/logo-rainbow.png" style={{ height: "25px" }} />
                  </InlineStack>
                </Box>
              </BlockStack>
              <Layout>
                <Layout.Section>
                  <BlockStack gap="500">
                    <Card title="Order details" sectioned>
                      <BlockStack gap="300">
                        <Text as="h2">Hey there!</Text>

                        <Text as="p" variant="bodyLg">
                          Having built hundreds of workflow automations for Shopify using Mechanic, Flow, custom code,
                          and other tools, if there's something that's possible to do in Shopify, I can do it for you.
                          And usually pretty damn quick.
                        </Text>
                        <Text as="p" variant="bodyLg">
                          Don't bang your head against the wall trying to articulate exactly what needs to happen.
                          Figuring it out is my specialty.
                        </Text>
                        <Text as="p" variant="bodyLg">
                          So, if you're looking for help with anything along these lines, I can't wait to get started!
                        </Text>
                        <Text as="p" variant="bodyLg">
                          Hit me on{" "}
                          <Link monochrome url="https://twitter.com/kalenjordan">
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
                            <Thumbnail as="span" size="small" source="/kalen-avatar-circle.png" />
                          </span>
                          <Text as="p" variant="bodyLg">
                            Kalen Jordan
                            <br />
                            Shopify Automation Specialist
                          </Text>
                        </InlineStack>
                      </BlockStack>
                    </Card>
                    <Card title="Order details" background="bg-surface-secondary">
                      <BlockStack gap="300">
                        <DescriptionList
                          items={[
                            {
                              term: (
                                <InlineStack as="span" align="start" gap="200">
                                  <span>
                                    <Icon source={CalendarIcon} as="span" />
                                  </span>
                                  Schedule a call
                                </InlineStack>
                              ),
                              description: "We'll jump on a call to talk through your needs.",
                            },
                            {
                              term: (
                                <InlineStack as="span" align="start" gap="200">
                                  <span>
                                    <Icon source={PaymentIcon} as="span" />
                                  </span>
                                  Prepayment
                                </InlineStack>
                              ),
                              description:
                                "Once you feel comfortable, you can make a prepayment to lock you into my schedule, per my next availability.",
                            },
                            {
                              term: (
                                <InlineStack as="span" align="start" gap="200">
                                  <span>
                                    <Icon source={WorkIcon} as="span" />
                                  </span>
                                  Begin work
                                </InlineStack>
                              ),
                              description:
                                "I'll begin work and track hours on a daily basis so you have visibility into what's happening.",
                            },
                            {
                              term: (
                                <InlineStack as="span" align="start" gap="200">
                                  <span>
                                    <Icon source={ReplayIcon} as="span" />
                                  </span>
                                  Go monthly?
                                </InlineStack>
                              ),
                              description:
                                "Once we're done with the initial batch of hours, if things are going well and you have more work to get done, we can make it a monthly retainer.",
                            },
                            {
                              term: (
                                <InlineStack as="span" align="start" gap="200">
                                  <span>
                                    <Icon source={ReceiptRefundIcon} as="span" />
                                  </span>
                                  Refund?
                                </InlineStack>
                              ),
                              description:
                                "At any time, you can request a refund for any of the unused hours that were prepaid.",
                            },
                          ]}
                        />
                      </BlockStack>
                    </Card>
                    {SimpleIndexTableExample()}
                  </BlockStack>
                </Layout.Section>
                <Layout.Section variant="oneThird">
                  <BlockStack gap="500">
                    <Card>
                      <BlockStack gap="300">
                        <Bleed marginBlockStart={400} marginInline={400}>
                          <div class="newsletter-card-title">
                            <InlineStack gap="200">
                              <Icon source={AutomationIcon} as="span" />
                              <Text as="h2" variant="headingMd">
                                The Shopify Automation Newsletter
                              </Text>
                            </InlineStack>
                          </div>
                        </Bleed>
                        <Text as="p" variant="bodyLg">
                          Find out interesting ways to automate Shopify using Flow, Mechanic, and other tools.
                        </Text>
                        {!showNewsletter && (
                          <InlineStack as="span" align="start" gap="200">
                            <Button as="span" variant="primary" target="_blank" onClick={() => setShowNewsletter(true)}>
                              Subscribe For Free
                            </Button>
                          </InlineStack>
                        )}
                        {showNewsletter && (
                          <iframe
                            src="https://embeds.beehiiv.com/28464cbf-e8c2-4cac-ad4a-7353b446aab9?slim=true"
                            data-test-id="beehiiv-embed"
                            height="52"
                            frameborder="0"
                            scrolling="no"
                            style={{ width: "100%" }}
                          ></iframe>
                        )}
                      </BlockStack>
                    </Card>
                    <Availability showBookCall={true} />
                    <RatesMechanic showButtons={false} />
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
                      <img className="logo shopify" src="/logo-shopify.png" alt="Shopify Logo" />
                      <img className="logo shopify-plus" src="/logo-shopify-plus.png" alt="Shopify Plus Logo" />
                      <img className="logo klaviyo" src="/logo-klaviyo.png" />
                      <img className="logo xero" src="/logo-xero.png" />
                      <img className="logo recharge" src="/logo-recharge.png" />
                      <img className="logo" src="/logo-netsuite.png" />
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
