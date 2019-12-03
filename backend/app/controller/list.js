'use strict';

const Controller = require('egg').Controller;

class ListController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, fasfa';
  }
}

module.exports = ListController;
