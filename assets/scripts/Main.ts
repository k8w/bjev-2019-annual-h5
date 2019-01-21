import TextConfig from "./TextConfig";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    @property(cc.Node)
    result: cc.Node = null as any;

    @property(cc.Node)
    input: cc.Node = null as any;

    @property(cc.Label)
    text1: cc.Label = null as any;

    @property(cc.Label)
    text2: cc.Label = null as any;

    @property(cc.Label)
    keyword: cc.Label = null as any;

    @property(cc.AudioClip)
    bgm: cc.AudioClip = null as any;

    onLoad() {
        (window as any).showResult = this.showResult;

        // TEST
        // this.showResult('王忠阳', new Date('2019/01/17'));
    }

    showResult = async (name: string, date: Date) => {
        let minYear = TextConfig.min(v => parseInt(v.year))!;
        let maxYear = TextConfig.max(v => parseInt(v.year))!;
        let numYear = date.getFullYear();
        if (numYear < minYear || numYear > maxYear) {
            alert('入职时间填写错误');
            return;
        }
        let year = numYear + '';

        let config = TextConfig.find(v => v.year == year);
        if (!config) {
            alert('入职时间填写错误');
            return;
        }

        console.log('showResult')
        this.result.children.forEach(v => {
            v.active = false;
        })

        cc.audioEngine.playMusic(this.bgm, true);

        this.input.active = false;
        await this._wait(200);
        this.result.active = true;

        let day = ((Date.today() - date.getTime()) / 86400000 | 0) + 1;
        this.text1.string = `亲爱的${name}
感谢您与北汽新能源共同成长的
${day}个日日夜夜`;

        this.text2.string = config.words[Math.random() * config.words.length | 0];
        this.keyword.string = `${year} ${config.keyword}`;

        const gap = 2.5;
        const duration = 1.5;
        this.result.children.forEach((v, i) => {
            v.active = true;
            v.opacity = 0;
            v.scale = 0.9;
            v.runAction(cc.sequence(
                cc.delayTime(gap * i),
                cc.fadeIn(duration)
            ))
        });

        setTimeout(() => {
            cc.director.once(cc.Director.EVENT_AFTER_DRAW, () => {
                let dataUrl = cc.game.canvas.toDataURL();

                let img = document.createElement('img');
                Object.assign(img.style, {
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: '100vw',
                    height: '100vh',
                    opacity: 0
                })
                document.body.appendChild(img);
                img.src = dataUrl;
            })
        }, ((this.result.children.length - 1) * gap + duration) * 1000 + 200);
    }

    private async _wait(ms: number) {
        return new Promise(rs => {
            setTimeout(() => { rs() }, ms)
        })
    }

}