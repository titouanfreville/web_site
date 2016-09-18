#!/bin/bash

src=$1
dest=$2

echo "Mode de Compilation : Debug(d) ou Production(P)"

read mode

case "$mode" in
  d) compass watch --sass-dir $dest --force -s expand $src;;
  *) compass watch --sass-dir $dest --force -s compressed --no-line-comments $src;;
esac;