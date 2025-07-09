import type { CollectionConfig } from 'payload'

export const Product: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'sku', 'price', 'status', 'brand'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly version of the product name',
      },
    },
    {
      name: 'sku',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Stock Keeping Unit - unique product identifier',
      },
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
      admin: {
        description: 'Full product description with rich formatting',
      },
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      admin: {
        description: 'Brief product summary for listings',
      },
    },
    {
      name: 'images',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'alt',
          type: 'text',
          required: true,
        },
        {
          name: 'isMain',
          type: 'checkbox',
          admin: {
            description: 'Mark as main product image',
          },
        },
      ],
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      min: 0,
      admin: {
        description: 'Regular price in cents (e.g., 1999 for $19.99)',
      },
    },
    {
      name: 'salePrice',
      type: 'number',
      min: 0,
      admin: {
        description: 'Sale price in cents (leave empty if not on sale)',
      },
    },
    {
      name: 'compareAtPrice',
      type: 'number',
      min: 0,
      admin: {
        description: 'Original price for comparison (MSRP)',
      },
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      required: true,
    },
    {
      name: 'brand',
      type: 'relationship',
      relationTo: 'brands',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Published',
          value: 'published',
        },
        {
          label: 'Archived',
          value: 'archived',
        },
      ],
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      admin: {
        description: 'Mark as featured product',
      },
    },
    {
      name: 'weight',
      type: 'number',
      min: 0,
      admin: {
        description: 'Product weight in grams for shipping calculations',
      },
    },
    {
      name: 'dimensions',
      type: 'group',
      fields: [
        {
          name: 'length',
          type: 'number',
          min: 0,
          admin: {
            description: 'Length in centimeters',
          },
        },
        {
          name: 'width',
          type: 'number',
          min: 0,
          admin: {
            description: 'Width in centimeters',
          },
        },
        {
          name: 'height',
          type: 'number',
          min: 0,
          admin: {
            description: 'Height in centimeters',
          },
        },
      ],
    },
    {
      name: 'specifications',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'value',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          admin: {
            description: 'SEO title for product page',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          admin: {
            description: 'SEO meta description',
          },
        },
        {
          name: 'keywords',
          type: 'text',
          admin: {
            description: 'SEO keywords (comma-separated)',
          },
        },
      ],
    },
  ],
}
