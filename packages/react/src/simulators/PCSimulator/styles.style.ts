import { createStyles } from 'antd-style'

const useStyles = createStyles(() => {
  return {
    '@{prefix-cls}-pc-simulator': {
      backgroundColor: 'var(--dn-pc-simulator-bg-color)',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      boxSizing: 'border-box',
    },
  }
})
export default useStyles
