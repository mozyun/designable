import React from 'react'
import { TimePicker as FormilyTimePicker } from '@mozyun/formily-antd'
import { createBehavior, createResource } from '@mozyun/designable-core'
import { DnFC } from '@mozyun/designable-react'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'

export const TimePicker: DnFC<React.ComponentProps<typeof FormilyTimePicker>> =
  FormilyTimePicker

TimePicker.Behavior = createBehavior(
  {
    name: 'TimePicker',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'TimePicker',
    designerProps: {
      propsSchema: createFieldSchema(AllSchemas.TimePicker),
    },
    designerLocales: AllLocales.TimePicker,
  },
  {
    name: 'TimePicker.RangePicker',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'TimePicker.RangePicker',
    designerProps: {
      propsSchema: createFieldSchema(AllSchemas.TimePicker.RangePicker),
    },
    designerLocales: AllLocales.TimeRangePicker,
  }
)

TimePicker.Resource = createResource(
  'Inputs',
  {
    icon: 'TimePickerSource',
    elements: [
      {
        componentName: 'Field',
        props: {
          type: 'string',
          title: 'TimePicker',
          'x-decorator': 'FormItem',
          'x-component': 'TimePicker',
        },
      },
    ],
  },
  {
    icon: 'TimeRangePickerSource',
    elements: [
      {
        componentName: 'Field',
        props: {
          type: 'string[]',
          title: 'TimeRangePicker',
          'x-decorator': 'FormItem',
          'x-component': 'TimePicker.RangePicker',
        },
      },
    ],
  }
)
