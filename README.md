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


# outline 本專案將逐步完成下列項目
- Cluster created in MongoDB Atlas cloud database 建立MongoDB Atlas雲端資料庫叢集。（步驟略）
- Schema and model created for User 建立User結構與模型。
- Database connected to Application 應用程式連結資料庫。
- Express Application created 建立 Express 物件。
- Application API Endpoints defined 定義應用程式API進入端點。
- Schema and Model created for User 以API建立User結構與模型。
- Controller functions for User Authentication created 建立使用者驗證功能。
- JWT Token signed 使用JWT。
- API Endpoint and Routes for Login and Register defined 設定須完成身份驗證後方可執行API。
- User Authentication Controller applied on Application endpoints 完成身份驗證後方可執行應用程式API。
- JWT Token Verified JWT功能驗證完成。


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

### 安裝 MongoDB、Express、JSON文件解析 套件
```
npm install mongoose express body-parser
```

### 建立專案檔案結構
```
mkdir -p api/{controllers,models,routes}
touch api/controllers/userController.js api/models/userModel.js api/routes/mainRoutes.js
mkdir config
touch config/db.js
npm init
npm install mongoose express body-parser

```
> Express 是一個簡潔而靈活的 node.js Web應用框架, 提供了一系列強大特性幫助你創建各種 Web 應用，和豐富的 HTTP 工具。使用 Express 可以快速地搭建一個完整功能的網站。

> Express 框架核心特性：

> - 可以設置中間件來響應 HTTP 請求。

> - 定義了路由表用於執行不同的 HTTP 請求動作。

> - 可以通過向模板傳遞參數來動態渲染 HTML 頁面。


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




