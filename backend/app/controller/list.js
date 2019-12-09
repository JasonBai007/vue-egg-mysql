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
  // 更新一条数据
  async update() {
    const { ctx } = this;
    await ctx.service.update.updateOne(ctx.params.id, ctx.request.body.val);
    ctx.status = 200;
  }
  // 删除一条数据
  async delete() {
    const { ctx } = this;
    await ctx.service.delete.deleteOne(ctx.params.id);
    ctx.status = 200;
  }
}

module.exports = ListController;
