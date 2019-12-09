const Service = require("egg").Service;

class AddService extends Service {
  async addOne(name) {
    return await this.ctx.model.List.create({ name });
  }
}

module.exports = AddService;
