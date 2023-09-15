
import { DynamicPage } from '@/components/index'
import { getContentstackContent } from '@/services/contentStack/index'

export default async function Page(props: any) {
  const data = await getContentstackContent('website', 'blte5be9b6f51c61c2a');

  return (
    <DynamicPage {...{...props, data}}/>
  )
}
