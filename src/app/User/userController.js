const jwtMiddleware = require("../../../config/jwtMiddleware");
const userProvider = require("../../app/User/userProvider");
const userService = require("../../app/User/userService");
const baseResponse = require("../../../config/baseResponseStatus");
const { response, errResponse } = require("../../../config/response");

const regexEmail = require("regex-email");
const { emit } = require("nodemon");
const pointProvider = require("../Point/pointProvider");

/**
 * API No.
 * API Name : 모든 사용자 조회 & 닉네임 중복 여부 확인
 * [GET] /users + (/?nickname="?")
 */
exports.getUserProfile = async function (req, res) {
  const nickname = req.query.nickname;

  if (!nickname) {
    // 모든 사용자 조회
    const userList = await userProvider.retrieveUserList();
    return res.send(response(baseResponse.USER_PROFILES_SUCEESS, userList));
  } else {
    // 닉네임 중복 여부 확인
    const userList = await userProvider.retrieveUserList(nickname);
    if (userList.length > 0) {
      return res.send(errResponse(baseResponse.USER_NICKNAME_EXIST));
    }
    return res.send(response(baseResponse.USER_NICKNAME_SUCCESS));
  }
};

/**
 * API No.
 * API Name : 사용자 프로필 조회
 * [GET] /users/:userId
 */
exports.getUserProfileById = async function (req, res) {
  const userId = req.params.userId;

  const user = await userProvider.retrieveUser(userId);

  console.log("user", user);

  // 찾고자 하는 유저가 없을 경우
  if (user.length === 0) {
    return res.send(errResponse(baseResponse.USER_NOT_EXIST));
  }

  return res.send(response(baseResponse.USER_PROFILE_SUCCESS, user[0]));
};

/**
 * API No.
 * API Name : 사용자 프로필 수정
 * [PUT] /users/:userId
 */
exports.editUserProfile = async function (req, res) {
  const userId = req.params.userId; // 유저 아이디
  const { nickname } = req.body; // 닉네임
  const filePath = req.file.location; // 파일 경로

  // 유효하지 않은 userId라면 에러 처리
  const userRows = await userProvider.retrieveUser(userId);
  if (userRows.length === 0) {
    return res.send(errResponse(baseResponse.USER_USERID_NOT_EXIST));
  }

  // nickname이 없는 경우
  if (!nickname) {
    return res.send(baseResponse.SIGNUP_NICKNAME_EMPTY);
  }

  // 유효하지 않은 파일 경로일 경우
  if (!filePath) {
    return res.send(baseResponse.FILE_INVALID_PATH);
  }

  const editedUser = await userService.editUserProfile(
    userId,
    nickname,
    filePath
  );

  console.log("editedUser", editedUser);

  // 수정이 되지 않았을 경우
  if (editedUser.affectedRows === 0) {
    return res.send(errResponse(baseResponse.USER_NOT_EXIST));
  }

  return res.send(
    response(baseResponse.USER_PROFILE_UPDATE_SUCCESS, editedUser)
  );
};

/**
 * API No.
 * API Name : 회원가입 시 사용자 프로필 생성
 * [POST] /users
 */
exports.createUserProfile = async function (req, res) {
  const { nickname } = req.body;
  const filePath = req.file.location;

  // nickname이 없는 경우
  if (!nickname) {
    return res.send(errResponse(baseResponse.SIGNUP_NICKNAME_EMPTY));
  }

  // 유효하지 않은 파일 경로일 경우
  if (!filePath) {
    return res.send(errResponse(baseResponse.FILE_INVALID_PATH));
  }

  const createdUser = await userService.createUserProfile(nickname, filePath);

  // 회원가입이 완료되지 않았을 경우
  if (createdUser.affectedRows === 0) {
    return res.send(errResponse(baseResponse.USER_NOT_EXIST));
  }

  return res.send(response(baseResponse.SINGUP_SUCCESS, createdUser));
};

/**
 * API No. ?
 * API Name : 회원 탈퇴
 * [DELETE] /user
 */
