const Service = require("egg").Service;

class UpdateService extends Service {
  async updateOne(id, name) {
    let now = Date.now();
    // 更新一条数据
    const one = await this.ctx.model.List.findByPk(id);
    await one.update({
      name: name,
      created_at: now,
      updated_at: now
    });
  }
}

module.exports = UpdateService;
