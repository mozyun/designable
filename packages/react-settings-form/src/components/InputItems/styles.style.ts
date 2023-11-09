import { createStyles } from 'antd-style'

const useStyles = createStyles(() => {
  return {
    'dn-input-items': {
      display: 'flex',
      flexWrap: 'wrap',
      marginLeft: '-8px',
      '&-item': {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
        color: '#333',
        '&-icon': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 8px',
          flexShrink: '0',
          flexGrow: '0',
          color: '#333',
        },
        '&-controller': {
          minWidth: '0',
          flexShrink: '1',
          flexGrow: '1',
          '.ant-radio-group': {
            display: 'flex',
            '.ant-radio-button-wrapper': {
              flexGrow: '1',
              display: 'flex',
              justifyContent: 'center',
            },
          },
        },
      },
    },
    'dn-input-items-item-controller': {
      width: '100%',
    },
    vertical: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  }
})
export default useStyles
