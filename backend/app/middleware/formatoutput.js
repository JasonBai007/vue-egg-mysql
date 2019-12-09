// 包裹返回结果中间件
module.exports = (options, app) => {
  return async function formatoutput(ctx, next) {
    await next();

    ctx.body = {
      status: 200,
      msg: "success",
      data: ctx.body
    };
  };
};
