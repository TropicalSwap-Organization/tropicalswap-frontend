import { Modal } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'

const ConfirmSwapModalContainer = ({ children, handleDismiss }) => {
  const { t } = useTranslation()

  return (
    <Modal title={t('Confirm Swap')} style={{ border: 'none', borderBottom: '4px solid #FFBF00' }} onDismiss={handleDismiss}>
      {children}
    </Modal>
  )
}

export default ConfirmSwapModalContainer
