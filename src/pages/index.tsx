import type { GetServerSideProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { wrapper } from '@/store/index'
import { coreActions } from '@/store/modules/core'
import { useTranslation } from 'next-i18next'

const Home: NextPage = () => {
  const { t } = useTranslation('common')
  return (
    <div className="flex items-center justify-center">
      <p>{t('title')}</p>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { locale } = context

    const namespaces = ['common']
    const translations = await serverSideTranslations(locale as string, namespaces)

    store.dispatch(coreActions.setStatus('START DONE'))

    return {
      props: {
        ...translations,
      },
    }
  }
)

export default Home
