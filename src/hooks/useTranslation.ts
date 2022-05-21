import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Translation } from 'types/common'

export default () => {
  const translation = useTranslation()

  const t = useCallback((key: Translation) => {
    if (typeof key === 'string') return translation.t(key)
    return translation.t(key.key, key.options)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return t
}
