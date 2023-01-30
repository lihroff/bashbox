#!/usr/bin/env zx

const [port] = process.argv.slice(3);

await $`kill -9 $(sudo lsof -t -i:${port})`;
