import type { CollectionConfig } from 'payload'

export const ShippingOptions: CollectionConfig = {
  slug: 'shipping-options',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'carrier', 'cost', 'estimatedDays', 'isActive'],
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'Shipping option name (e.g., "Standard Shipping", "Express")',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Description shown to customers',
      },
    },
    {
      name: 'carrier',
      type: 'select',
      required: true,
      options: [
        { label: 'UPS', value: 'ups' },
        { label: 'FedEx', value: 'fedex' },
        { label: 'USPS', value: 'usps' },
        { label: 'DHL', value: 'dhl' },
        { label: 'Local Delivery', value: 'local' },
        { label: 'Pickup', value: 'pickup' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'cost',
      type: 'number',
      required: true,
      min: 0,
      admin: {
        description: 'Shipping cost in cents',
      },
    },
    {
      name: 'freeShippingThreshold',
      type: 'number',
      min: 0,
      admin: {
        description: 'Order amount for free shipping (in cents)',
      },
    },
    {
      name: 'estimatedDays',
      type: 'group',
      fields: [
        {
          name: 'min',
          type: 'number',
          required: true,
          min: 0,
          admin: {
            description: 'Minimum delivery days',
          },
        },
        {
          name: 'max',
          type: 'number',
          required: true,
          min: 0,
          admin: {
            description: 'Maximum delivery days',
          },
        },
      ],
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Whether this shipping option is available',
      },
    },
    {
      name: 'supportedCountries',
      type: 'array',
      fields: [
        {
          name: 'country',
          type: 'select',
          required: true,
          options: [
            { label: 'United States', value: 'US' },
            { label: 'Canada', value: 'CA' },
            { label: 'United Kingdom', value: 'GB' },
            { label: 'Germany', value: 'DE' },
            { label: 'France', value: 'FR' },
            { label: 'Australia', value: 'AU' },
            // Add more countries as needed
          ],
        },
      ],
    },
    {
      name: 'weightLimits',
      type: 'group',
      fields: [
        {
          name: 'min',
          type: 'number',
          min: 0,
          admin: {
            description: 'Minimum weight in grams',
          },
        },
        {
          name: 'max',
          type: 'number',
          min: 0,
          admin: {
            description: 'Maximum weight in grams',
          },
        },
      ],
    },
    {
      name: 'dimensionLimits',
      type: 'group',
      fields: [
        {
          name: 'maxLength',
          type: 'number',
          min: 0,
          admin: {
            description: 'Maximum length in centimeters',
          },
        },
        {
          name: 'maxWidth',
          type: 'number',
          min: 0,
          admin: {
            description: 'Maximum width in centimeters',
          },
        },
        {
          name: 'maxHeight',
          type: 'number',
          min: 0,
          admin: {
            description: 'Maximum height in centimeters',
          },
        },
      ],
    },
    {
      name: 'trackingEnabled',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Whether tracking is available for this option',
      },
    },
    {
      name: 'requiresSignature',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Whether delivery requires signature',
      },
    },
    {
      name: 'insuranceIncluded',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Whether insurance is included',
      },
    },
    {
      name: 'sortOrder',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Display order (lower numbers first)',
      },
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Shipping carrier icon',
      },
    },
  ],
}
