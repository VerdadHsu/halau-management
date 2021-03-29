# Halau Management
本專案中我們將從頭開始構建安全的Restful API，然後完成為會員列表應用程序構建安全的RESTful API所需的所有步驟，並可創建、檢索、更新及刪除列表。

## node version 使用版本
node version v14.15.3

nodejs version v8.10.0


> load module
> 
> module = require(‘module_name’);

> module.exports
> 
> 將javascript裡任何型別的宣告，變成一個模組，供其他的應用程式或模組使用。


# outline
- Cluster created in MongoDB Atlas cloud database.
- Schema and model created for Todo
- Database connected to Application
- Express Application created
- Application API Endpoints defined
- Schema and Model created for User
- Controller functions for User Authentication created
- JWT Token signed
- API Endpoint and Routes for Login and Register defined
- User Authentication Controller applied on To-do Application endpoints
- JWT Token Verified


## make nodejs project
### 建立專案
使用 npm init 指令，為您的應用程式建立 package.json 檔。
```
$ mkdir halau-management
$ cd halau-management
$ npm init

entry point: (index.js)
```
### 安裝 Express 套件
將 Express 安裝在 halau-management 目錄下，並儲存在相依關係清單中。
```
$ npm install express --save
```

> 安裝 Node 模組時，如果指定了 --save 選項，則會將這些模組新增至 package.json 檔中的 dependencies 清單。之後，當您在 app 目錄中執行 npm install 時，就會自動安裝相依關係清單中的模組。

### 安裝 MongoDB 套件
```
npm install mongodb
```

Create a free MongoDB Atlas cluster and load the sample data

```
npm install mongoose express body-parser
```


```
mkdir -p api/{controllers,models,routes}
touch api/controllers/memberController.js api/models/memberModel.js api/routes/memberRoutes.js
mkdir config
touch config/db.js
npm init
npm install mongoose express body-parser

```


# JWT
A JWT is made up of three components in the form of strings separated by a dot (.). These components are as follows:

* Header
* Payload
* Signature

**Header** – A Base64 encoded object that consists of two properties: type declaration and the hashing algorithm. The object declaration is seen in the following snippet:

```
{
    "typ": "JWT”, // will always be JWT
    "alg": "HS256” // any preferred hashing algorithm (HMAC SHA256 is preferred in this case)
}
```
The result for the above object after encoding - eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9






```
npm install jsonwebtoken
npm install bcryptjs

```

# Unit Testing
```
npm install chai
npm install mocha
npm install chai-http
```




