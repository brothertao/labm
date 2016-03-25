#!/usr/bin/bash

basePath=~/.atom
if [ ! -d "$basePath" ]; then
    echo "$basePath not exsits, you need install atom"
fi
bak () {
    if [ -f "$basePath/$1" -a ! -L "$basePath/$1" ]; then
        echo "$1 exsits, will be renamed $1.bak"
        mv "$basePath/$1" "$basePath/$1.bak"
    fi

    if [ ! -L "$basePath/$1" ]; then
        ln -s `pwd`"/../configs/$1" "$basePath/$1"
    else
        echo "$basePath/$1 soft link had exsited"
    fi
}

files=("config.cson init.coffee keymap.cson snippets.cson styles.less")

for f in ${files[@]}; do
    bak $f
done

if [ ! -L "$basePath/packages/neoconsole" ]; then
    ln -s `pwd`"/../neoconsole" "$basePath/packages"
else
    echo "$basePath/packages/neoconsole soft link had exsited"
fi
