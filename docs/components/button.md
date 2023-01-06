<script setup lang="ts">
import { T23Button } from 't23-ui'
</script>

# Button

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

## Demo

### Primary
<t23-button type="primary">Primary</t23-button>
<hr>
<t23-button type="secondary">Secondary</t23-button>
<hr>
<t23-button type="primary" size="large" style="margin-right: 10px">Large</t23-button>
<t23-button type="primary" size="medium" style="margin-right: 10px">Medium</t23-button>
<t23-button type="primary" size="small" style="margin-right: 10px">Small</t23-button>

## API

### Props

| Name | Type | Default | Description |
| ------------- | ----------------- | ------------- | ------------- |
| type | `'primary' \| 'secondary'` | `primary` | Type of button |
| size |  `'small' \|   'medium' \|  'large'` | `medium` | Button size |
| disabled | Boolean | `false` | Whether the button is disabled. |


### Slots

| Name  | Parameters | Description |
| ------------- | ------------- | ------------- |
| Default  | ()  | The default content of the button |

## Source

<<< @/../node_modules/t23-ui/src/components/Button/T23Button.vue

