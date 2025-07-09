import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'firstName', 'lastName', 'role', 'isActive'],
  },
  auth: true,
  fields: [
    // Email added by default
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
      name: 'phone',
      type: 'text',
      admin: {
        description: 'Phone number for order notifications',
      },
    },
    {
      name: 'dateOfBirth',
      type: 'date',
      admin: {
        description: 'Date of birth for age verification and marketing',
      },
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'customer',
      options: [
        {
          label: 'Customer',
          value: 'customer',
        },
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Manager',
          value: 'manager',
        },
      ],
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Whether the user account is active',
      },
    },
    {
      name: 'preferences',
      type: 'group',
      fields: [
        {
          name: 'newsletter',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            description: 'Subscribe to newsletter',
          },
        },
        {
          name: 'smsNotifications',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            description: 'Receive SMS notifications',
          },
        },
        {
          name: 'currency',
          type: 'select',
          defaultValue: 'USD',
          options: [
            { label: 'USD', value: 'USD' },
            { label: 'EUR', value: 'EUR' },
            { label: 'GBP', value: 'GBP' },
          ],
        },
      ],
    },
  ],
}
