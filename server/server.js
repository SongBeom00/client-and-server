const express = require("express");
const cors = require("cors");
const app = express();
const bodyparser = require("body-parser");
const cookiepaser = require("cookie-parser");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true })); // URL 인코딩된 데이터 파싱을 위해
app.use(bodyparser.json()); // JSON 데이터 파싱을 위해
app.use(cookiepaser());

//const RouterPath = require('./router') //기본 동작 index.js 파일이 자동으로 로드된다.
const RouterPath = require("./router/index"); // 중앙 라우터 모듈 불러오기 명시적으로 rotuer 들고오기
app.use("/", RouterPath); // 루트 경로에서 모든 라우팅 처리

// RouterPath 모듈을 불러와서 루트 경로(/)에 등록함으로써, 모든 라우팅을 index.js로 위임합니다.

app.get("/", (req, res) => {
  console.log("Welcome to the API");
  res.send("Hello World");
});

const port = process.env.SERVER_PORT; // 클라이언트(리액트) 포트번호와 다르게 한다.
app.listen(port, (req, res) => {
  console.log(`server start http://localhost:${port}`);
});
