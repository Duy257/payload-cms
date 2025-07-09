import type { CollectionConfig } from 'payload'

export const Addresses: CollectionConfig = {
  slug: 'addresses',
  admin: {
    useAsTitle: 'label',
    defaultColumns: ['label', 'customer', 'type', 'city', 'country'],
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
  },
  fields: [
    {
      name: 'customer',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Shipping', value: 'shipping' },
        { label: 'Billing', value: 'billing' },
        { label: 'Both', value: 'both' },
      ],
    },
    {
      name: 'label',
      type: 'text',
      required: true,
      admin: {
        description: 'Address label (e.g., "Home", "Work", "Office")',
      },
    },
    {
      name: 'firstName',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
    },
    {
      name: 'company',
      type: 'text',
      admin: {
        description: 'Company name (optional)',
      },
    },
    {
      name: 'addressLine1',
      type: 'text',
      required: true,
      admin: {
        description: 'Street address, P.O. box, company name, c/o',
      },
    },
    {
      name: 'addressLine2',
      type: 'text',
      admin: {
        description: 'Apartment, suite, unit, building, floor, etc.',
      },
    },
    {
      name: 'city',
      type: 'text',
      required: true,
    },
    {
      name: 'state',
      type: 'text',
      required: true,
      admin: {
        description: 'State, province, or region',
      },
    },
    {
      name: 'postalCode',
      type: 'text',
      required: true,
      admin: {
        description: 'ZIP or postal code',
      },
    },
    {
      name: 'country',
      type: 'select',
      required: true,
      defaultValue: 'US',
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
    {
      name: 'phone',
      type: 'text',
      admin: {
        description: 'Phone number for delivery',
      },
    },
    {
      name: 'isDefault',
      type: 'checkbox',
      admin: {
        description: 'Set as default address for this customer',
      },
    },
    {
      name: 'deliveryInstructions',
      type: 'textarea',
      admin: {
        description: 'Special delivery instructions',
      },
    },
  ],
}
