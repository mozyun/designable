import { createStyles } from 'antd-style'

const useStyles = createStyles(() => {
  return {
    'dn-poly-input': {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
    },
    'dn-poly-input-content': {
      flexGrow: '2',
      marginRight: '2px',
      display: 'flex',
      '.ant-select': { width: '100%' },
      '.ant-input-number': { width: '100%' },
    },
    'dn-poly-input-controller': {
      border: '1px solid #f5f5f5',
      borderRadius: '2px',
      cursor: 'pointer',
      padding: '0 8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexGrow: '0',
    },
  }
})
export default useStyles
