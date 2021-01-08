#!/bin/bash

DEPLOY_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
BASE_DIR="$(cd $DEPLOY_DIR/.. && pwd)"

echo $BASE_DIR

cd $BASE_DIR

yarn install


cd $BASE_DIR/packages/core

yarn build

cd $BASE_DIR
