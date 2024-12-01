import type { Schema, Struct } from '@strapi/strapi';

export interface SharedComponent01 extends Struct.ComponentSchema {
  collectionName: 'components_shared_component_01s';
  info: {
    description: '';
    displayName: 'Component 01';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    ForDemo: Schema.Attribute.Boolean;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.component-01': SharedComponent01;
    }
  }
}
