'use strict';

class Collection {
  constructor(model) {
    this.model = model;
  }
  async create(data) {
    try {
      const newRecord = await this.model.create(data);
      return newRecord;
    } catch (error) {
      console.error('create error', error);
      return error;
    }
  }

  async read(id=null) {
    try {

      if(id) {
        const singleRecord = await this.model.findByPk(id);
        return singleRecord;
      } else {
        const records = await this.model.findAll();
        return records;
      }
    } catch (error) {
      console.error('model read error');
      return error;
    }
  }
  async readAllWith(model) {
    try {
      let record = await this.model.findAll({include: {
        model: model,
      }});
      return record;

    } catch (error) {
      console.error(error);
      return error;

    }
  }
}




module.exports = Collection;
