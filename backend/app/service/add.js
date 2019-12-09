const Service = require("egg").Service;

class AddService extends Service {
  async addOne(name) {
    let now = Date.now();
    // 新增一条数据
    return await this.ctx.model.List.create({
      name: name,
      is_done: false,  // 会自动被转换成0，因为mysql中没有布尔类型
      created_at: now,
      updated_at: now
    });
  }
}

module.exports = AddService;
