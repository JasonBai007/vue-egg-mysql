const Service = require("egg").Service;

class AddService extends Service {
  async addOne() {
    return await this.ctx.model.List.addOne();
  }
}

module.exports = AddService;
