"use strict";

const Controller = require("egg").Controller;

class AddController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(ctx.request.body)
    const { val } = ctx.request.body;
    ctx.status = 201;
    ctx.body = await ctx.model.List.create({ name: val });
  }
}

module.exports = AddController;
