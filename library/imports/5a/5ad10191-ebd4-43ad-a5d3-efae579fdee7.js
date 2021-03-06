"use strict";
cc._RF.push(module, '5ad10GR69RDraXT765Xn97n', 'Bullet');
// script/Bullet.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    ctor: function ctor() {
        this.m_updateMove = false;
        this.m_Speed = 1000;
    },
    start: function start() {},

    init: function init() {
        this.m_updateMove = false;
    },
    onCollisionEnter: function onCollisionEnter(other, self) {

        if (other.tag == 0) {
            var js = other.getComponent('' + other.tag);
            if (!js.m_bDie) {
                gGameCtl.onBulletKilled(this.node);
            }
        }
    },
    setSecondPos: function setSecondPos(pos) {
        var seq = cc.sequence(cc.moveTo(0.1, pos), cc.callFunc(function () {
            this.m_updateMove = true;
        }.bind(this)));
        this.node.runAction(seq);
    },
    setSpeed: function setSpeed(speed) {
        // this.m_Speed = speed;
    },
    update: function update(dt) {
        if (this.m_updateMove) {
            var y = this.node.y;
            y += this.m_Speed * dt;
            this.node.y = y;
            if (this.m_Speed == 0) {

                cc.log('速度:');
            }
            if (y > 920) {
                this.m_updateMove = false;
                gGameCtl.onBulletKilled(this.node);
            }
        }
    }
});

cc._RF.pop();