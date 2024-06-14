import "../main.css";

import enTranslations from "@shopify/polaris/locales/en.json";
import {
  Avatar,
  AppProvider,
  Badge,
  Bleed,
  Box,
  Button,
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
import {
  AutomationIcon,
  CalendarIcon,
  DiscountIcon,
  ReceiptRefundIcon,
  ReplayIcon,
  WorkIcon,
  ThemeIcon,
  ImportIcon,
} from "@shopify/polaris-icons";
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
                <Text as="h1" variant="headingXl" alignment="center" fontWeight="regular">
                  Hire Kalen Jordan - Senior Shopify Developer
                </Text>
                <Box paddingInline={{ xs: 600, lg: 3200 }}>
                  <Text alignment="center" variant="headingMd" fontWeight="regular" className="subtitle">
                    As a veteran in the eCommerce industry and a fanatical Shopify enthusiast, if you're looking for
                    help frontend or backend development, I'm your man.
                  </Text>
                </Box>
              </BlockStack>
              <BlockStack gap="200"></BlockStack>
              <div class="work-grid">
                <Card title="Tags" sectioned>
                  <BlockStack gap="300">
                    <InlineStack as="span" align="start" gap="200">
                      <Icon source={AutomationIcon} as="span" />
                      <Text as="h2" variant="headingMd">
                        Built 100s of workflow automations
                      </Text>
                    </InlineStack>
                    <Text as="p" variant="bodyLg">
                      My most recent full time position was as the Platform Advocate for MESA, a workflow automation app
                      built by ShopPad, the makers of a number of household-name Shopify apps including Infinite
                      Options.
                    </Text>
                    <Text as="p" variant="bodyLg">
                      In my role, I created hundreds of automations, working directly with brands and also building demo
                      content for the blog and youtube channel.
                    </Text>
                    <Text as="p" variant="bodyLg">
                      This experienced allowed me to gain a deep familiarity with the Shopify APIs. I even discovered an
                      important undocumented feature of webhooks.
                    </Text>
                    <InlineStack as="span" align="start" gap="200">
                      <Badge as="span" tone="default">
                        Integrations
                      </Badge>
                      <Badge as="span" tone="default">
                        Shopify Plus
                      </Badge>
                    </InlineStack>
                  </BlockStack>
                </Card>
                <Card title="Tags" sectioned>
                  <BlockStack gap="300">
                    <InlineStack as="span" align="start" gap="200">
                      <Icon source={ImportIcon} as="span" />
                      <Text as="h2" variant="headingMd">
                        NetSuite & Shopify Integration
                      </Text>
                    </InlineStack>
                    <Text as="p" variant="bodyLg">
                      I built a NetSuite integration using a platform called Patchworks. This has involved mapping
                      companies, company locations, price lists, products, and variants into Shopify.
                    </Text>
                    <InlineStack as="span" align="start" gap="200">
                      <Badge as="span" tone="default">
                        B2B
                      </Badge>
                      <Badge as="span" tone="default">
                        Integrations
                      </Badge>
                      <Badge as="span" tone="default">
                        Shopify Plus
                      </Badge>
                    </InlineStack>
                  </BlockStack>
                </Card>

                <Card title="Tags" sectioned>
                  <Bleed marginInline="400" marginBlock="400">
                    <img
                      src="/milkxwhiskey-tall.png"
                      width="100%"
                      alt="Milk x Whiskey"
                      style={{ "margin-bottom": "-4px" }}
                    />
                  </Bleed>
                </Card>
                <Card title="Tags" sectioned>
                  <BlockStack gap="300">
                    <InlineStack as="span" align="start" gap="200">
                      <Icon source={ThemeIcon} as="span" />
                      <Text as="h2" variant="headingMd">
                        Optimizations To A 3rd Party Theme
                      </Text>
                    </InlineStack>
                    <Text as="p" variant="bodyLg">
                      I've made a number of improvements to the theme that this brand purchased, including the product
                      grid on the product page, conversion rate optimizations to the cart page, and more.
                    </Text>
                    <Text as="p" variant="bodyLg">
                      "DUDE! That looks so good! YOU ROCK!" <br />
                      -- The Client
                    </Text>

                    <InlineStack as="span" align="start" gap="200">
                      <Badge as="span" tone="default">
                        Frontend
                      </Badge>
                      <Badge as="span" tone="default">
                        Theme Development
                      </Badge>
                    </InlineStack>
                  </BlockStack>
                </Card>
                <Card title="Tags" sectioned className="testClass">
                  <BlockStack gap="300">
                    <InlineStack as="span" align="start" gap="200">
                      <Icon source={ReplayIcon} as="span" />
                      <Text as="h2" variant="headingMd">
                        Subscription App Development
                      </Text>
                    </InlineStack>
                    <Text as="p" variant="bodyLg">
                      I'm in the process of building a Shopify app for a Subscriptions SaaS company that currently has
                      apps available for Magento and Salesforce Commerce Cloud.
                    </Text>
                    <InlineStack as="span" align="start" gap="200">
                      <Badge as="span" tone="default">
                        App Development
                      </Badge>
                      <Badge as="span" tone="default">
                        Frontend
                      </Badge>
                    </InlineStack>
                  </BlockStack>
                </Card>
                <Card title="Tags" sectioned>
                  <BlockStack gap="300">
                    <InlineStack as="span" align="start" gap="200">
                      <Icon source={DiscountIcon} as="span" />
                      <Text as="h2" variant="headingMd">
                        Discount Functions App
                      </Text>
                    </InlineStack>
                    <Text as="p" variant="bodyLg">
                      An app that I started working on but haven't launched yet gives you access in the backend to a
                      rule builder with infinite nesting of AND/OR logic for creating discounts.
                    </Text>
                    <InlineStack as="span" align="start" gap="200">
                      <Badge as="span" tone="default">
                        App Development
                      </Badge>
                      <Badge as="span" tone="default">
                        Shopify Functions
                      </Badge>
                    </InlineStack>
                  </BlockStack>
                </Card>
                <Card title="Tags" sectioned>
                  <BlockStack gap="300">
                    <InlineStack as="span" align="start" gap="200">
                      <img src="/kalen-avatar-circle.png" class="avatar" alt="Kalen Jordan" />
                      <Text as="h2" variant="headingMd">
                        My Rates
                      </Text>
                    </InlineStack>
                    <Text as="p" variant="bodyLg">
                      If you're interested in hiring me, I generally charge $100/hour for brands and $80/hour for
                      agencies. I look forward to hearing from you.
                    </Text>
                    <Button as="span" url="/calendar">
                      Book a call
                    </Button>
                  </BlockStack>
                </Card>
                <Card title="Tags" sectioned>
                  <BlockStack gap="300">
                    <InlineStack as="span" align="start" gap="200">
                      <img src="/favicon.png" class="avatar" alt="Kalen Jordan" />
                      <Text as="h2" variant="headingMd">
                        Built and launched my own app
                      </Text>
                    </InlineStack>
                    <Text as="p" variant="bodyLg">
                      Flow Helper is a Shopify app that adds missing triggers and actions to use natively within Flow,
                      for things like customer updated, product updated, and order updated. This allows you to do more
                      in Flow.
                    </Text>
                    <InlineStack as="span" align="start" gap="200">
                      <Badge as="span" tone="default">
                        App Development
                      </Badge>
                      <Badge as="span" tone="default">
                        Automations
                      </Badge>
                    </InlineStack>
                  </BlockStack>
                </Card>
                <Card title="Tags" sectioned>
                  <BlockStack gap="300">
                    <InlineStack as="span" align="start" gap="200">
                      <Icon source={CalendarIcon} as="span" />
                      <Text as="h2" variant="headingMd">
                        Magento Stuff
                      </Text>
                    </InlineStack>
                    <Text as="p" variant="bodyLg">
                      For a decade plus prior to diving into Shopify, I was heavily involved in the Magento ecosystem.
                      Having started as a platform engineer for Smile.io (then Sweet Tooth Rewards), I later moved to
                      work as the lead developer for a brand.
                    </Text>
                    <Text as="p" variant="bodyLg">
                      It was then that I started building an email marketing app for Magento, which I grew into the
                      low-mid 5 figures MRR and then sold. Next, I built a recruiting platform for Magento developers,
                      which I grew into the mid 5 figures MRR.
                    </Text>
                    <InlineStack as="span" align="start" gap="200">
                      <Badge as="span" tone="default">
                        Magento
                      </Badge>
                    </InlineStack>
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
