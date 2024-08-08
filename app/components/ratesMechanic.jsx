import {
  Badge,
  Bleed,
  Box,
  Icon,
  Button,
  Grid,
  Card,
  Text,
  InlineStack,
  BlockStack,
  InlineGrid,
} from "@shopify/polaris";
import React from "react";
import { CartIcon, CalendarIcon, PaymentIcon } from "@shopify/polaris-icons";

export function Rates({ showButtons }) {
  return (
    <>
      <Card>
        <BlockStack gap="300">
          <Bleed marginBlockStart="400" marginInline="400">
            <Box background="bg-surface-secondary" padding="400">
              <InlineStack gap="200">
                <Icon source={PaymentIcon} as="span" />
                <Text as="h2" variant="headingMd">
                  Rates
                </Text>
              </InlineStack>
            </Box>
          </Bleed>
          <BlockStack gap="500">
            <BlockStack gap="300">
              <Text as="h2" variant="headingMd">
                1 Hour
              </Text>
              <Text as="p" variant="bodyLg">
                Simple Mechanic tasks
              </Text>
              <span>
                <Button icon={CartIcon} url="https://buy.stripe.com/cN25lOedN4eP4aQ7sK" target="_blank">
                  $150
                </Button>
              </span>
            </BlockStack>
            <BlockStack gap="300">
              <Text as="h2" variant="headingMd">
                3 Hours
              </Text>
              <Text as="p" variant="bodyLg">
                Medium-complexity tasks
              </Text>
              <span>
                <Button icon={CartIcon} url="https://buy.stripe.com/28o29C3z94eP5eUcNj" target="_blank">
                  $360
                </Button>
              </span>
            </BlockStack>

            <BlockStack gap="300">
              <Text as="h2" variant="headingMd">
                5 Hours
              </Text>
              <Text as="p" variant="bodyLg">
                Complex Mechanic tasks
              </Text>
              <span>
                <Button icon={CartIcon} url="https://buy.stripe.com/8wM15y0mXh1BgXC7t0" target="_blank">
                  $550
                </Button>
              </span>
            </BlockStack>

            <BlockStack gap="300">
              <Text as="h2" variant="headingMd">
                10 Hours
              </Text>
              <Text as="p" variant="bodyLg">
                Complex-er Mechanic tasks
              </Text>
              <span>
                <Button icon={CartIcon} url="https://buy.stripe.com/14k6pS7PpeTtgXC00d" target="_blank">
                  $1,000
                </Button>
              </span>
            </BlockStack>
          </BlockStack>
        </BlockStack>
      </Card>
    </>
  );
}

export default Rates;
