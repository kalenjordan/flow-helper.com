import {
  Badge,
  Bleed,
  Box,
  Button,
  Grid,
  Card,
  Text,
  InlineStack,
  BlockStack,
  InlineGrid,
} from "@shopify/polaris";
import React from "react";
import { CartIcon, CalendarIcon } from "@shopify/polaris-icons";

export function Rates({ showButtons }) {
  return (
    <>
      <Card>
        <InlineStack column={3} gap="500">
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
              Let's get off to the races with a quick win.
            </Text>
            <span>
              <Button
                icon={CartIcon}
                url="https://buy.stripe.com/eVaaG84DdeTt4aQ28j"
                target="_blank"
              >
                $1,500
              </Button>
            </span>
          </BlockStack>

          <BlockStack gap="300">
            <Text as="h2" variant="headingMd">
              20 Hours
            </Text>
            <Text as="p" variant="bodyLg">
              We'll have a little more time to fine tune.
            </Text>
            <span>
              <Button
                url="https://buy.stripe.com/14k6pS0mX7r15eUeV4"
                target="_blank"
                icon={CartIcon}
              >
                $2,250
              </Button>
            </span>
          </BlockStack>

          <BlockStack gap="300">
            <InlineStack gap="200">
              <Text as="h2" variant="headingMd">
                40 Hours
              </Text>
              <Badge gap="500" tone="success">
                Best Value
              </Badge>
            </InlineStack>
            <Text as="p" variant="bodyLg">
              Now we're cooking with fire.
            </Text>
            <span>
              <Button
                url="https://buy.stripe.com/aEU3dGc5F3aL8r69AJ"
                target="_blank"
                icon={CartIcon}
              >
                $4,000
              </Button>
            </span>
          </BlockStack>
        </InlineStack>
      </Card>
    </>
  );
}

export default Rates;
