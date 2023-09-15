export const getUrl = (props: any) => {
    const { level1, level2, level3, level4 } = props.params;
    return '/' + [level1, level2, level3, level4].filter(Boolean).join('/');
}


