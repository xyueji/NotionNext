import BLOG from '@/blog.config'

/**
 * 添加ouo
 * @returns
 */
const Ouo = () => {
    return (<>
        {BLOG.OUO && BLOG.OUO_TOKEN && BLOG.OUO_DOMAINS && (<>
            <script type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: `
                     var ouo_token = '${BLOG.OUO_TOKEN}';
                     var domains = [${BLOG.OUO_DOMAINS}]; 
                   `
                    }}
            />
            <script src="//cdn.ouo.io/js/full-page-script.js" />
        </>)}
    </>)
}
export default Ouo
