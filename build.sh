#!/bin/bash
cd math
npm run build
cp -a ./build/. ../docs
