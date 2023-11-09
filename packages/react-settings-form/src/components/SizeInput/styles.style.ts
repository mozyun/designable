import { createStyles } from 'antd-style'

const useStyles = createStyles(() => {
  return {
    'dn-size-input': {
      display: 'flex',
      width: '100%',
      flexGrow: '2',
      marginRight: '2px',
    },
    '.ant-input-number': {
      flexGrow: '2',
      marginRight: '2px',
    },
    'dn-size-input-unit': {
      cursor: 'pointer',
      height: '32px',
      padding: '0 8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexGrow: '0',
    },
  }
})
export default useStyles
