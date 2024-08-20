import _ from "lodash";
import { ComponentContentTypes } from "@/lib/constants";

import Hero from "@/components/hero/hero";
import CardCollection from '@/components/card-collection/card-collection';

type BlockRendererProps = {
  block: any;
  extraProps?: Record<string, any>;
  query?: string;
};

const BlockRenderer = ({
  block,
  extraProps = {},
  query = "",
}: BlockRendererProps) => {
  if (Array.isArray(block)) {
    return (
      <>
        {block.map((b, index) => (
          <BlockRenderer
            block={b}
            extraProps={extraProps}
            key={`block-${b.sys.id || index}`}
            query={query}
          />
        ))}
      </>
    );
  }

  const contentTypeId = _.get(block, "sys.contentType.sys.id");

  const Component = ContentTypeMap[contentTypeId];

  if (!Component) {
    console.warn(`${contentTypeId} can not be handled`);
    return null;
  }

  const { id } = block.sys;

  // Pass query only to components that might need it
  const componentProps = {
    ...block,
    ...extraProps,
    ...(query ? { query } : {}),
  };

  return <Component key={`${contentTypeId}-${id}`} {...componentProps} />;
};

const ContentTypeMap = {
  [ComponentContentTypes.Hero]: Hero,
  [ComponentContentTypes.CardCollection]: CardCollection,
};

export { BlockRenderer };
