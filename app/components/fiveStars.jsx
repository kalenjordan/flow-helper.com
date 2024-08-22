import { Icon, InlineStack } from "@shopify/polaris";
import React from "react";
import { StarFilledIcon } from "@shopify/polaris-icons";

export default function Index() {
  return (
    <>
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
    </>
  );
}
