import type { CollectionConfig } from 'payload'

export const Coupons: CollectionConfig = {
  slug: 'coupons',
  admin: {
    useAsTitle: 'code',
    defaultColumns: ['code', 'type', 'value', 'isActive', 'validFrom', 'validUntil'],
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
  },
  fields: [
    {
      name: 'code',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Coupon code (e.g., "SAVE20", "WELCOME10")',
      },
    },
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'Internal name for the coupon',
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
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Percentage', value: 'percentage' },
        { label: 'Fixed Amount', value: 'fixed_amount' },
        { label: 'Free Shipping', value: 'free_shipping' },
        { label: 'Buy X Get Y', value: 'bxgy' },
      ],
    },
    {
      name: 'value',
      type: 'number',
      required: true,
      min: 0,
      admin: {
        description: 'Discount value (percentage or amount in cents)',
      },
    },
    {
      name: 'minimumOrderAmount',
      type: 'number',
      min: 0,
      admin: {
        description: 'Minimum order amount to use coupon (in cents)',
      },
    },
    {
      name: 'maximumDiscountAmount',
      type: 'number',
      min: 0,
      admin: {
        description: 'Maximum discount amount for percentage coupons (in cents)',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Whether the coupon is active',
      },
    },
    {
      name: 'validFrom',
      type: 'date',
      required: true,
      admin: {
        description: 'When the coupon becomes valid',
      },
    },
    {
      name: 'validUntil',
      type: 'date',
      admin: {
        description: 'When the coupon expires (leave empty for no expiration)',
      },
    },
    {
      name: 'usageLimit',
      type: 'group',
      fields: [
        {
          name: 'total',
          type: 'number',
          min: 0,
          admin: {
            description: 'Total number of times coupon can be used',
          },
        },
        {
          name: 'perCustomer',
          type: 'number',
          min: 0,
          admin: {
            description: 'Number of times per customer',
          },
        },
      ],
    },
    {
      name: 'usageCount',
      type: 'number',
      defaultValue: 0,
      min: 0,
      admin: {
        description: 'Number of times coupon has been used',
        readOnly: true,
      },
    },
    {
      name: 'applicableProducts',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
      admin: {
        description: 'Products this coupon applies to (leave empty for all products)',
      },
    },
    {
      name: 'applicableCategories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      admin: {
        description: 'Categories this coupon applies to',
      },
    },
    {
      name: 'excludedProducts',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
      admin: {
        description: 'Products excluded from this coupon',
      },
    },
    {
      name: 'excludedCategories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      admin: {
        description: 'Categories excluded from this coupon',
      },
    },
    {
      name: 'customerRestrictions',
      type: 'group',
      fields: [
        {
          name: 'firstTimeCustomersOnly',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            description: 'Only for first-time customers',
          },
        },
        {
          name: 'specificCustomers',
          type: 'relationship',
          relationTo: 'users',
          hasMany: true,
          admin: {
            description: 'Specific customers who can use this coupon',
          },
        },
        {
          name: 'customerGroups',
          type: 'array',
          fields: [
            {
              name: 'group',
              type: 'select',
              options: [
                { label: 'VIP', value: 'vip' },
                { label: 'Wholesale', value: 'wholesale' },
                { label: 'Members', value: 'members' },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'bxgySettings',
      type: 'group',
      admin: {
        condition: (data) => data.type === 'bxgy',
      },
      fields: [
        {
          name: 'buyQuantity',
          type: 'number',
          min: 1,
          admin: {
            description: 'Quantity to buy',
          },
        },
        {
          name: 'getQuantity',
          type: 'number',
          min: 1,
          admin: {
            description: 'Quantity to get free/discounted',
          },
        },
        {
          name: 'getProducts',
          type: 'relationship',
          relationTo: 'products',
          hasMany: true,
          admin: {
            description: 'Products that can be received (leave empty for same products)',
          },
        },
      ],
    },
    {
      name: 'stackable',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Can be combined with other coupons',
      },
    },
    {
      name: 'autoApply',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Automatically apply when conditions are met',
      },
    },
  ],
}
