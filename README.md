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


## outline 本專案將逐步完成下列項目
- Cluster created in MongoDB Atlas cloud database 建立MongoDB Atlas雲端資料庫叢集。（步驟略）
- Database connected to Application 應用程式連結資料庫。（config/db.js） 
- Schema and model created for User 建立User結構與模型。（api/model/userModel.js）
- Express Application created 建立 Express 物件。（server.js）
- Application API Endpoints defined 定義應用程式API進入端點。（api/controller/userController.js、api/routes/mainRoutes.js）
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
$ npm install mongoose express body-parser
```

### 建立專案檔案結構
```
$ mkdir -p api/{controllers,models,routes}
$ touch api/controllers/userController.js api/models/userModel.js api/routes/mainRoutes.js
$ mkdir config
$ touch config/db.js
$ npm init
$ npm install mongoose express body-parser

```
> Express 是一個簡潔而靈活的 node.js Web應用框架, 提供了一系列強大特性幫助你創建各種 Web 應用，和豐富的 HTTP 工具。使用 Express 可以快速地搭建一個完整功能的網站。
> Express 框架核心特性：
> - 可以設置中間件來響應 HTTP 請求。
> - 定義了路由表用於執行不同的 HTTP 請求動作。
> - 可以通過向模板傳遞參數來動態渲染 HTML 頁面。

### 執行應用程式
```
$ node server.js
```


# JWT
JWT由以點（.）分隔的字符串形式的三個組件組成。這些組件如下：
- Header（標頭）
- Payload（有效負載）
- Signature（簽名）

**1. Header（標頭）** 一個由Base64編碼的物件，包含兩個屬性：類型聲明和雜湊演算法。
A Base64 encoded object that consists of two properties: type declaration and the hashing algorithm. The object declaration is seen in the following snippet:

```
{
    "typ": "JWT”, // will always be JWT
    "alg": "HS256” // any preferred hashing algorithm (HMAC SHA256 is preferred in this case)
}
```
The result for the above object after encoding - eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9

**2. Payload（有效負載）** JWT物件，視為聲明或宣告，其中保留了有關令牌(Token)的訊息以及要發送的訊息。該物件同時也可包含其他聲明項目。
A JWT object and is known as a claim, where information about the token with information to be transmitted is held. The object also gives room for multiple claims, and this includes the either of the following:
```
iss: issuer of the token, 
sub: subject of the token, 
aud: information about the audience of the token, 
exp: expiration (after the current date/time) in NumericDate value and many more.
```
_Public claim names._ 公開聲明名稱。還有用戶創建或定義的聲明，例如用戶名，信息等。

_Private claim names._ 私人聲明名稱：這些聲明是根據消費者與生產者之間的協議定義的。私人聲明名稱會發生名稱衝突（名稱衝突），因此建議謹慎使用它們。

下列為一個Payload（有效負載）案例，該負載具有兩個註冊的聲明（iss和exp）和兩個公共聲明（作者和公司）。結果片段如下所示：
```
{
    "iss": "buddy works blog",
    "exp": 2000000,
    "author": "Paul Oluyege",
    "company": "Buddy Works"
}
```
經過base64編碼後，上述物件將構成JWT令牌（Token）的第二部分。得出的結果如下所示：
eyJpc3MiOiJidWRkeSB3b3JrcyBibG9nIiwiZXhwIjoyMDAwMDAwLCJhdXRob3IiOiJQYXVsIE9sdXllZ2UiLCJjb21wYW55IjoiQnVkZHkgV29ya3MifQ

**3. Signature（簽名）** 由標頭（Header）的雜湊碼，有效負載（Payload）和私鑰組成，格式如下：。
```
Signature = HMACSHA256((base64UrlEncode(header) + "." + base64UrlEncode(payload)), ‘secret’);
```

JWT 編碼後的令牌（token）如下：
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJidWRkeSB3b3JrcyBibG9nIiwiZXhwIjoyMDAwMDAwLCJhdXRob3IiOiJQYXVsIE9sdXllZ2UiLCJjb21wYW55IjoiQnVkZHkgV29ya3MifQ.RDDSEubrucmTzyMQ4ofOMD7BSgm7tvItP5sf2-GaIuA
```




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




