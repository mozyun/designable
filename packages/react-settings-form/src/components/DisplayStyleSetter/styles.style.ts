import { createStyles } from 'antd-style'

const useStyles = createStyles(() => {
  return {
    'dn-display-style-setter': {
      '&-radio': {
        display: 'flex',
        width: '100%',
        '.ant-radio-button-wrapper': {
          flexGrow: '1',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0',
        },
      },
    },
  }
})
export default useStyles
