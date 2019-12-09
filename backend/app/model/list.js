"use strict";

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  // 定义List数据模型，对应数据库中的lists表（注意：这里的名称+s，才是数据库中的表的名称）
  const List = app.model.define(
    "list",
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(30),
      is_done: INTEGER,
      created_at: DATE,
      updated_at: DATE
    },
    {
      timestamps: false // 关闭自动添加时间戳，这会导致返回的数据中多出来 createdAt 和 updatedAt 字段
    }
  );

  return List;
};
