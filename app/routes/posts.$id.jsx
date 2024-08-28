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
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { api } from "../api";
import { useFindMany, useMaybeFindOne } from "@gadgetinc/react";
import { useLoaderData } from "@remix-run/react";

/*
export async function loader({ params }) {
  const template = prisma.template.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  return template;
}
*/

export default function Index() {
  return (
    <AppProvider i18n={enTranslations}>
      <div class="breadcrumb subdued">
        <a href="/">&lt; Home</a>
      </div>
      <Frame>
        <Page>
          <Box paddingBlockStart={{ xs: 400, lg: 400 }}>
            <BlockStack gap="500">
              {" "}
              <BlockStack gap="200">
                <Text as="h1" variant="headingXl" alignment="center" fontWeight="regular">
                  Using Send HTTP Request In Shopify Flow To Do A GraphQL API Call
                </Text>
                <Box paddingInline={{ xs: 600, lg: 3200 }}>
                  <Text alignment="center" variant="bodyLg" fontWeight="400" className="subtitle">
                    In this video we'll walk through the process of setting up a Send HTTP Request action in Shopify
                    Flow step by step.
                  </Text>
                </Box>
              </BlockStack>
              <BlockStack gap="500">
                <Card title="Order details" sectioned>
                  <BlockStack gap="300">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/BPKQL4DNehA?si=wq3uj6SS7yiE8iHv"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>

                    <Text as="h2">
                      1. Set up a custom app, which will give you an access token to use in flow.
                      <br />
                      <br />
                      2. Go into your flow and set it up like I have here, with your access token in there.
                      <br />
                      <br />
                      3. Test it out.
                    </Text>
                  </BlockStack>
                </Card>
              </BlockStack>
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
