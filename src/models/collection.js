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
}



module.exports = Collection;
