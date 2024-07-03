import "../main.css";

import enTranslations from "@shopify/polaris/locales/en.json";
import {
  AppProvider,
  Badge,
  Bleed,
  Box,
  Button,
  CalloutCard,
  Card,
  Divider,
  Layout,
  Page,
  Text,
  InlineStack,
  FooterHelp,
  Frame,
  BlockStack,
  VideoThumbnail,
} from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import useDocumentTitle from "../useDocumentTitle";
import { useState } from "react";

function PostContent() {
  const [playVideo, setPlayVideo] = useState(false);
  useDocumentTitle("AI-Generated Product Highlights For Shopify Using MESA");

  return (
    <AppProvider i18n={enTranslations}>
      <div className="breadcrumb subdued">
        <a href="/">&lt; Home</a>
      </div>
      <Frame>
        <Page>
          <Box paddingBlockStart={{ xs: 400, lg: 400 }}>
            <BlockStack gap="500">
              <BlockStack gap="200">
                <Text as="h1" variant="headingXl" alignment="center" fontWeight="regular">
                  AI-Generated Product Highlights For Shopify
                </Text>
                <Box paddingInline={{ xs: 600, lg: 3200 }}>
                  <Text alignment="center" variant="headingMd" fontWeight="regular" className="subtitle">
                    Improve Your Product Page Content With AI-Generated Highlights
                  </Text>
                </Box>
                <InlineStack as="span" align="center" gap="200">
                  <Badge as="span" tone="default">
                    AI-Generated Content
                  </Badge>
                  <Badge as="span" tone="default">
                    Shopify
                  </Badge>
                  <Badge as="span" tone="default">
                    MESA
                  </Badge>
                </InlineStack>
              </BlockStack>
              <Layout>
                <Layout.Section>
                  <BlockStack gap="500">
                    <Card>
                      <BlockStack gap="300">
                        <iframe
                          width="560"
                          height="315"
                          src="https://www.youtube.com/embed/2mObsBCfPv4?si=krD_olkxK7MBcM7M"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerpolicy="strict-origin-when-cross-origin"
                          allowfullscreen
                        ></iframe>
                        <Text as="p" variant="bodyLg">
                          In this tutorial, we'll show you how to use MESA to generate AI-powered product highlights for
                          your Shopify store. By leveraging the power of AI, you can create compelling product
                          descriptions that drive conversions and increase sales.
                        </Text>
                        <Text as="p" variant="bodyLg" fontWeight="bold">
                          Example Highlight Bullets
                        </Text>
                        <Text as="p" variant="bodyLg">
                          The bullet points below were generated from an actual merchant’s product page based on their
                          product description.
                        </Text>
                        <img src="/mesa/ai-product-highlights-workflow/bullets.jpeg"></img>
                        <Text as="p" variant="bodyLg">
                          The workflow begins by sending a prompt to ChatGPT, requesting the generation of product
                          highlights based on a live merchant’s product page. This prompt includes specific details
                          about the product, ensuring that the generated highlights are accurate and relevant. Once
                          ChatGPT processes the prompt, it returns a response in JSON format. This JSON response
                          contains the key points and highlights about the product, formatted in a way that can be
                          easily integrated into the website’s meta fields.
                        </Text>
                        <Text as="p" variant="bodyLg">
                          After receiving the JSON response, the next step is to populate the product’s meta fields with
                          the generated highlights. This process involves parsing the JSON data and extracting the
                          relevant information. Each highlight is then assigned to a corresponding meta field on the
                          product page. This automated approach ensures consistency and efficiency, reducing the manual
                          effort required to update product details.
                        </Text>
                        <Text as="p" variant="bodyLg" fontWeight="bold">
                          Add The Bullet Points To Your Theme In The Theme Editor
                        </Text>
                        <Text as="p" variant="bodyLg">
                          Finally, to enhance the visual presentation of the product highlights, we add an icon list
                          theme block to the product page. This theme block displays the highlights in a visually
                          appealing manner, using icons to represent each key point. This not only makes the information
                          more accessible to customers but also improves the overall user experience on the website. By
                          combining automated content generation with a well-designed visual display, the workflow
                          ensures that product pages are informative, engaging, and up-to-date.
                        </Text>
                        <img src="/mesa/ai-product-highlights-workflow/theme-editor.png"></img>
                      </BlockStack>
                    </Card>
                    <CalloutCard
                      title="Want to try it on your store?"
                      illustration="/mesa/mesa-logo.webp"
                      primaryAction={{
                        content: "Download Workflow",
                        variant: "primary",
                        url: "/mesa/ai-product-highlights-workflow/workflow.zip",
                      }}
                    >
                      <p>
                        To try it out, all you have to do is download this zip file, install the MESA app with a free
                        trial, and uplaod it.
                      </p>
                    </CalloutCard>
                  </BlockStack>
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
                        <Bleed marginBlockStart="400" marginInline="400">
                          <img
                            src="/mesa/ai-product-highlights-workflow/workflow.png"
                            alt="MESA Workflow"
                            style={{ width: "100%" }}
                          />
                        </Bleed>
                        <InlineStack as="span" align="start" gap="200">
                          <Button as="span" url="/mesa/ai-product-highlights-workflow/workflow.zip">
                            Download Workflow
                          </Button>
                        </InlineStack>
                      </BlockStack>
                    </Card>
                    <div className="callout-hire-me">
                      <CalloutCard
                        title="Need help customizing MESA?"
                        illustration="/kalen-avatar-circle.png"
                        primaryAction={{
                          content: "Hire Kalen",
                          url: "/calendar",
                        }}
                      >
                        <p>I've built hundreds of MESA workflows for merchants like you.</p>
                      </CalloutCard>
                    </div>
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
