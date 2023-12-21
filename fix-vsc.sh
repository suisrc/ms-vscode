#!/bin/bash
set -e

VSC_HOME=./vsc

sed -i 's/"$0"/"$(readlink -f $0)"/' ${VSC_HOME}/bin/code-server
sed -i 's/"$0"/"$(readlink -f $0)"/' ${VSC_HOME}/bin/remote-cli/code
rm  -f ${VSC_HOME}/node && ln -s /usr/local/node/bin/node ${VSC_HOME}/node

echo "fix vsc done."