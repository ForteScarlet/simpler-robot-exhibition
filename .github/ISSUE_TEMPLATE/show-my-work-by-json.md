---
name: Show my work by JSON
about: 我有一个不错的作品想要展示！
title: ''
labels: documentation
assignees: ForteScarlet

---

<!--
按照下面的json格式进行修改。
可提供的作者信息或许会在未来逐步丰富。
-->
```json
{
            // 类型
            // 第三方的(third-part)
            // 作品类型，第一个元素不要动，改第二个，可选：program(应用) | frame(框架)
            "type": ["third-part", "program"], // 类型
            // 作品信息
            "work": {
                // 作品标题/名称
                "title": "这里是你的作品标题或名称", 
                 // 作品logo，如果没有链接，请在文末提供logo图片，或者提供图片的获取方式。
                "logo": "simbot-logo.png",
            },

            // 作者信息（目前仅支持展示第一个的信息）
            "authors": [
           {
               // 作者名称
                "name": "作者的名称在这里“, 
                // 作者头像，如果没有链接，请在文末提供logo图片，或者提供图片的获取方式。
                "avatar": 'https://q1.qlogo.cn/g?b=qq&nk=1149159218&s=100', 
               // 作者的个人网站，可选
                "website": "" 
            }
            ],

            // 基础介绍信息
            "info": {
                // 主要说明，支持html标签
                "summary": "这里是主要说明", 
                // 辅助说明，支持html标签
                "subSummary": "这里是次要 <b>说明</b>", 
                // 卡片footer
                "foot": ""
            }
        }
```
<br />
<!-- 如果有需要补充的内容，在这之下 -->
