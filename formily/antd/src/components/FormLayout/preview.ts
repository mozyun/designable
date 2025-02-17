import React from 'react'
import { FormLayout as FormilyFormLayout } from '@mozyun/formily-antd'
import { createBehavior, createResource } from '@mozyun/designable-core'
import { DnFC } from '@mozyun/designable-react'
import { withContainer } from '../../common/Container'
import { createVoidFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'

export const FormLayout: DnFC<React.ComponentProps<typeof FormilyFormLayout>> =
  withContainer(FormilyFormLayout)

FormLayout.Behavior = createBehavior({
  name: 'FormLayout',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'FormLayout',
  designerProps: {
    droppable: true,
    propsSchema: createVoidFieldSchema(AllSchemas.FormLayout),
  },
  designerLocales: AllLocales.FormLayout,
})

FormLayout.Resource = createResource('Layouts', {
  icon: 'FormLayoutSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'void',
        'x-component': 'FormLayout',
      },
    },
  ],
})
