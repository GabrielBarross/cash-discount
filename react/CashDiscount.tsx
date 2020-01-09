import React, { useState, useEffect } from 'react'
import useProduct from 'vtex.product-context/useProduct'
import { useCssHandles } from 'vtex.css-handles'
import { FormattedMessage } from 'react-intl'

const CashDiscount: StorefrontFunctionComponent<any> = () => {
  const { selectedItem } = useProduct()
  const price = selectedItem.sellers[0].commertialOffer.Price
  const [cashPrice, setCashPrice] = useState<number>(price)
  const percentage = 0.1
  useEffect(() => {
    const discountResult = price * percentage
    setCashPrice(price - discountResult)
    return
  }, [])

  const CSS_HANDLES_CASH = ['cashContainer', 'cashText', 'cashNumber']
  const handles = useCssHandles(CSS_HANDLES_CASH)

  return (
    <>
      <div className={`${handles.cashContainer}`}>
        <p className={`${handles.cashText} f4 c-emphasis`}>
          <span className={`${handles.cashNumber} b`}>{cashPrice}</span>{' '}
          <FormattedMessage id="store/cash-discount.cash-text" />
        </p>
      </div>
    </>
  )
}

//This is the schema form that will render the editable props on SiteEditor
CashDiscount.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {},
}

export default CashDiscount
