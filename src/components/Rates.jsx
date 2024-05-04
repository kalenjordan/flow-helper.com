import {
  Badge,
  Bleed,
  Box,
  Button,
  Card,
  Text,
  InlineStack,
  BlockStack,
} from "@shopify/polaris";
import React from "react";
import { CartIcon, CalendarIcon } from "@shopify/polaris-icons";

export function Rates({ showButtons }) {
  return (
    <Card>
      <InlineStack gap="500">
        <BlockStack gap="300">
          <Bleed marginBlockStart="400" marginInline="400">
            <Box background="bg-surface-secondary" padding="400">
              <Text variant="headingMd">Rates</Text>
            </Box>
          </Bleed>
          <Text as="h2" variant="headingMd">
            10 Hours
          </Text>
          <Text as="p" variant="bodyLg">
            With 10 hours of consulting, let's get off to the races with a quick
            win.
          </Text>
          <span>
            <Button
              icon={CartIcon}
              url="https://buy.stripe.com/dR601u0mX4eP9vafZ4"
              target="_blank"
            >
              $1,200
            </Button>
          </span>
        </BlockStack>

        <BlockStack gap="300">
          <Text as="h2" variant="headingMd">
            20 Hours
          </Text>
          <Text as="p" variant="bodyLg">
            With 20 hours, we'll have a little more time to get things just
            right.
          </Text>
          <span>
            <Button
              url="https://buy.stripe.com/7sI15yedNeTtazeeV1"
              target="_blank"
              icon={CartIcon}
            >
              $2,100
            </Button>
          </span>
        </BlockStack>

        <BlockStack gap="300">
          <InlineStack gap="200">
            <Text as="h2" variant="headingMd">
              30 Hours
            </Text>
            <Badge gap="500" tone="success">
              Best Value
            </Badge>
          </InlineStack>
          <Text as="p" variant="bodyLg">
            With a 30 hour consulting package, we're ready to start cooking with
            fire.
          </Text>
          <span>
            <Button
              url="https://buy.stripe.com/28oaG85Hh3aL6iY3ch"
              target="_blank"
              icon={CartIcon}
            >
              $3,000
            </Button>
          </span>
        </BlockStack>
      </InlineStack>
    </Card>
  );
}

export default Rates;
