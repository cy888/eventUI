
// 所有的设置匹配规则
type RuleCompare = "=" | ">" | "<"

// 普通告警配置规则
interface AlarmSimpleRule {
    target: string;
    compare: RuleCompare;
    value: string;
}
// 时间区间配置规则
interface AlarmPeriodRule {
    target: string;
    start: Date;
    end: Date;
}
// 压缩规则配置（xxx相等)
interface AlarmCompressRule {
    target: string;
}
type AlarmRule = AlarmSimpleRule | AlarmPeriodRule | AlarmCompressRule;



// 告警压缩
interface CompressConfigRule {
    name: string;
    source?: string;
    description?: string;
    duration?: number; // timestamp
    // 一行内为且，不同行之间为或
    rules: AlarmRule[][];

}