---
title: color
---

<script setup>
import { T23Grid } from '@haelbichalex/t23-ui';
import Color from '../demo/Color.vue';

const colorValues = [900, 800, 700, 600, 500, 400, 300, 200, 100];
</script>

# Color

Colors are defined with a range of 900 to 100 and are built using [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties).
They are prefixed with `t23-color` and suffixed with the respective color value, f.e. `--t23-color-primary-500`.


## Override color variables

You can override colors either on a global scope, or on elements:

```css
:root {
    --t23-color-primary-500: red;
}

element {
    --t23-color-secondary-100: #00ff00;
}
```


Those variables can be used in CSS with the [`var()`](https://developer.mozilla.org/en-US/docs/Web/CSS/var) function:

```css
element {
    color: var(--t23-color-primary-500);
}
```

## Helper classes

All colors have according helper classes, for `color` you can use f.e. `.color-primary-500` and for `background-color` you can use f.e. `.bg-color-primary-500`.

### Example

```html
<div class="color-primary-100 bg-color-secondary-500"></div>
```

## Demo
### Neutral

<p></p>

<t23-grid
cols="9"
column-gap="12"
row-gap="12"
>
    <color v-for="value in colorValues" color="neutral" :value="value"></color>
</t23-grid>

### Primary

<p></p>

<t23-grid
    cols="9"
    column-gap="12"
    row-gap="12"
>
    <color v-for="value in colorValues" color="primary" :value="value"></color>
</t23-grid>

### Secondary

<p></p>

<t23-grid
cols="9"
column-gap="12"
row-gap="12"
>
    <color v-for="value in colorValues" color="secondary" :value="value"></color>
</t23-grid>

### Tertiary

<p></p>

<t23-grid
cols="9"
column-gap="12"
row-gap="12"
>
    <color v-for="value in colorValues" color="tertiary" :value="value"></color>
</t23-grid>

### Danger

<p></p>

<t23-grid
cols="9"
column-gap="12"
row-gap="12"
>
    <color v-for="value in colorValues" color="danger" :value="value"></color>
</t23-grid>

### Success

<p></p>

<t23-grid
cols="9"
column-gap="12"
row-gap="12"
>
    <color v-for="value in colorValues" color="success" :value="value"></color>
</t23-grid>
