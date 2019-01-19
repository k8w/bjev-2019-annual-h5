require('k8w-extend-native');

let a = `2009	启程	平凡之路，感恩有你
		独具慧眼，相爱至深
		三朝元老，爱的深沉
2010	积累	加入我们，你就是关键的最少数
		困时接受爱，善时给与爱
		不要等待机会，去创造机会
2011	坚持	奋斗到无能为力，拼搏到感动自己
		成功须为早，岂能枉少年
		"浮世三千，吾爱有三，日月与蓝小鲸
日为朝，月为暮，鲸为朝朝暮暮"
		
2012	凝聚	全年365天，工会在你身边
		燃烧你的卡路里，储存能量，续航更长
		今晚吃鲸，大吉大利
		
2013	拼搏	不会造车的营销人不是好客服
		有多大的思想，才有多大的能量
		人生没有彩排，每一天都是现场直播
2014	奋斗	好嗨哟！感觉人生到达了巅峰
		生而卫蓝，奋斗不止
		年轻，是最酷的武器
2015	趋势	狼性文化，你就是最in狼小鲸
		EU260，更远，更长
		未来不可知，有你才精彩
		
		
2016	开拓	尝最苦的药，喝最烈的酒，感谢拼搏的你
		张大锤，你老板喊你回蓝谷加班
		SOP比女朋友重要，过阀点比男朋友暖心
		
		
2017	发展	欢迎你，蓝谷居民
		正视不足，抓住问题不放过，专业化、职业化、国际化，你是“敢追”的蓝小鲸
		三分战略，七分执行，激活你的创造力，你是“敢为”的蓝小鲸
		
		
2018	求变	对不适合高质量发展的要素说不，改进思维方式和行为，你是“敢变”的蓝小鲸
		能吃苦能干事，把不可能变成可能、变成现实，你是“敢拼”的蓝小鲸
		突破习惯的思维模式和工作方式，自我激励，自我革命，自我成长，你是“敢想”的蓝小鲸
		
		
2019	极致	欢迎来到2019年北汽新能源新春联欢晚会暨第五届企业文化节，敬九赢十，马上启程`;
b = a.split('\n').filter(v => v);
c = b.map(v => v.split('\t').filter(v => v))
d = c.filter(v => v.length)

let output = [];
let last;
for (let i = 0; i < d.length; ++i) {
	if (d[i].length === 1) {
		last.words.push(convertWord(d[i][0]))
	}
	else {
		last = {
			year: d[i][0],
			keyword: d[i][1],
			words: [convertWord(d[i][2])]
		};
		output.push(last);
	}
}

function convertWord(str) {
	str = str.replace(/"/g, '');
	str = str.replace(/ /g, '');
	let match = str.match(/，/g);
	if (match && match.length <= 3) {
		str = str.replace(/，/g, '\n');
	}
	return str;
}

console.log(JSON.stringify(output, null, 4))

console.log(output.map(v => v.keyword).join('').split('').distinct().join(''))