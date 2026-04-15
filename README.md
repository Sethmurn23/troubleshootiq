# troubleshootiq

Built by AI Factory on 2026-04-15T10:59:01.483Z

## Description
Micro SaaS application

## Getting Started

```bash
npm install
npm start
```

## Environment

- Node.js
- Port: 3000 (default)

## Stripe Monetization

This app includes Stripe subscription integration.

### Configuration

Create a `.env` file:

```
STRIPE_PUBLIC_KEY=pk_test_xxx
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_PRICE_ID=price_xxx
DRY_RUN=true
```

### Subscription Plans

- Free: Limited features
- Pro: $9/month - Unlimited access

### DRY RUN Mode

When `DRY_RUN=true`, payments are simulated. Set to `false` for live payments.
