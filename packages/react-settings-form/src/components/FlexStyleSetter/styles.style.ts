import { createStyles } from 'antd-style'

const useStyles = createStyles(() => {
  return {
    'dn-input-items': {
      marginTop: '-10px',
      marginLeft: '-10px',
      marginRight: '-10px',
      marginBottom: '10px',
      padding: '10px 10px 0 10px',
      backgroundColor: '#f5f5f5',
      '.ant-radio-group': {
        display: 'flex',
        width: '100%',
        '.ant-radio-button-wrapper': {
          flexGrow: '1',
          display: 'flex',
          justifyContent: 'center',
          padding: '0',
        },
      },
    },
  }
})
export default useStyles
