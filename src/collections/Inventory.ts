import type { CollectionConfig } from 'payload'

export const Inventory: CollectionConfig = {
  slug: 'inventory',
  admin: {
    useAsTitle: 'product',
    defaultColumns: ['product', 'sku', 'stockQuantity', 'status', 'lowStockThreshold'],
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
  },
  fields: [
    {
      name: 'product',
      type: 'relationship',
      relationTo: 'products',
      required: true,
    },
    {
      name: 'sku',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Stock Keeping Unit for this inventory item',
      },
    },
    {
      name: 'stockQuantity',
      type: 'number',
      required: true,
      defaultValue: 0,
      min: 0,
      admin: {
        description: 'Current available stock quantity',
      },
    },
    {
      name: 'reservedQuantity',
      type: 'number',
      defaultValue: 0,
      min: 0,
      admin: {
        description: 'Quantity reserved for pending orders',
      },
    },
    {
      name: 'availableQuantity',
      type: 'number',
      admin: {
        description: 'Available quantity (stock - reserved)',
        readOnly: true,
      },
    },
    {
      name: 'lowStockThreshold',
      type: 'number',
      defaultValue: 10,
      min: 0,
      admin: {
        description: 'Alert when stock falls below this level',
      },
    },
    {
      name: 'trackInventory',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Whether to track inventory for this item',
      },
    },
    {
      name: 'allowBackorders',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Allow orders when out of stock',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'in_stock',
      options: [
        { label: 'In Stock', value: 'in_stock' },
        { label: 'Low Stock', value: 'low_stock' },
        { label: 'Out of Stock', value: 'out_of_stock' },
        { label: 'Discontinued', value: 'discontinued' },
        { label: 'Pre-order', value: 'pre_order' },
      ],
    },
    {
      name: 'variants',
      type: 'array',
      admin: {
        description: 'Product variants (size, color, etc.)',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          admin: {
            description: 'Variant name (e.g., "Size", "Color")',
          },
        },
        {
          name: 'value',
          type: 'text',
          required: true,
          admin: {
            description: 'Variant value (e.g., "Large", "Red")',
          },
        },
        {
          name: 'sku',
          type: 'text',
          required: true,
          admin: {
            description: 'SKU for this specific variant',
          },
        },
        {
          name: 'stockQuantity',
          type: 'number',
          required: true,
          defaultValue: 0,
          min: 0,
        },
        {
          name: 'priceAdjustment',
          type: 'number',
          defaultValue: 0,
          admin: {
            description: 'Price adjustment for this variant (in cents)',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Variant-specific image',
          },
        },
      ],
    },
    {
      name: 'location',
      type: 'group',
      fields: [
        {
          name: 'warehouse',
          type: 'text',
          admin: {
            description: 'Warehouse location',
          },
        },
        {
          name: 'aisle',
          type: 'text',
          admin: {
            description: 'Aisle location',
          },
        },
        {
          name: 'shelf',
          type: 'text',
          admin: {
            description: 'Shelf location',
          },
        },
        {
          name: 'bin',
          type: 'text',
          admin: {
            description: 'Bin location',
          },
        },
      ],
    },
    {
      name: 'supplier',
      type: 'group',
      fields: [
        {
          name: 'name',
          type: 'text',
          admin: {
            description: 'Supplier name',
          },
        },
        {
          name: 'supplierSku',
          type: 'text',
          admin: {
            description: 'Supplier SKU',
          },
        },
        {
          name: 'leadTime',
          type: 'number',
          admin: {
            description: 'Lead time in days',
          },
        },
        {
          name: 'minimumOrderQuantity',
          type: 'number',
          admin: {
            description: 'Minimum order quantity from supplier',
          },
        },
      ],
    },
    {
      name: 'lastRestocked',
      type: 'date',
      admin: {
        description: 'Date when inventory was last restocked',
      },
    },
    {
      name: 'nextRestockDate',
      type: 'date',
      admin: {
        description: 'Expected next restock date',
      },
    },
    {
      name: 'notes',
      type: 'textarea',
      admin: {
        description: 'Internal notes about this inventory item',
      },
    },
  ],
}
