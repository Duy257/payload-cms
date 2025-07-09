import type { CollectionConfig } from 'payload'

export const PaymentMethods: CollectionConfig = {
  slug: 'payment-methods',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'type', 'isActive', 'processingFee'],
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
        description: 'Payment method name (e.g., "Credit Card", "PayPal")',
      },
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Credit Card', value: 'credit_card' },
        { label: 'Debit Card', value: 'debit_card' },
        { label: 'PayPal', value: 'paypal' },
        { label: 'Apple Pay', value: 'apple_pay' },
        { label: 'Google Pay', value: 'google_pay' },
        { label: 'Bank Transfer', value: 'bank_transfer' },
        { label: 'Cash on Delivery', value: 'cod' },
        { label: 'Cryptocurrency', value: 'crypto' },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Description shown to customers',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Whether this payment method is available',
      },
    },
    {
      name: 'processingFee',
      type: 'number',
      defaultValue: 0,
      min: 0,
      admin: {
        description: 'Processing fee in cents',
      },
    },
    {
      name: 'processingFeePercentage',
      type: 'number',
      defaultValue: 0,
      min: 0,
      max: 100,
      admin: {
        description: 'Processing fee as percentage of order total',
      },
    },
    {
      name: 'minimumAmount',
      type: 'number',
      defaultValue: 0,
      min: 0,
      admin: {
        description: 'Minimum order amount for this payment method (in cents)',
      },
    },
    {
      name: 'maximumAmount',
      type: 'number',
      min: 0,
      admin: {
        description: 'Maximum order amount for this payment method (in cents)',
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
      name: 'supportedCurrencies',
      type: 'array',
      fields: [
        {
          name: 'currency',
          type: 'select',
          required: true,
          options: [
            { label: 'USD', value: 'USD' },
            { label: 'EUR', value: 'EUR' },
            { label: 'GBP', value: 'GBP' },
            { label: 'CAD', value: 'CAD' },
            { label: 'AUD', value: 'AUD' },
          ],
        },
      ],
    },
    {
      name: 'configuration',
      type: 'json',
      admin: {
        description: 'Payment gateway configuration (API keys, etc.)',
      },
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Payment method icon',
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
  ],
}
