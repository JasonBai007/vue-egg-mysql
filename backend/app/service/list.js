const Service = require("egg").Service;

class ListService extends Service {
  async find() {
    return await this.ctx.model.List.findAll();
  }
}

module.exports = ListService;
