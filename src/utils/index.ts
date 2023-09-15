import { getContentstackContent, getContentstackContentQuery } from '@/services/contentStack/index'

export const getUrl = (props: any) => {
    const { level1, level2, level3, level4 } = props.params;
    return '/' + [level1, level2, level3, level4].filter(Boolean).join('/');
}

export const getPageProps = async (props: any) => {
    const url = getUrl(props);
    const website: any = await getContentstackContent('website', process.env.WEBSITE_ID || '');
    const tag = website.tag;

    let page = null;
    try {
        page = await getContentstackContentQuery('page', {url, tags: [tag]})
    } catch(err){
    }

    return {
        ...props,
        url,
        tag,
        contentstack: {
            website,
            page,
        },
    }
}

