"use strict";

const Controller = require("egg").Controller;

class ListController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.list.find();
  }

  async create() {
    const { ctx } = this;
    const { val } = ctx.request.body;
    ctx.status = 201;
    ctx.body = await ctx.service.add.addOne(val);
  }
}

module.exports = ListController;
