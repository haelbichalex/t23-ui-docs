---
title: Icon
---

<script setup>
import { T23Grid } from 't23-ui';
import { T23Icon, registerIcons } from 't23-ui';
import { completeIconSet } from 't23-ui/icons';
registerIcons(...completeIconSet);
</script>

# Icon

TODO

## Usage

```vue
<script setup>
import { T23Icon } from 't23-ui';
import { t23IconBubble16 } from 't23-ui/src/icons/output';
</script>

<template>
  <t23-icon :name="t23IconBubble16" :size="64" />
</template>
```

## Demo

<t23-grid
    cols="xs:2 s:3 m:4"
    column-gap="12"
    row-gap="12"
  >
    <div v-for="(icon, key) in completeIconSet" :key="key" class="docs-icon-wrapper">
        <t23-icon :size="64" :name="icon.name" />
        <div>{{ icon.name }}</div>
    </div>
</t23-grid>

## API

### Props

| Name | Type | Default | Description |
| ------------- | ----------------- | ------------- | ------------- |
| icon | `T23Icon` | - | The icon to be shown |
| size | `number \| string` | 16 | Icon size |

## Source

<<< @/../node_modules/t23-ui/src/components/Icon/T23Icon.ts

