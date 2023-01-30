#!/usr/bin/env zx

/**
 * 
 * packages are installed into the {prefix}/lib/node_modules folder, instead of the current working directory.
 * bin files are linked to {prefix}/bin
 * man pages are linked to {prefix}/share/man 
 * 
 */
$.verbose = false

const { stdout }= await $`npm prefix -g`

const nodeDir = stdout.replace(/\r\n|\n$/, '')

const node_modules = path.join(nodeDir, 'lib/node_modules')

console.log('node_module [g]:', node_modules)