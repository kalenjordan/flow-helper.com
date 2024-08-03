import { Box, Card, Icon, Thumbnail, Text, InlineStack, BlockStack } from "@shopify/polaris";
import React from "react";
import { CartIcon, StarFilledIcon, PaymentIcon } from "@shopify/polaris-icons";

export default function Testimonials({ showButtons }) {
  return (
    <>
      <Box paddingBlockStart={{ xs: 300, lg: 600 }}>
        <BlockStack gap="500">
          <BlockStack gap="200">
            <Text as="h1" variant="headingXl" alignment="center" fontWeight="regular">
              Some kind words from my customers
            </Text>
          </BlockStack>
          <Text as="h2" variant="headingLg" alignment="center" fontWeight="regular"></Text>
          <div className="work-grid">
            <Card title="Order details" sectioned>
              <BlockStack gap="300">
                <Text as="h2" variant="headingLg">
                  "Kalen is a force! Smart, motivated, and kind—a perfect combination."
                </Text>

                <InlineStack gap="200">
                  <span>
                    <Thumbnail as="span" size="small" source="/mechanic-matt.jpeg" />
                  </span>
                  <Text as="p" variant="bodyLg">
                    Matt Sodomsky
                    <br />
                    VP, Product & Strategy, Mechanic
                  </Text>
                </InlineStack>
                <Text as="p" variant="bodyLg"></Text>
              </BlockStack>
            </Card>
            <Card title="Tags" sectioned styles={{ zoom: "1.5" }}>
              <div class="zoom-lg">
                <BlockStack gap="300">
                  <Text as="h2" variant="headingMd">
                    Kalen is an exceptional talent
                  </Text>
                  <Text as="p" variant="bodyLg">
                    Kalen has been a tremendous help to our company. His expertise in APIs, automation, and all things
                    eCommerce and data is unparalleled. He consistently goes above and beyond to deliver outstanding
                    results. On top of that, his services are very affordable, making him an invaluable asset. Highly
                    recommend!
                  </Text>
                  <Text as="p" variant="bodyLg" tone="subdued">
                    John C, johnjulia com
                  </Text>
                  <InlineStack as="span" align="start" gap="0">
                    <span>
                      <Icon source={StarFilledIcon} as="span" />
                    </span>
                    <span>
                      <Icon source={StarFilledIcon} as="span" />
                    </span>
                    <span>
                      <Icon source={StarFilledIcon} as="span" />
                    </span>
                    <span>
                      <Icon source={StarFilledIcon} as="span" />
                    </span>
                    <span>
                      <Icon source={StarFilledIcon} as="span" />
                    </span>
                  </InlineStack>
                </BlockStack>
              </div>
            </Card>
            <Card title="Subscription app development" sectioned className="testClass">
              <BlockStack gap="300">
                <Text as="h2" variant="headingMd">
                  Kalen is incredible
                </Text>
                <Text as="p" variant="bodyLg">
                  I had the pleasure of working with Kalen, and I must say, Kalen is the best! The effort and dedication
                  put into completing my project were truly commendable.
                </Text>
                <Text as="p" variant="bodyLg" tone="subdued">
                  Mouhamadou Thioune
                </Text>
                <InlineStack as="span" align="start" gap="0">
                  <span>
                    <Icon source={StarFilledIcon} as="span" />
                  </span>
                  <span>
                    <Icon source={StarFilledIcon} as="span" />
                  </span>
                  <span>
                    <Icon source={StarFilledIcon} as="span" />
                  </span>
                  <span>
                    <Icon source={StarFilledIcon} as="span" />
                  </span>
                  <span>
                    <Icon source={StarFilledIcon} as="span" />
                  </span>
                </InlineStack>
              </BlockStack>
            </Card>
            <Card>
              <BlockStack gap="300">
                <Text as="h2" variant="headingMd">
                  Knowledgeable, easy to work with, and great communication!
                </Text>
                <Text as="p" variant="bodyLg">
                  Kalen helped us create a flow that fit our needs perfectly. He used Mechanic to accomplish a task that
                  wasn’t available in Shopify Flow on its own. He even created a quick walk through video of what he did
                  so we understood how it worked! He is the type of development partner we’ve been looking for. Will
                  definitely work with him again!
                </Text>
                <Text as="p" variant="bodyLg" tone="subdued">
                  Craig Anderson, Vive Juicery
                </Text>
                <InlineStack as="span" align="start" gap="0">
                  <span>
                    <Icon source={StarFilledIcon} as="span" />
                  </span>
                  <span>
                    <Icon source={StarFilledIcon} as="span" />
                  </span>
                  <span>
                    <Icon source={StarFilledIcon} as="span" />
                  </span>
                  <span>
                    <Icon source={StarFilledIcon} as="span" />
                  </span>
                  <span>
                    <Icon source={StarFilledIcon} as="span" />
                  </span>
                </InlineStack>
              </BlockStack>
            </Card>

            <Card title="Subscription app development" sectioned className="testClass">
              <BlockStack gap="300">
                <Text as="h2" variant="headingMd">
                  Efficient communication, impactful results!
                </Text>
                <Text as="p" variant="bodyLg">
                  We activate inventory at our 19 retail stores for sale on our digital channels during store closure
                  hours. Kalen helped create an automated workflow that completed these tasks at set times daily which
                  will reduce the possibility of error and streamline our process. Huge help!
                </Text>
                <Text as="p" variant="bodyLg" tone="subdued">
                  Curtis Ulrich, Aviator Nation
                </Text>
                <InlineStack as="span" align="start" gap="0">
                  <span>
                    <Icon source={StarFilledIcon} as="span" />
                  </span>
                  <span>
                    <Icon source={StarFilledIcon} as="span" />
                  </span>
                  <span>
                    <Icon source={StarFilledIcon} as="span" />
                  </span>
                  <span>
                    <Icon source={StarFilledIcon} as="span" />
                  </span>
                  <span>
                    <Icon source={StarFilledIcon} as="span" />
                  </span>
                </InlineStack>
              </BlockStack>
            </Card>
            <Card>
              <BlockStack gap="300">
                <Text as="h2" variant="headingMd">
                  Very prompt and knowledgeable
                </Text>
                <Text as="p" variant="bodyLg">
                  Kalen was very prompt and knowledgeable. He made quick work of an issue I was having sending order
                  information to fulfillment partners automatically. Went above and beyond to help in other areas of
                  automation as well.
                </Text>
                <Text as="p" variant="bodyLg" tone="subdued">
                  Natalie Roger, Tack Trunks{" "}
                </Text>
                <InlineStack as="span" align="start" gap="0">
                  <span>
                    <Icon source={StarFilledIcon} as="span" />
                  </span>
                  <span>
                    <Icon source={StarFilledIcon} as="span" />
                  </span>
                  <span>
                    <Icon source={StarFilledIcon} as="span" />
                  </span>
                  <span>
                    <Icon source={StarFilledIcon} as="span" />
                  </span>
                  <span>
                    <Icon source={StarFilledIcon} as="span" />
                  </span>
                </InlineStack>
              </BlockStack>
            </Card>
          </div>
        </BlockStack>
      </Box>
    </>
  );
}
