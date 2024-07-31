import {
  Badge,
  Bleed,
  Card,
  IndexTable,
  InlineStack,
  Link,
  useIndexResourceState,
  SkeletonBodyText,
  Text,
} from "@shopify/polaris";
import React from "react";
import { api } from "../api";
import { useFindMany } from "@gadgetinc/react";

export function TemplateList(templates) {
  function toneForTag(tag) {
    if (tag == "MESA") {
      return "info";
    } else if (tag == "Shopify") {
      return "success";
    }
  }

  const resourceName = {
    singular: "flow",
    plural: "flows",
  };

  const { selectedResources, allResourcesSelected, handleSelectionChange } = useIndexResourceState(templates);

  return (
    <Card>
      <Bleed marginInline="400" marginBlock="400">
        <IndexTable
          resourceName={resourceName}
          itemCount={templates.length}
          hasZebraStriping={true}
          increasedTableDensity={true}
          selectedItemsCount={allResourcesSelected ? "All" : selectedResources.length}
          onSelectionChange={handleSelectionChange}
          headings={[{ title: "Flows I've built" }, { title: "Platforms" }]}
        >
          {templates.map((template) => (
            <IndexTable.Row
              id={template.id}
              key={template.id}
              selected={selectedResources.includes(template.id)}
              /*onClick={() => (window.location = "/templates/" + template.id)}*/
              position="1"
            >
              <IndexTable.Cell>
                <Text fontWeight="bold" as="span">
                  {template.name}
                </Text>
                <Text variant="bodyMd" tone="subdued">
                  {template.description}
                </Text>
              </IndexTable.Cell>
              <IndexTable.Cell>
                <InlineStack gap="100">
                  {template.tags.split(",").map((tag) => (
                    <Badge tone={toneForTag(tag.trim())} key={tag.trim()}>
                      {tag.trim()}
                    </Badge>
                  ))}
                </InlineStack>
              </IndexTable.Cell>
            </IndexTable.Row>
          ))}
        </IndexTable>
      </Bleed>
    </Card>
  );
}
