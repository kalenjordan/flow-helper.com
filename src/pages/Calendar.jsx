import "../main.css";

import enTranslations from "@shopify/polaris/locales/en.json";
import {
  AppProvider,
  Bleed,
  Box,
  Card,
  Divider,
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
import Rates from "../components/Rates";
import Availability from "../components/Availability";
import useDocumentTitle from "../useDocumentTitle";

function Calendar() {
  let limitedAvailability = false;

  useDocumentTitle("Book A Call | Flow Helper");

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
      <Frame>
        <Page>
          <Box paddingBlockStart={{ xs: 400, lg: 400 }}>
            <BlockStack gap="500">
              <BlockStack gap="200">
                <Text as="h1" variant="headingXl" alignment="left" fontWeight="regular">
                  <Link monochrome url="/">
                    Home
                  </Link>
                  {" > "}
                  Book a call
                </Text>
                <Text alignment="left" variant="headingMd" fontWeight="regular" className="subtitle">
                  Whether using Shopify Flow, IPaaS systems, or writin custom - if you need any automation done in
                  Shopify or integrations with systems, I'm your guy.
                </Text>
              </BlockStack>
              <Layout>
                <Layout.Section>
                  <BlockStack gap="500">
                    {limitedAvailability && (
                      <Card background="bg-surface-caution">
                        <BlockStack gap="200">
                          <Text variant="headingMd" tone="caution">
                            Limited Availability
                          </Text>

                          <Text as="p" variant="bodyLg" tone="caution">
                            I'm currently booked out on consulting work, so I have limited availability in my calendar
                            for calls related to new work. If the available times below don't work for you, feel free to
                            shoot me an email.
                          </Text>
                        </BlockStack>
                      </Card>
                    )}
                    <Card>
                      <Cal
                        calLink="kalenjordan/30min"
                        style={{
                          width: "100%",
                          height: "100%",
                          overflow: "scroll",
                        }}
                        config={{ layout: "month_view" }}
                      />
                    </Card>
                  </BlockStack>
                </Layout.Section>
                <Layout.Section variant="oneThird">
                  <BlockStack gap="500">
                    <Availability />
                    <Rates showButtons={false} />
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

export default Calendar;
