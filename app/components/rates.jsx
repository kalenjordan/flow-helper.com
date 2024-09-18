import {
  Badge,
  Bleed,
  Box,
  Divider,
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

export function Rates({ showButtons, mechanicRates = false, allRates = false }) {
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
                1 hour
              </Text>
              <span>
                <Button icon={CartIcon} url="https://buy.stripe.com/cN25lOedN4eP4aQ7sK" target="_blank">
                  $150
                </Button>
              </span>
            </BlockStack>

            {(mechanicRates || allRates) && (
              <>
                <Divider />
                <BlockStack gap="300">
                  <Text as="h2" variant="headingMd">
                    2 Hours
                  </Text>
                  <span>
                    <Button icon={CartIcon} url="https://buy.stripe.com/cN23dG7Pp4eP8r6cNl" target="_blank">
                      $300
                    </Button>
                  </span>
                </BlockStack>
              </>
            )}

            {(mechanicRates || allRates) && (
              <>
                <Divider />
                <BlockStack gap="300">
                  <Text as="h2" variant="headingMd">
                    3 Hours
                  </Text>
                  <span>
                    <Button icon={CartIcon} url="https://buy.stripe.com/28o29C3z94eP5eUcNj" target="_blank">
                      $435
                    </Button>
                  </span>
                </BlockStack>
              </>
            )}

            <Divider />
            <BlockStack gap="300">
              <Text as="h2" variant="headingMd">
                5 Hours
              </Text>
              <span>
                <Button icon={CartIcon} url="https://buy.stripe.com/8wM15y0mXh1BgXC7t0" target="_blank">
                  $700
                </Button>
              </span>
            </BlockStack>

            <Divider />
            <BlockStack gap="300">
              <Text as="h2" variant="headingMd">
                10 Hours
              </Text>
              <span>
                <Button icon={CartIcon} url="https://buy.stripe.com/cN2cOgd9J5iT4aQ00p" target="_blank">
                  $1,300
                </Button>
              </span>
            </BlockStack>

            {!mechanicRates && (
              <>
                <Divider />
                <BlockStack gap="300">
                  <InlineStack gap="300">
                    <Text as="h2" variant="headingMd">
                      20 Hours
                    </Text>
                    <Badge gap="500" tone="success" as="span">
                      Best Value
                    </Badge>
                  </InlineStack>
                  <span>
                    <Button url="https://buy.stripe.com/4gwbKc9Xx4eP36M3co" target="_blank" icon={CartIcon}>
                      $2,400
                    </Button>
                  </span>
                </BlockStack>
              </>
            )}
          </BlockStack>
        </BlockStack>
      </Card>
    </>
  );
}

export default Rates;
