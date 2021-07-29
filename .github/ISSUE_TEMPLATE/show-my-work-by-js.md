---
name: Show my work by JS
about: 我有一个不错的作品想要展示~
title: ''
labels: documentation
assignees: ForteScarlet

---

<!--
按照下面的json格式进行修改。
可提供的作者信息或许会在未来逐步丰富。
-->
```javascript
export default {
    workData() {
        return {
            // 第三方作品类型
            // 类型，第一个元素不要动，改第二个，可选的内容：program(应用) | frame(框架)
            type: ['third-part', 'program'],
            // 作品信息
            work: {
                // 作品标题名称
                title: '你的作品名称',
                // 作品logo，如果没有外部链接，请在文末提供图片，或者图片的获取方式
                logo: 'simbot-logo.png',

            },

            // 作者信息
            // 目前暂时只支持展示第一个作者的信息
            authors: [
                {
                    // 作者名称
                    name: 'ForteScarlet',
                    // 作者的头像。
                    // 参考路径: QQ头像: https://q1.qlogo.cn/g?b=qq&nk=你的QQ号&s=100
                    // 如果没有外部链接，请在文末提供图片，或者图片的获取方式
                    avatar: '', // 作者头像
                    // 作者网站，可选
                    website: null
                }
            ],


            info: {
                // 主要说明，支持html标签
                summary: '这是主要 <b>说明</b>',
                // 辅助说明，支持html标签
                subSummary: '这是辅助 <b>说明</b>',
                // 卡片底层footer
                foot: ''
            }
        }
    }
}
```
<br />
<!-- 如果有需要补充的内容，在这之下 -->
