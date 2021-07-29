export default {
    workData() {
        // noinspection HttpUrlsUsage
        return {
            // official
            // 类型
            // 官方的： core | component | other
            // 第三方的：
            // 基本信息
            type: ['official', 'other'], // 类型
            // logo: '/simbot-logo.png',
            // 作品信息
            work: {
                title: 'CatCode', // 作品标题名称
                logo: 'catcode-logo.png', // 作品logo

            },

            // 作者信息
            authors: [
                {
                    name: 'ForteScarlet', // 作者名称
                    avatar: 'https://q1.qlogo.cn/g?b=qq&nk=1149159218&s=100', // 作者头像
                    website: 'http://forte.love' // 作者网站，可选
                }
            ],


            info: {
                summary: '猫猫码（Cat code），一个可爱的通用特殊码，CQ码的精神延续。',
                subSummary: '猫猫码是一个具有特定格式的字符串格式特殊码，在simbot中作为送信特殊码规范使用，是simbot实现特殊消息标准化最可爱的方式。',
                foot: 'https://github.com/ForteScarlet/CatCode' // 卡片底层footer
            }
        }
    }
}