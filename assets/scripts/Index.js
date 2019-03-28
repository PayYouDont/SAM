const util = require('util');
cc.Class({
    extends: cc.Component,

    properties: {
        /*bg: {
            default: null,
            type: cc.TiledMap
        },*/
    },
    onLoad() {
        let size = cc.director.getWinSizeInPixels();
        this.width = size.width;
        this.height = size.height;

    },
    startScene() {
        cc.director.loadScene('select_Scene')
       /* switch (event.node.name) {
            case  'caseExperience':
                cc.director.loadScene('caseExperience');
                break;
            case 'networkFlow':
                cc.director.loadScene('networkFlow');
                break;
            case 'exampleExplain':
                cc.director.loadScene('exampleExplain');
                break
            default:
                break
        }*/

    },

// start () {},

// update (dt) {},
})
;
