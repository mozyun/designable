import { createStyles } from 'antd-style'

const useStyles = createStyles(() => {
  return {
    'dn-color-input': {
      width: '100%',
      '.ant-popover-inner-content': { padding: '0', userSelect: 'none' },
      '&-color-tips': {
        width: '20px',
        height: '20px',
        borderRadius: '2px',
        border: '1px solid #f5f5f5',
        cursor: 'pointer',
      },
    },
  }
})
export default useStyles
