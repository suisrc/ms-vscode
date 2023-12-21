# 说明

cd dist
## 下载 vscode cli

```sh
curl -Lk 'https://code.visualstudio.com/sha/download?build=stable&os=cli-alpine-x64' --output vscode_cli.tar.gz

tar -xf vscode_cli.tar.gz
```

## 启动 tunnel

```sh
./code tunnel --accept-server-license-terms --random-name --cli-data-dir ./vsc-t
```

## 启动 serve

```sh
code-cli serve-web --accept-server-license-terms --host 127.0.0.1 --port 8000 --cli-data-dir ./vsc-s --server-data-dir ./data1 --without-connection-token

rm -rf ../vsc
mv ../vsc-s/serve-web/xxxx ../vsc
```

## 获取新版 serve-web, 并测试启动

1. 测试直接启动
```sh
../vsc/bin/code-server --accept-server-license-terms --host 127.0.0.1 --port 8000 --server-data-dir ./data2 --without-connection-token
```
2. 修正node关联，系统基础node
```sh
cd ..
./fix-vsc.sh
cd dist
```
3. 再次测试直接自动
```sh
../vsc/bin/code-server --accept-server-license-terms --host 127.0.0.1 --port 8000 --server-data-dir ./data2 --without-connection-token
```


## 提交vsc中的所有问题，进行保存 code-server版本相关内容

提交所有文件，包括 node_modules等相关内容，是所有问题

