const { ccclass, property } = cc._decorator;

@ccclass
export default class Input extends cc.Component {
    onEnable() {
        // this._addDom();
    }

    private _addDom() {
//         let div = document.createElement('div');
//         div.id = 'input';
//         Object.assign(div.style, {
//             position: 'fixed',
//             left: 0,
//             top: 0,
//             bottom: 0,
//             right: 0,
//             display: 'flex',
//             flexDirection: 'column',
//             textAlign: 'center',
//             justifyContent: 'center'
//         })
//         div.innerHTML = `
// <p>请输入姓名</p>
// <p><input type="text" /></p>
// <p>请选择入职时间</p>
// <p><input type="date" /></p>   
//         `.trim();
//         document.body.appendChild(div);
    }

    onDisable() {
        // let input = document.getElementById('input');
        // if (input) {
        //     input.remove();
        // }
    }
}