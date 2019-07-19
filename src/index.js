#!/usr/bin/env node

const Koa = require('koa');
const router = require('koa-router')();
const body = require('koa-json-body');

const app = new Koa();
const port = 8080;

router.post('/message', (ctx, next) => {
  const { name } = ctx.request.body;
  ctx.body = {message: `Hello ${name}`};
});

router.get('/health', ctx => {
  ctx.body = 'OK';
});

app.use(body())
app.use(router.routes());
app.listen(port);
console.log(`Listening on localhost:${port}`);
