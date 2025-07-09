# Payload CMS E-commerce System

A comprehensive e-commerce system built with Payload CMS, featuring complete product management, order processing, inventory tracking, and customer management capabilities.

## Features

### Core E-commerce Collections

- **Products**: Complete product management with variants, images, pricing, and SEO
- **Categories**: Hierarchical category system with nested support
- **Brands**: Brand management with logos and descriptions
- **Orders**: Full order lifecycle management with status tracking
- **Cart**: Shopping cart functionality with session support
- **Inventory**: Stock tracking, variants, and availability management
- **Users/Customers**: Enhanced user profiles with addresses and preferences
- **Addresses**: Shipping and billing address management
- **Payment Methods**: Multiple payment gateway support
- **Shipping Options**: Flexible shipping methods and pricing
- **Reviews**: Product review system with moderation
- **Coupons**: Promotional codes and discount management

### Key Features

- TypeScript support with auto-generated types
- Comprehensive field validation and relationships
- Admin UI with proper column configurations
- SEO-friendly with meta fields
- Multi-currency support
- Inventory tracking with low stock alerts
- Product variants (size, color, etc.)
- Review system with ratings and moderation
- Flexible coupon system with various discount types

## Quick Start

### Prerequisites

- Node.js 18+
- MongoDB database
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Duy257/payload-cms.git
cd payload-cms
```

2. Install dependencies:

```bash
npm install
# or
pnpm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

Add your MongoDB URI and other required environment variables to `.env`:

```
DATABASE_URI=mongodb://localhost:27017/payload-ecommerce
PAYLOAD_SECRET=your-secret-key
```

4. Generate TypeScript types:

```bash
npm run generate:types
```

5. Start the development server:

```bash
npm run dev
```

6. Open your browser and navigate to `http://localhost:3000/admin` to access the admin panel.

### Docker Setup (Optional)

If you prefer to use Docker for local development:

1. Modify the `DATABASE_URI` in your `.env` file to `mongodb://mongo:27017/payload-ecommerce`
2. Run `docker-compose up` to start the database and application

## Collections Overview

### Products Collection

- Complete product information with rich text descriptions
- Multiple product images with alt text
- Pricing with sale and compare-at prices
- Product variants and specifications
- SEO fields for search optimization
- Brand and category relationships

### Orders Collection

- Order lifecycle management (pending → processing → shipped → delivered)
- Order items with product snapshots
- Shipping and billing address integration
- Payment method tracking
- Coupon application support
- Order notes and tracking numbers

### Inventory Collection

- Real-time stock tracking
- Product variants with individual stock levels
- Low stock threshold alerts
- Supplier information and lead times
- Warehouse location tracking

### Reviews Collection

- 5-star rating system
- Review moderation workflow
- Verified purchase indicators
- Helpful vote tracking
- Store response capability

## API Usage

All collections are accessible via REST API:

```bash
# Get all products
GET /api/products

# Get specific product
GET /api/products/{id}

# Create new order
POST /api/orders

# Get user's cart
GET /api/cart?where[customer][equals]={userId}
```

## Development

### Adding New Fields

1. Modify the collection configuration in `src/collections/`
2. Run `npm run generate:types` to update TypeScript types
3. Restart the development server

### Custom Validation

Collections include comprehensive validation rules. Extend them by adding custom validation functions to field configurations.

## Deployment

1. Build the application:

```bash
npm run build
```

2. Start the production server:

```bash
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## Support

For questions and support:

- [Payload CMS Documentation](https://payloadcms.com/docs)
- [GitHub Issues](https://github.com/Duy257/payload-cms/issues)
- [Payload Discord](https://discord.com/invite/payload)
