import React, { useMemo } from 'react'
import { ComponentTreeWidget, useTreeNode } from '@mozyun/designable-react'
import { observer } from '@formily/reactive-react'
import { FormProvider } from '@formily/react'
import { createForm } from '@formily/core'

export const Content = () => {
  const form = useMemo(() => createForm(), [])
  return (
    <FormProvider form={form}>
      <ComponentTreeWidget
        components={{
          Field: observer(
            (props: React.HtmlHTMLAttributes<HTMLSpanElement>) => {
              const node = useTreeNode()
              return (
                <span
                  {...props}
                  style={{
                    background: '#eee',
                    display: 'inline-block',
                    ...props.style,
                    padding: '10px 20px',
                    border: '1px solid #ddd',
                  }}
                >
                  <span data-content-editable="title">{node.props.title}</span>
                  {props.children}
                </span>
              )
            }
          ),
          Card: observer((props) => {
            return (
              <div
                {...props}
                style={{
                  width: 200,
                  height: 100,
                  ...props.style,
                  background: '#eee',
                  border: '1px solid #ddd',
                  display: 'flex',
                  padding: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {props.children ? (
                  props.children
                ) : (
                  <span>拖拽字段进入该区域</span>
                )}
              </div>
            )
          }),
        }}
      />
    </FormProvider>
  )
}
