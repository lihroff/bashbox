#!/usr/bin/env zx

/**
 *
 * >$ open
 * By default, open2 set files as working directory
 *
 */

const [name, args = ["."]] = process.argv.slice(2);

console.log("open2");

await $`open ${args.join(" ")}`;
