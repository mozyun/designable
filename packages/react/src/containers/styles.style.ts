import { createStyles } from 'antd-style'

const useStyles = createStyles(() => {
  return {
    '@{prefix-cls}-viewport': {
      height: '100%',
      width: '100%',
      minHeight: '100px',
      position: 'relative',
      outline: 'none',
      boxSizing: 'border-box',
      userSelect: 'none',
      overflow: 'overlay',
    },
  }
})
export default useStyles
