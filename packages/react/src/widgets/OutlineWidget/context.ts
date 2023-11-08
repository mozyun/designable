import { TreeNode } from '@mozyun/designable-core'
import React, { createContext } from 'react'

export interface INodeContext {
  renderTitle?: (node: TreeNode) => React.ReactNode
  renderActions?: (node: TreeNode) => React.ReactNode
}

export const NodeContext = createContext<INodeContext>({})
