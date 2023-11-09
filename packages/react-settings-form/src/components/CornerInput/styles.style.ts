import { createStyles } from 'antd-style'

const useStyles = createStyles(() => {
  return {
    'dn-corner-input': {
      display: 'flex',
      '&-column': {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      },
      '&-cell': {
        width: '26px',
        height: '26px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        borderRadius: '3px',
        color: 'rgba(0, 0, 0, 0.6)',
        margin: '5px',
      },
    },
    active: {
      background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))',
    },
  }
})
export default useStyles
