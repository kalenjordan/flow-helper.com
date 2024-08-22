import { Box, Card, Icon, Thumbnail, Text, InlineStack, BlockStack } from "@shopify/polaris";
import React from "react";
import { CartIcon, StarFilledIcon, PaymentIcon } from "@shopify/polaris-icons";
import FiveStars from "./fiveStars";

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
                  <FiveStars />
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
                <FiveStars />
              </BlockStack>
            </Card>
            <Card>
              <BlockStack gap="300">
                <Text as="h2" variant="headingMd">
                  Easy to work with & great communication!
                </Text>
                <Text as="p" variant="bodyLg">
                  Kalen helped us create a flow that fit our needs perfectly. He used Mechanic to accomplish a task that
                  wasn’t available in Shopify Flow on its own. He even created a quick walk through video of what he did
                  so we understood how it worked! He is the type of development partner we’ve been looking for.
                </Text>
                <Text as="p" variant="bodyLg" tone="subdued">
                  Craig Anderson, Vive Juicery
                </Text>
                <FiveStars />
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
                <FiveStars />
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
                <FiveStars />
              </BlockStack>
            </Card>
            <Card>
              <BlockStack gap="300">
                <Text as="h2" variant="headingMd">
                  Soooooo helpful!
                </Text>
                <Text as="p" variant="bodyLg">
                  Kalen has been fantastic to work with. We have a big pile of urgent modifications and he has been
                  swiftly moving through them. <strong>He's very responsive and clear</strong> about what works and what
                  doesn't. And great at finding and implementing solutions. Transferring to Shopify has been a nightmare
                  but having Kalen in our corner is making it so much better! Can't recommend highly enough!{" "}
                </Text>
                <Text as="p" variant="bodyLg" tone="subdued">
                  Gabriel Boyers
                </Text>
                <FiveStars />
              </BlockStack>
            </Card>
            <Card>
              <BlockStack gap="300">
                <Text as="h2" variant="headingMd">
                  Exceptional integrity and professionalsim
                </Text>
                <Text as="p" variant="bodyLg">
                  I'm a developer and I know Shopify pretty well after having built our shop and some integrations
                  myself. However, when I discovered Mechanic, I was stumped by the intricacies of it...Kalen was
                  extremely helpful, delivered the task really quickly and saved me from a lot of frustration.
                </Text>
                <Text as="p" variant="bodyLg" tone="subdued">
                  Juha Kaunisto
                </Text>
                <FiveStars />
              </BlockStack>
            </Card>
          </div>
        </BlockStack>
      </Box>
    </>
  );
}
