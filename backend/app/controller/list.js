"use strict";

const Controller = require("egg").Controller;

class ListController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.list.find();
    // ctx.body = [
    //   {
    //     name: "事务1",
    //     id: 0,
    //     isDone: true
    //   },
    //   {
    //     name: "事务2",
    //     id: 1,
    //     isDone: false
    //   },
    //   {
    //     name: "事务3",
    //     id: 2,
    //     isDone: false
    //   }
    // ];
  }
}

module.exports = ListController;
