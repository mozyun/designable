import { createStyles } from 'antd-style'

const useStyles = createStyles(() => {
  return {
    'dn-text': {
      '&:empty::before': {
        content: "'Please Input'",
        display: 'block',
        opacity: '0.6',
      },
      '&:focus': { padding: '4px' },
    },
  }
})
export default useStyles
