# minions-applications

**Application records, submission bundles, platform receipts, and status tracking**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-applications/sdk minions-sdk

# Python
pip install minions-applications

# CLI (global)
npm install -g @minions-applications/cli
```

---

## CLI

```bash
# Show help
applications --help
```

---

## Python SDK

```python
from minions_applications import create_client

client = create_client()
```

---

## Project Structure

```
minions-applications/
  packages/
    core/           # TypeScript core library (@minions-applications/sdk on npm)
    python/         # Python SDK (minions-applications on PyPI)
    cli/            # CLI tool (@minions-applications/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [applications.minions.help](https://applications.minions.help)
- Blog: [applications.minions.blog](https://applications.minions.blog)
- App: [applications.minions.wtf](https://applications.minions.wtf)

---

## License

[MIT](LICENSE)
