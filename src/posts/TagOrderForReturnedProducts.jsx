import "../main.css";

import enTranslations from "@shopify/polaris/locales/en.json";
import {
  AppProvider,
  Badge,
  Bleed,
  Box,
  Button,
  Card,
  Divider,
  Layout,
  Page,
  Text,
  InlineStack,
  FooterHelp,
  Frame,
  BlockStack,
} from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import useDocumentTitle from "../useDocumentTitle";

function PostContent() {
  useDocumentTitle("Tag Orders For Returned Products In Shopify Using MESA");

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
                  Tag Orders For Returned Products In Shopify Using MESA
                </Text>
                <Box paddingInline={{ xs: 600, lg: 3200 }}>
                  <Text alignment="center" variant="headingMd" fontWeight="regular" className="subtitle">
                    Streamline Your Returns: Automatically Tag Orders in Shopify with MESA Using Zip Code and Street
                    Address
                  </Text>
                </Box>
                <InlineStack as="span" align="center" gap="200">
                  <Badge as="span" tone="default">
                    Automations
                  </Badge>
                  <Badge as="span" tone="default">
                    Returns
                  </Badge>
                  <Badge as="span" tone="default">
                    Shopify
                  </Badge>
                  <Badge as="span" tone="info">
                    MESA
                  </Badge>
                </InlineStack>
              </BlockStack>
              <Layout>
                <Layout.Section>
                  <Card>
                    <BlockStack gap="300">
                      <div class="youtube-wrapper">
                        <div class="h_iframe">
                          <img class="ratio" src="http://placehold.it/16x9" />
                          <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/DZs5ld0MLxU?si=8lOBibSNjA8zVjPi"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                      <Text as="p" variant="bodyLg">
                        Managing returns can be a cumbersome process, especially for merchants who need to track
                        returned containers from their customers. If you're looking to simplify this process, MESA
                        offers a powerful solution that integrates seamlessly with your Shopify store. By leveraging
                        MESA's workflows, you can automate the tagging of returned orders with just the customer's zip
                        code and street address. Here's how you can set it up.
                      </Text>
                      <Text as="h2" variant="bodyLg" fontWeight="bold">
                        Workflow 1: Save Customer Address and Zip Code to Data by MESA
                      </Text>
                      <Text as="p" variant="bodyLg">
                        The first step in streamlining your returns process is to ensure that every new order in your
                        Shopify store has the customer's address and zip code saved in Data by MESA. This allows you to
                        have a reliable database to reference when processing returns.
                      </Text>
                      <Text as="p" variant="bodyLg">
                        To ensure that all past orders are included in this process, you can use MESA's Time Travel
                        feature. This powerful tool allows you to run the workflow retroactively against all existing
                        orders in your Shopify account.
                      </Text>

                      <Text as="h2" variant="bodyLg" fontWeight="bold">
                        Workflow 2: Generate a Form for Customer Returns
                      </Text>

                      <Text as="p" variant="bodyLg">
                        The second workflow focuses on the return process itself. By generating a form that customers
                        can fill out, you can easily look up their most recent order and tag it as returned in your
                        Shopify returns center.
                      </Text>

                      <img src="/mesa/form.png" style={{ width: "100%" }} />
                    </BlockStack>
                  </Card>
                </Layout.Section>
                <Layout.Section variant="oneThird">
                  <BlockStack gap="500">
                    <Card>
                      <Bleed marginInline="400" marginBlock="400">
                        <a href="https://getmesa.com" target="_blank">
                          <img
                            src="/mesa/mesa-banner.png"
                            alt="MESA Banner"
                            style={{ width: "100%", marginBottom: "-7px" }}
                          />
                        </a>
                      </Bleed>
                    </Card>
                    <Card>
                      <BlockStack gap="300">
                        <Text as="p" variant="bodyLg" fontWeight="bold">
                          #1 Save Customer To Data by MESA
                        </Text>
                        <Bleed marginInline="400">
                          <img src="/mesa/mesa-workflow1.png" alt="MESA Workflow" style={{ width: "100%" }} />
                        </Bleed>
                        <InlineStack as="span" align="start" gap="200">
                          <Button as="span" url="/calendar">
                            Download Workflow #1
                          </Button>
                        </InlineStack>
                      </BlockStack>
                    </Card>
                    <Card>
                      <BlockStack gap="300">
                        <Text as="p" variant="bodyLg" fontWeight="bold">
                          #2 Tag Order Via Returns Form
                        </Text>
                        <Bleed marginInline="400">
                          <img src="/mesa/mesa-workflow2.png" alt="MESA Workflow" style={{ width: "100%" }} />
                        </Bleed>
                        <InlineStack as="span" align="start" gap="200">
                          <Button as="span" url="/calendar">
                            Download Workflow #2
                          </Button>
                        </InlineStack>
                      </BlockStack>
                    </Card>
                  </BlockStack>
                </Layout.Section>
              </Layout>

              <FooterHelp>
                <BlockStack gap="500">
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

export default PostContent;
