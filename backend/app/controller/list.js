"use strict";

const Controller = require("egg").Controller;

class ListController extends Controller {
  // 返回列表
  async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.list.find();
  }
  // 新增一条数据
  async create() {
    const { ctx } = this;
    const { val } = ctx.request.body;
    ctx.status = 201;
    ctx.body = await ctx.service.add.addOne(val);
  }
  // 删除一条数据
  async delete() {
    const { ctx } = this;
    await ctx.service.delete.delete(ctx.params.id);
    ctx.status = 200;
  }
}

module.exports = ListController;
