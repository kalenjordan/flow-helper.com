import {
  Banner,
  Badge,
  Button,
  Card,
  Grid,
  Text,
  InlineStack,
  BlockStack,
} from "@shopify/polaris";
import React from "react";
import { CartIcon, CalendarIcon } from "@shopify/polaris-icons";
import { useState } from "react";

export function Availability({ showBookCall }) {
  const [dismissed, setDismissed] = useState(false);

  return (
    <>
      {dismissed ? null : (
        <Banner
          title="My current availability"
          tone="info"
          action={
            showBookCall
              ? {
                  content: "Book a call",
                  variant: "primary",
                  url: "/calendar/",
                  icon: CalendarIcon,
                }
              : null
          }
          secondaryAction={{
            content: "Email me",
            url: "mailto:kalenj@gmail.com",
          }}
          onDismiss={() => {
            setDismissed(!dismissed);
          }}
        >
          <BlockStack gap="300">
            <span>
              <Badge tone="info">Next available: June 1</Badge>
            </span>
            <Text as="p" variant="bodyLg">
              You can prepay by selecting a package or feel free to reach out
              with any questions.
            </Text>
          </BlockStack>
        </Banner>
      )}
    </>
  );
}

export default Availability;
