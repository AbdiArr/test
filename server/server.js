const koa = require("koa");
const app = new koa();
const body = require("koa-better-body");
const rootRouter = require("./routes/rootRouter");

app.use(body());

app.use(rootRouter.routes());
app.use(rootRouter.allowedMethods());

app.listen(3000);
