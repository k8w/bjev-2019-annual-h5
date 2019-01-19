const { ccclass, property } = cc._decorator;

@ccclass
export default class Input extends cc.Component {

    onEnable() {
        document.getElementById('input')!.style.display = 'flex';
    }

    onDisable() {
        document.getElementById('input')!.style.display = 'none';
    }
}