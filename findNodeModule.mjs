#!/usr/bin/env zx

const [pkgName] = process.argv.slice(3);

await $`find ./node_modules -type d -name ${pkgName}`;

await $`exit 0`;
