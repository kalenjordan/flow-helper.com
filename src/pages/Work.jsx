import "../main.css";

import enTranslations from "@shopify/polaris/locales/en.json";
import {
  Avatar,
  AppProvider,
  Badge,
  Box,
  Card,
  Divider,
  Icon,
  Page,
  Text,
  InlineStack,
  FooterHelp,
  Link,
  Frame,
  BlockStack,
} from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import { CalendarIcon, PaymentIcon, ReceiptRefundIcon, ReplayIcon, WorkIcon } from "@shopify/polaris-icons";
import { useState, useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import Rates from "../components/Rates";
import Availability from "../components/Availability";

function Calendar() {
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
      <Frame>
        <Page>
          <Box paddingBlockStart={{ xs: 400, lg: 400 }}>
            <BlockStack gap="500">
              <BlockStack gap="200">
                <Text as="h2" variant="headingM" alignment="left" fontWeight="regular">
                  <Link monochrome url="/">
                    Go back home
                  </Link>
                </Text>
              </BlockStack>
              <div class="work-grid">
                <Card title="Tags" sectioned>
                  <BlockStack gap="300">
                    <InlineStack as="span" align="start" gap="200">
                      <Icon source={CalendarIcon} as="span" />
                      <Text as="h2" variant="headingMd">
                        Built 100s of workflow automations
                      </Text>
                    </InlineStack>
                    <Text as="p" variant="bodyLg">
                      Flow Helper is a Shopify app that adds missing triggers and actions to use natively within Flow,
                      including bulk flow runs. I've even discovered undocumented features in the Shopify core webhooks
                      API.
                    </Text>

                    <span>
                      <Badge as="span" tone="success">
                        Automations
                      </Badge>
                    </span>
                  </BlockStack>
                </Card>
                <Card title="Tags" sectioned>
                  <BlockStack gap="300">
                    <InlineStack as="span" align="start" gap="200">
                      <Icon source={CalendarIcon} as="span" />
                      <Text as="h2" variant="headingMd">
                        NetSuite & Shopify Integration
                      </Text>
                    </InlineStack>
                    <Text as="p" variant="bodyLg">
                      Flow Helper is a Shopify app that adds missing triggers and actions to use natively within Flow,
                      including bulk flow runs.
                    </Text>
                    <span>
                      <Badge as="span" tone="default">
                        In Development
                      </Badge>
                    </span>
                  </BlockStack>
                </Card>
                <Card title="Tags" sectioned>
                  <BlockStack gap="300">
                    <InlineStack as="span" align="start" gap="200">
                      <Icon source={CalendarIcon} as="span" />
                      <Text as="h2" variant="headingMd">
                        Tweaks To Brand's Theme
                      </Text>
                    </InlineStack>
                    <Text as="p" variant="bodyLg">
                      Flow Helper is a Shopify app that adds missing triggers and actions to use natively within Flow,
                      including bulk flow runs.
                    </Text>
                    <img src="/milkxwhiskey.png" width="100%" alt="Milk x Whiskey" />
                    <span>
                      <Badge as="span" tone="info">
                        Pending Review
                      </Badge>
                    </span>
                  </BlockStack>
                </Card>
                <Card title="Tags" sectioned>
                  <BlockStack gap="300">
                    <InlineStack as="span" align="start" gap="200">
                      <Icon source={CalendarIcon} as="span" />
                      <Text as="h2" variant="headingMd">
                        Subscription App Development
                      </Text>
                    </InlineStack>
                    <Text as="p" variant="bodyLg">
                      Flow Helper is a Shopify app that adds missing triggers and actions to use natively within Flow,
                      including bulk flow runs.
                    </Text>
                    <span>
                      <Badge as="span" tone="info">
                        Pending Review
                      </Badge>
                    </span>
                  </BlockStack>
                </Card>
                <Card title="Tags" sectioned>
                  <BlockStack gap="300">
                    <InlineStack as="span" align="start" gap="200">
                      <Icon source={CalendarIcon} as="span" />
                      <Text as="h2" variant="headingMd">
                        Discount Functions App
                      </Text>
                    </InlineStack>
                    <Text as="p" variant="bodyLg">
                      Flow Helper is a Shopify app that adds missing triggers and actions to use natively within Flow,
                      including bulk flow runs.
                    </Text>
                    <span>
                      <Badge as="span" tone="info">
                        Exploratory
                      </Badge>
                    </span>
                  </BlockStack>
                </Card>
                <Card title="Tags" sectioned>
                  <BlockStack gap="300">
                    <InlineStack as="span" align="start" gap="200">
                      <Icon source={CalendarIcon} as="span" />
                      <Text as="h2" variant="headingMd">
                        Built and launched my own app
                      </Text>
                    </InlineStack>
                    <Text as="p" variant="bodyLg">
                      Flow Helper is a Shopify app that adds missing triggers and actions to use natively within Flow,
                      including bulk flow runs.
                    </Text>
                    <span>
                      <Badge as="span" tone="success">
                        Live
                      </Badge>
                    </span>
                  </BlockStack>
                </Card>
                <Card title="Tags" sectioned>
                  <BlockStack gap="300">
                    <InlineStack as="span" align="start" gap="200">
                      <Icon source={CalendarIcon} as="span" />
                      <Text as="h2" variant="headingMd">
                        Mechanic email migrator
                      </Text>
                    </InlineStack>
                    <Text as="p" variant="bodyLg">
                      Flow Helper is a Shopify app that adds missing triggers and actions to use natively within Flow,
                      including bulk flow runs.
                    </Text>
                    <span>
                      <Badge as="span" tone="info">
                        Pending Review
                      </Badge>
                    </span>
                  </BlockStack>
                </Card>
              </div>

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
