import {
  IndexTable,
  LegacyCard,
  useIndexResourceState,
  Text,
  Badge,
  BlockStack,
  InlineStack,
  Avatar,
} from "@shopify/polaris";
import React from "react";

export function SimpleIndexTableExample() {
  const flows = [
    {
      name: "AI image tagging",
      description: "Generate tags for images using ChatGPT Vision API",
      tool: <Badge tone="info">MESA</Badge>,
      platform: (
        <InlineStack gap="200">
          <Badge tone="info">MESA</Badge>
          <Badge tone="success">Shopify</Badge>
          <Badge>ChatGPT</Badge>
        </InlineStack>
      ),
    },
    {
      name: "AI image alt text generation",
      description: "Generate alt text for images using ChatGPT Vision API",
      tool: <Badge tone="info">MESA</Badge>,
      platform: (
        <InlineStack gap="200">
          <Badge tone="info">MESA</Badge>
          <Badge>Shopify</Badge>
          <Badge>ChatGPT</Badge>
        </InlineStack>
      ),
      platform: <Badge tone="success">Shopify</Badge>,
    },
    {
      name: "Adapt international shoe sizes",
      description: "Populate translations for markets using a mapping table",
      tool: <Badge tone="info">MESA</Badge>,
      platform: (
        <InlineStack gap="200">
          <Badge className="plus">Shopify Plus</Badge>
          <Badge tone="info">MESA</Badge>
        </InlineStack>
      ),
    },
    {
      name: "Declutter ShipStation line item properties",
      description: "Remove underscored line items in ShipStation order",
      tool: <Badge tone="info">MESA</Badge>,
      platform: (
        <InlineStack gap="200">
          <Badge tone="success">Shopify</Badge>
          <Badge tone="info">MESA</Badge>
          <Badge tone="warning">ShipStation</Badge>
        </InlineStack>
      ),
    },
    {
      name: "Inventory levels by location on product page",
      description:
        "Pull inventory levels dynamically and render on product page",
      tool: <Badge tone="info">MESA</Badge>,
      platform: (
        <InlineStack gap="200">
          <Badge tone="success">Shopify</Badge>
          <Badge tone="info">MESA</Badge>
        </InlineStack>
      ),
    },
    {
      name: "Tag fulfillable orders",
      description:
        "Allocate available inventory to fulfillable orders and tag them",
      tool: <Badge tone="info">MESA</Badge>,
      platform: (
        <InlineStack gap="200">
          <Badge tone="success">Shopify</Badge>
          <Badge tone="info">MESA</Badge>
        </InlineStack>
      ),
    },
  ];
  const resourceName = {
    singular: "flow",
    plural: "flows",
  };

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(flows);

  const rowMarkup = flows.map(
    ({ id, name, description, tool, platform }, index) => (
      <IndexTable.Row
        id={name}
        key={name}
        selected={selectedResources.includes(name)}
        position={index}
      >
        <IndexTable.Cell>
          <Text variant="bodyMd" fontWeight="bold">
            {name}
          </Text>
          <Text variant="bodyMd">{description}</Text>
        </IndexTable.Cell>
        <IndexTable.Cell>{platform}</IndexTable.Cell>
      </IndexTable.Row>
    )
  );

  return (
    <LegacyCard>
      <IndexTable
        resourceName={resourceName}
        itemCount={flows.length}
        hasZebraStriping={true}
        increasedTableDensity={true}
        selectedItemsCount={
          allResourcesSelected ? "All" : selectedResources.length
        }
        onSelectionChange={handleSelectionChange}
        headings={[{ title: "Flows I've built" }, { title: "Platforms" }]}
      >
        {rowMarkup}
      </IndexTable>
    </LegacyCard>
  );
}
