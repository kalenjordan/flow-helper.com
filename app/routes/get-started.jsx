import "../main.css";

import enTranslations from "@shopify/polaris/locales/en.json";
import {
  AppProvider,
  Badge,
  Bleed,
  Button,
  Box,
  Card,
  DescriptionList,
  Divider,
  Icon,
  Link,
  Page,
  Text,
  Thumbnail,
  InlineStack,
  FooterHelp,
  Layout,
  Frame,
  BlockStack,
  Avatar,
} from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import {
  CalendarIcon,
  ChatIcon,
  ReceiptRefundIcon,
  ReplayIcon,
  StarFilledIcon,
  PaymentIcon,
  WorkIcon,
} from "@shopify/polaris-icons";
import { useState } from "react";
import Rates from "../components/rates";
import Testimonials from "../components/testimonials";

export const meta = () => {
  return [
    { title: "Getting Started | Flow Helper" },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    { name: "description", content: "Ready to hire me? Here's how to kick things off." },
  ];
};

export default function Index() {
  const [dismissed, setDismissed] = useState(false);
  const [showNewsletter, setShowNewsletter] = useState(false);

  return (
    <AppProvider i18n={enTranslations}>
      <div class="breadcrumb subdued">
        <a href="/">&lt; Home</a>
      </div>
      <Frame>
        <Page>
          <Box paddingBlockStart={{ xs: 400, lg: 400 }}>
            <BlockStack gap="1000">
              <Text as="h1" variant="headingXl" alignment="center" fontWeight="regular">
                Ready to hire me? Here's how to kick things off
              </Text>
              <Layout>
                <Layout.Section>
                  <BlockStack gap="500">
                    <Card title="Order details" sectioned>
                      <BlockStack gap="300">
                        <Text as="p" variant="bodyLg">
                          Here's what the process looks like for getting started.
                        </Text>
                        <Text as="p" variant="bodyLg">
                          By now you should have received an estimate. If the estimate is within a range, you can pay
                          for the low end of the range or the high end.
                        </Text>
                        <Text as="p" variant="bodyLg">
                          The benefit to the high end is that there's a price break for larger chunks of hours. Any
                          unused hours can be used towards other things that you may need help with.
                        </Text>

                        <Text as="p" variant="bodyLg">
                          Once you've decided on a number of hours to prepay, go ahead and click the link in the rates
                          section here to make the payment.
                        </Text>
                        <Text as="p" variant="bodyLg">
                          And then you can go ahead and send me your collaborator code so that I can request access to
                          your Shopify store.
                        </Text>
                        <Text as="p" variant="bodyLg">
                          Once I send the collaboration request, you'll have to approve it, and then I'll be able to get
                          into your Shopify store and get to work.
                        </Text>
                        <Box padding="200">
                          <Divider borderColor="border" />
                        </Box>
                        <InlineStack gap="200">
                          <span>
                            <Thumbnail as="span" size="small" source="/kalen-avatar.png" />
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
                                    <Icon source={ChatIcon} as="span" />
                                  </span>
                                  Estimate
                                </InlineStack>
                              ),
                              description:
                                "Let me know what you're looking to get done and I'll give you a rough estimate for the work.",
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
                                  Complete work
                                </InlineStack>
                              ),
                              description: "I'll begin work and usually knock it out within a day or two",
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
                          ]}
                        />
                      </BlockStack>
                    </Card>
                    <Card title="Order details" sectioned>
                      <BlockStack gap="500">
                        <BlockStack gap="300">
                          <Text as="p" variant="bodyLg" fontWeight="bold">
                            Should I pay for the high end or the low end of the estimate range?
                          </Text>
                          <Text as="p" variant="bodyLg">
                            If the estimate you've received is a range of hours, you can pay either the high end or the
                            low end. The benefit to the high end is that there's a price break for larger blocks of
                            hours. Any unused hours can be used towards other things that you may need help with.
                          </Text>
                        </BlockStack>
                        <BlockStack gap="300">
                          <Text as="p" variant="bodyLg" fontWeight="bold">
                            Can we jump on a call first to discuss?
                          </Text>
                          <Text as="p" variant="bodyLg">
                            Yes - feel free to{" "}
                            <Link url="https://www.flow-helper.com/calendar">schedule that here</Link>.
                          </Text>
                        </BlockStack>
                        <BlockStack gap="300">
                          <Text as="p" variant="bodyLg" fontWeight="bold">
                            Can you send me an invoice?
                          </Text>
                          <Text as="p" variant="bodyLg">
                            When your card is charged, you'll receive a receipt from Stripe. This should be all that you
                            need from an accountimg perspective, but just let me know if that's not the case.
                          </Text>
                        </BlockStack>
                      </BlockStack>
                    </Card>
                    <Card>
                      <BlockStack gap="300">
                        <Bleed marginBlockStart="400" marginInline="400">
                          <Box background="bg-surface-secondary" padding="400">
                            <InlineStack as="span" align="start" gap="200">
                              <Icon source={CalendarIcon} as="span" />
                              <Text as="h2" variant="headingMd">
                                Want to schedule a call first?
                              </Text>
                            </InlineStack>
                          </Box>
                        </Bleed>
                        <Text as="p" variant="bodyLg">
                          If you'd prefer to discuss this on a call first, you can feel free to schedule that here.
                        </Text>
                        <InlineStack as="span" align="start" gap="200">
                          <Button as="span" url="/calendar">
                            Book a call
                          </Button>
                        </InlineStack>
                      </BlockStack>
                    </Card>
                  </BlockStack>
                </Layout.Section>
                <Layout.Section variant="oneThird">
                  <BlockStack gap="500">
                    <Rates showButtons={true} allRates={true} />
                  </BlockStack>
                </Layout.Section>
              </Layout>
              <Testimonials />
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
