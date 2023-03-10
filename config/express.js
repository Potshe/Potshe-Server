module.exports = function () {
  const express = require("express");
  const compression = require("compression");
  const methodOverride = require("method-override");
  const morgan = require("morgan");
  const passport = require("passport");
  const cookieParser = require("cookie-parser");
  const session = require("express-session");
  const path = require("path");
  const dotenv = require("dotenv");
  const nunjucks = require("nunjucks");
  var cors = require("cors");

  dotenv.config();

  const app = express();
  app.set("views", path.join(__dirname, "..", "/views"));
  app.set("view engine", "html");
  nunjucks.configure("views", {
    express: app,
    watch: true,
  });

  app.use(morgan("dev"));
  app.use(compression());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(methodOverride());
  app.use(cookieParser("cookie"));
  app.use(
    session({
      resave: false,
      saveUninitialized: false,
      secret: "cookie",
      cookie: { httpOnly: true, secure: false },
    })
  );
  app.use(passport.initialize()); // req.user, req.login, req.isAuthenticated, req.logout 생성
  app.use(passport.session());

  app.use(cors());

  /* App (Android, iOS) */
  // TODO: 도메인을 추가할 경우 이곳에 Route를 추가하세요.

  // Back-End Routes
  require("../src/app/User/userRoute")(app);
  require("../src/app/Point/pointRoute")(app);
  // require('../src/app/Board/boardRoute')(app);

  return app;
};
