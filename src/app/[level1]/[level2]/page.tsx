
import { DynamicPage } from '@/components/index'
import { getPageProps } from '@/utils/index'

export default async function Page(props: any) {
  const pageProps = await getPageProps(props)

  return (
    <DynamicPage {...pageProps}/>
  )
}
