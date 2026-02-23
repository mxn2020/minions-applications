---
title: Quick Start
description: Get up and running with Minions Applications in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-applications/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_applications import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
applications info
```
