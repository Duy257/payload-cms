// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Category } from './collections/Category'
import { Product } from './collections/Products'
import { Brand } from './collections/Brand'
import { Orders } from './collections/Orders'
import { Addresses } from './collections/Addresses'
import { Cart } from './collections/Cart'
import { Inventory } from './collections/Inventory'
import { PaymentMethods } from './collections/PaymentMethods'
import { ShippingOptions } from './collections/ShippingOptions'
import { Reviews } from './collections/Reviews'
import { Coupons } from './collections/Coupons'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Category,
    Product,
    Brand,
    Orders,
    Addresses,
    Cart,
    Inventory,
    PaymentMethods,
    ShippingOptions,
    Reviews,
    Coupons,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
