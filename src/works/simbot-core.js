export default {
    workData() {
        // noinspection HttpUrlsUsage
        return {
            // official
            // 类型
            // 官方的： core | component | other
            // 第三方的：
            // 基本信息
            type: ['official', 'core'], // 类型
            // logo: '/simbot-logo.png',
            // 作品信息
            work: {
                title: 'simple-robot-core', // 作品标题名称
                logo: 'simbot-logo.png', // 作品logo

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
                summary: 'simple-robot是一个通用性的机器人开发框架，以一套标准规范快速开发多个不同平台下的机器人应用。', // 主要说明
                subSummary: 'core(核心)模块是对api的最基础实现，也是官方组件的基础。', // 辅助说明
                foot: 'https://github.com/ForteScarlet/simpler-robot' // 卡片底层footer
            }
        }
    }
}