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
code-cli serve-web --accept-server-license-terms --host 127.0.0.1 --port 8000 --cli-data-dir ./vsc-s --server-data-dir ./vscode-server
```

## 获取新版 serve-web, 并测试启动

```sh
code-server --host 127.0.0.1 --port 8000 --cli-data-dir ./vsc-s --server-data-dir ./vscode-server
```