"use strict";

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  // 对应todo数据库中的lists表，并且必须有created_at字段和updated_at字段
  const List = app.model.define("list", {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    is_done: INTEGER,
    created_at: DATE,
    updated_at: DATE
  });

  return List;
};
