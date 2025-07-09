import type { CollectionConfig } from 'payload'

export const Reviews: CollectionConfig = {
  slug: 'reviews',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'product', 'customer', 'rating', 'status', 'createdAt'],
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
      name: 'customer',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'order',
      type: 'relationship',
      relationTo: 'orders',
      admin: {
        description: 'Order this review is associated with (for verified purchases)',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Review title/headline',
      },
    },
    {
      name: 'comment',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Review content',
      },
    },
    {
      name: 'rating',
      type: 'number',
      required: true,
      min: 1,
      max: 5,
      admin: {
        description: 'Rating from 1 to 5 stars',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'pending',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Approved', value: 'approved' },
        { label: 'Rejected', value: 'rejected' },
        { label: 'Spam', value: 'spam' },
      ],
    },
    {
      name: 'isVerifiedPurchase',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Whether this is from a verified purchase',
      },
    },
    {
      name: 'helpfulVotes',
      type: 'number',
      defaultValue: 0,
      min: 0,
      admin: {
        description: 'Number of helpful votes',
      },
    },
    {
      name: 'totalVotes',
      type: 'number',
      defaultValue: 0,
      min: 0,
      admin: {
        description: 'Total number of votes',
      },
    },
    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
          admin: {
            description: 'Image caption',
          },
        },
      ],
    },
    {
      name: 'pros',
      type: 'array',
      fields: [
        {
          name: 'pro',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'cons',
      type: 'array',
      fields: [
        {
          name: 'con',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'wouldRecommend',
      type: 'select',
      options: [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' },
        { label: 'Maybe', value: 'maybe' },
      ],
    },
    {
      name: 'customerInfo',
      type: 'group',
      fields: [
        {
          name: 'displayName',
          type: 'text',
          admin: {
            description: 'Name to display publicly (defaults to customer name)',
          },
        },
        {
          name: 'location',
          type: 'text',
          admin: {
            description: 'Customer location (city, state)',
          },
        },
        {
          name: 'isAnonymous',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            description: 'Display as anonymous review',
          },
        },
      ],
    },
    {
      name: 'moderationNotes',
      type: 'textarea',
      admin: {
        description: 'Internal moderation notes',
      },
    },
    {
      name: 'response',
      type: 'group',
      fields: [
        {
          name: 'content',
          type: 'textarea',
          admin: {
            description: 'Store response to review',
          },
        },
        {
          name: 'respondedBy',
          type: 'relationship',
          relationTo: 'users',
          admin: {
            description: 'Staff member who responded',
          },
        },
        {
          name: 'respondedAt',
          type: 'date',
          admin: {
            description: 'Date of response',
          },
        },
      ],
    },
    {
      name: 'reportedCount',
      type: 'number',
      defaultValue: 0,
      min: 0,
      admin: {
        description: 'Number of times this review was reported',
      },
    },
  ],
}
