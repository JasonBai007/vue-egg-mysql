#!/bin/bash

# 先进入后端项目目录
cd ./backend

# &符号表示后台执行，立即返回，处理下面的命令
# 不加&符号，就会在这里阻塞
yarn run dev &

# 进入前端项目目录，并启动前端项目
cd ../frontend
yarn serve