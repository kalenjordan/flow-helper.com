import "../main.css";

import enTranslations from "@shopify/polaris/locales/en.json";
import {
  AppProvider,
  Badge,
  Bleed,
  Button,
  Box,
  Card,
  Divider,
  Icon,
  Page,
  Text,
  InlineStack,
  FooterHelp,
  Layout,
  Link,
  Frame,
  BlockStack,
} from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import { useState, useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import Rates from "../components/rates";
import Availability from "../components/availability";
import { CartIcon, CalendarIcon } from "@shopify/polaris-icons";
import Testimonials from "../components/testimonials";

export const meta = () => {
  return [
    { title: "Book A Call With Kalen" },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    {
      name: "description",
      content: "If you'd like to discuss your project, please book a call below. I look forward to chatting!",
    },
  ];
};

export default function Index() {
  let limitedAvailability = false;

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <AppProvider i18n={enTranslations}>
      <div class="breadcrumb subdued">
        <a href="/">&lt; Home</a>
      </div>
      <Frame>
        <Page>
          <Box paddingBlockStart={{ xs: 400, lg: 400 }}>
            <BlockStack gap="500">
              <BlockStack gap="200">
                <Text as="h1" variant="headingXl" alignment="center" fontWeight="regular">
                  Book A Call
                </Text>
                <Box paddingInline={{ xs: 600, lg: 3200 }}>
                  <Text alignment="center" variant="bodyLg" fontWeight="400" className="subtitle">
                    I generally prefer to discuss projects by email, but if you'd like to book a call, you can do so
                    below.
                  </Text>
                </Box>
              </BlockStack>
              <Layout>
                <Layout.Section>
                  <Card>
                    <BlockStack gap="300">
                      <Text as="p" variant="bodyLg">
                        I generally prefer to discuss projects by email, as it tends to be more efficient. But if you'd
                        like to book a call, you can do so below.
                      </Text>
                      <Text as="p" variant="bodyLg">
                        Once you make the payment, on the confirmation page you'll see a link to schedule the call.
                      </Text>
                      <InlineStack as="span" align="start" gap="200">
                        <Button variant="primary" as="span" url="https://buy.stripe.com/28ocOgglVh1B36McNn">
                          $50 - Book a call
                        </Button>
                        <Button as="span" url="mailto:hey@flow-helper.com" target="_blank">
                          Email me
                        </Button>
                      </InlineStack>
                    </BlockStack>
                  </Card>
                </Layout.Section>
                <Layout.Section variant="oneThird">
                  <BlockStack gap="500">
                    <Card>
                      <Bleed marginInline="400" marginBlock="400">
                        <video width="100%" controls="controls" poster="/welcome.jpg">
                          <source src="/welcome.mp4" />
                        </video>
                      </Bleed>
                    </Card>
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