exports.deleteUserProfile = async function (req, res) {
  const { userId } = req.body;

  // 유효하지 않은 userId라면 에러 처리
  const userRows = await userProvider.retrieveUser(userId);
  if (userRows.length === 0) {
    return res.send(errResponse(baseResponse.USER_USERID_NOT_EXIST));
  }

  const deletedUser = await userService.dltUserProfile(userId);

  // 회원탈퇴가 완료되지 않은 경우
  if (deletedUser.affectedRows === 0) {
    return res.send(errResponse(baseResponse.USER_NOT_EXIST));
  }

  return res.send(response(baseResponse.USER_DELETE_SUCCESS, deletedUser));
};

/**
 * API No.
 * API Name : 사용자가 좋아요한 포인트 조회
 * [GET] /users/:userId/likes
 */
exports.getUserLike = async function (req, res) {
  const userId = req.params.userId;

  // 유효하지 않은 userId라면 에러 처리
  const userRows = await userProvider.retrieveUser(userId);
  if (userRows.length === 0) {
    return res.send(errResponse(baseResponse.USER_USERID_NOT_EXIST));
  }

  const userLikeList = await userProvider.retrieveUserLikeList(userId);

  if (userLikeList.length === 0) {
    return res.send(errResponse(baseResponse.USER_POINT_LIKE_NOT_EXIST));
  }

  return res.send(response(baseResponse.SUCCESS, userLikeList));
};

/**
 * API No. 11
 * API Name : 특정 포인트에 좋아요 표시
 * [POST] /app/users/likes/:userId/:pointId
 * path variable : userId, pointId
 */
exports.postUserLike = async function (req, res) {
  const { userId, pointId } = req.params;
  console.log("userId", userId);
  console.log("pointId", pointId);

  // userId가 없는 경우
  if (userId === ":userId")
    return res.send(errResponse(baseResponse.USER_USERID_EMPTY));

  // pointId가 없는 경우
  if (pointId === ":pointId")
    return res.send(errResponse(baseResponse.POINT_POINTID_EMPTY));

  const pointLikeResponse = await userService.userPointLike(userId, pointId);

  return res.send(pointLikeResponse);
};

/**
 * API No. 12
 * API Name : 특정 포인트에 좋아요 취소
 * [DELETE] /app/users/likes/:userId/:pointId
 * path variable : userId, pointId
 */
exports.deleteUserLike = async function (req, res) {
  const { userId, pointId } = req.params;

  // userId가 없는 경우
  if (userId === ":userId")
    return res.send(errResponse(baseResponse.USER_USERID_EMPTY));

  // pointId가 없는 경우
  if (pointId === ":pointId")
    return res.send(errResponse(baseResponse.POINT_POINTID_EMPTY));

  const pointLikeCancelResponse = await userService.userPointLikeCancel(
    userId,
    pointId
  );

  return res.send(pointLikeCancelResponse);
};

/**
 * API No. 13
 * API Name : 유저 프로필 이미지 등록 및 수정 API
 * [POST] /app/users/:userId/image
 * path variable : userId
 */
exports.updateImage = async function (req, res) {
  const { userId } = req.params;
  const filePath = req.file.location;

  // userId가 없는 경우
  if (userId === ":userId")
    return res.send(errResponse(baseResponse.USER_USERID_EMPTY));

  // 유효하지 않은 파일 경로일 경우
  if (!filePath) {
    return res.send(baseResponse.FILE_INVALID_PATH);
  }

  const userImageUpdateResponse = await userService.userImageUpdate(
    userId,
    filePath
  );

  return res.send(userImageUpdateResponse);
};
/**
 * API No. 19
 * API Name : 유저가 올린 포인트 조회
 * [GET] /app/points/:userId
 */
exports.getPointByUserId = async function (req, res) {
  /**
   * path variable: userId
   */

  const { userId } = req.params;

  if (!userId || userId === ":userId") {
    return res.send(errResponse(baseResponse.USER_USERID_EMPTY));
  } else {
    const pointResultByUserId = await userProvider.retrievePointByUserId(
      userId
    );

    if (pointResultByUserId.length === 0) {
      return res.send(errResponse(baseResponse.USER_NOT_EXIST));
    }

    return res.send(response(baseResponse.SUCCESS, pointResultByUserId));
  }
};

/** JWT 토큰 검증 API
 * [GET] /app/auto-login
 */
exports.check = async function (req, res) {
  const userIdResult = req.verifiedToken.userId;
  console.log(userIdResult);
  return res.send(response(baseResponse.TOKEN_VERIFICATION_SUCCESS));
};
