const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  console.log(1);
  const started = new Date();
  await next();
  console.log(new Date() - started + 'ms');

});

app.use((ctx, next) => {
  console.log(2);
  
  const condition = true;
  const obj = { "get": "whar", "id": 4 };
  const promise = new Promise((a, b) => {
    if (condition) {
      a(obj);
    } else {
      b('rejected')
    }
  });

  promise
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  next();

});

app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(4000, () => {
  console.log('heurm server is listening to port 4000');
});