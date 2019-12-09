const Service = require("egg").Service;

class DeleteService extends Service {
  async deleteOne(id) {
    const one = await this.ctx.model.List.findByPk(id);
    return await one.destroy();
  }
}

module.exports = DeleteService;
