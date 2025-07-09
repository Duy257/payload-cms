import type { CollectionConfig } from 'payload'

export const Orders: CollectionConfig = {
  slug: 'orders',
  admin: {
    useAsTitle: 'orderNumber',
    defaultColumns: ['orderNumber', 'customer', 'status', 'total', 'orderDate'],
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
  },
  fields: [
    {
      name: 'orderNumber',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Unique order identifier',
        readOnly: true,
      },
    },
    {
      name: 'customer',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'pending',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Processing', value: 'processing' },
        { label: 'Shipped', value: 'shipped' },
        { label: 'Delivered', value: 'delivered' },
        { label: 'Cancelled', value: 'cancelled' },
        { label: 'Refunded', value: 'refunded' },
      ],
    },
    {
      name: 'orderItems',
      type: 'array',
      required: true,
      minRows: 1,
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
        },
        {
          name: 'unitPrice',
          type: 'number',
          required: true,
          min: 0,
          admin: {
            description: 'Price per unit at time of order (in cents)',
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
          name: 'productSnapshot',
          type: 'json',
          admin: {
            description: 'Product details at time of order',
          },
        },
      ],
    },
    {
      name: 'subtotal',
      type: 'number',
      required: true,
      min: 0,
      admin: {
        description: 'Subtotal before tax and shipping (in cents)',
      },
    },
    {
      name: 'tax',
      type: 'number',
      required: true,
      min: 0,
      admin: {
        description: 'Tax amount (in cents)',
      },
    },
    {
      name: 'shipping',
      type: 'number',
      required: true,
      min: 0,
      admin: {
        description: 'Shipping cost (in cents)',
      },
    },
    {
      name: 'discount',
      type: 'number',
      defaultValue: 0,
      min: 0,
      admin: {
        description: 'Total discount amount (in cents)',
      },
    },
    {
      name: 'total',
      type: 'number',
      required: true,
      min: 0,
      admin: {
        description: 'Final total amount (in cents)',
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
      name: 'shippingAddress',
      type: 'relationship',
      relationTo: 'addresses',
      required: true,
    },
    {
      name: 'billingAddress',
      type: 'relationship',
      relationTo: 'addresses',
      required: true,
    },
    {
      name: 'paymentMethod',
      type: 'relationship',
      relationTo: 'payment-methods',
    },
    {
      name: 'shippingMethod',
      type: 'relationship',
      relationTo: 'shipping-options',
    },
    {
      name: 'appliedCoupons',
      type: 'relationship',
      relationTo: 'coupons',
      hasMany: true,
    },
    {
      name: 'orderDate',
      type: 'date',
      required: true,
      defaultValue: () => new Date().toISOString(),
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'shippedDate',
      type: 'date',
      admin: {
        description: 'Date when order was shipped',
      },
    },
    {
      name: 'deliveredDate',
      type: 'date',
      admin: {
        description: 'Date when order was delivered',
      },
    },
    {
      name: 'trackingNumber',
      type: 'text',
      admin: {
        description: 'Shipping tracking number',
      },
    },
    {
      name: 'notes',
      type: 'textarea',
      admin: {
        description: 'Internal notes about the order',
      },
    },
    {
      name: 'customerNotes',
      type: 'textarea',
      admin: {
        description: 'Customer notes or special instructions',
      },
    },
  ],
}
