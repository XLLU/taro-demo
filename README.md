## Scripts Note

> npm install @tarojs/cli --global

> taro init taro-demo

> npm run dev:weapp

> {
   "compilerOptions": {
        "experimentalDecorators": true
    }
}

> npm install taro-ui --save

> margin-top: $spacing-v-md

> taro-ui --> default variables could be override

> npm install json-server --save-dev

> package.json -> "scripts": {"dev:server":"json-server --watch src/assets/db.json --port 3333"}

> npm run dev:server

## 映射本地服务到互联网
- 域名映射
- nginx配置 
``` cmd
    > systemctl start nginx
    > systemctl enable nginx
    > nginx -s reload
    > cd /etc/nginx/conf.d
    > vi sandbox.kindlekeys.cn
```
```json
upstream tunnel {
    server 127.0.0.1:7689;
}
server {
    listen 80;
    server_name sandbox.kindlekeys.cn;
    location / {
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_redirect off;
        proxy_pass http://tunnel;
}
```

- 开启ssh通道 (最终nginx报502没有成功 ==> 换成8080端口后成功)
```cmd
    > ssh -vnfNT -R 8080:localhost:3333 root@kk
    > netstat -lnp|grep 8080
    > kill -9 'pid'
```

- 参考链接
> [Ninghao Ningx + SSH Tunnel](https://ninghao.net/blog/4452)

> [Anand Sudhanaboina](https://anands.github.io/blog/2015/11/03/using-reverse-ssh-tunneling-to-expose-services-on-private-networks-to-public-internet/)