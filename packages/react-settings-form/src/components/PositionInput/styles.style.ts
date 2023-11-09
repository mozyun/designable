import { createStyles } from 'antd-style'

const useStyles = createStyles(() => {
  return {
    'dn-position-input': {
      display: 'flex',
      flexDirection: 'column',
    },
    'dn-position-input-row': {
      display: 'flex',
      justifyContent: 'center',
    },
    'dn-position-input-cell': {
      width: '26px',
      height: '26px',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      borderRadius: '3px',
      color: '#333',
      margin: '5px',
    },
    'dn-position-input-cell.active': {
      background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))',
    },
  }
})
export default useStyles
