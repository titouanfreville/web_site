#!/bin/bash

src=$1
dest=$2

cd $src

echo "Mode de Compilation : Debug(d) ou Production(P)"

read mode

case "$mode" in
  d)  for i in *.haml
      do
        haml "$i" ../"`echo "$i" | sed -e 's/.haml$/.html'/`";
      done;;
  *) for i in *.haml
      do
        haml --remove-whitespace "$i" ../"`echo "$i" | sed -e 's/.haml$/.html'/`";
      done;;
esac;