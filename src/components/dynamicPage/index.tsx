'use client'

import { getUrl } from '@/utils/index'
import { ENV_VARIABLE } from '@/constants/index'

export const DynamicPage = (props: any) => {
    const url = getUrl(props);
    console.log(props)

    return (
        <>
            <div>DynamicPage</div>
            <div>url {url}</div>
            <div>ENV_VARIABLE {ENV_VARIABLE}</div>
        </>
    )
}
