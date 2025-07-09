import type { CollectionConfig } from 'payload'

export const Cart: CollectionConfig = {
  slug: 'cart',
  admin: {
    useAsTitle: 'id',
    defaultColumns: ['customer', 'sessionId', 'itemCount', 'total', 'updatedAt'],
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'customer',
      type: 'relationship',
      relationTo: 'users',
      admin: {
        description: 'Customer (null for guest carts)',
      },
    },
    {
      name: 'sessionId',
      type: 'text',
      admin: {
        description: 'Session ID for guest carts',
      },
    },
    {
      name: 'cartItems',
      type: 'array',
      fields: [
        {
          name: 'product',
          type: 'relationship',
          relationTo: 'products',
          required: true,
        },
        {
          name: 'quantity',
          type: 'number',
          required: true,
          min: 1,
          defaultValue: 1,
        },
        {
          name: 'unitPrice',
          type: 'number',
          required: true,
          min: 0,
          admin: {
            description: 'Current price per unit (in cents)',
          },
        },
        {
          name: 'totalPrice',
          type: 'number',
          required: true,
          min: 0,
          admin: {
            description: 'Total price for this line item (in cents)',
          },
        },
        {
          name: 'addedAt',
          type: 'date',
          required: true,
          defaultValue: () => new Date().toISOString(),
        },
        {
          name: 'productVariant',
          type: 'json',
          admin: {
            description: 'Selected product variant details (size, color, etc.)',
          },
        },
      ],
    },
    {
      name: 'subtotal',
      type: 'number',
      defaultValue: 0,
      min: 0,
      admin: {
        description: 'Cart subtotal (in cents)',
      },
    },
    {
      name: 'itemCount',
      type: 'number',
      defaultValue: 0,
      min: 0,
      admin: {
        description: 'Total number of items in cart',
      },
    },
    {
      name: 'appliedCoupons',
      type: 'relationship',
      relationTo: 'coupons',
      hasMany: true,
    },
    {
      name: 'discountAmount',
      type: 'number',
      defaultValue: 0,
      min: 0,
      admin: {
        description: 'Total discount amount applied (in cents)',
      },
    },
    {
      name: 'total',
      type: 'number',
      defaultValue: 0,
      min: 0,
      admin: {
        description: 'Cart total after discounts (in cents)',
      },
    },
    {
      name: 'currency',
      type: 'select',
      required: true,
      defaultValue: 'USD',
      options: [
        { label: 'USD', value: 'USD' },
        { label: 'EUR', value: 'EUR' },
        { label: 'GBP', value: 'GBP' },
      ],
    },
    {
      name: 'expiresAt',
      type: 'date',
      admin: {
        description: 'When this cart expires (for cleanup)',
      },
    },
    {
      name: 'isAbandoned',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Mark as abandoned cart for recovery campaigns',
      },
    },
    {
      name: 'notes',
      type: 'textarea',
      admin: {
        description: 'Customer notes or special requests',
      },
    },
  ],
}
