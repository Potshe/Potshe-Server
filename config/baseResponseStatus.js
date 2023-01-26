module.exports = {
  // SUCCESS
  SUCCESS: { isSuccess: true, code: 1000, message: "성공" },
  USER_POINT_LIKE_SUCCESS: {
    isSuccess: true,
    code: 11,
    message: "포인트에 좋아요 누르기 성공",
  },
  USER_POINT_LIKE_CANCEL_SUCCESS: {
    isSuccess: true,
    code: 12,
    message: "포인트 좋아요 취소 성공",
  },
  POINT_SUCCESS: {
    isSuccess: true,
    code: 13,
    message: "모든 포인트 조회 성공",
  },
  POINT_SUCCESS_BY_KEYWORD: {
    isSuccess: true,
    code: 14,
    message: "특정 포인트 키워드 기반 검색 성공",
  },
  USER_PROFILE_IMAGE_SUCCESS: {
    isSuccess: true,
    code: 15,
    message: "유저 이미지 수정 완료",
  },
  POINT_EDIT_SUCCESS: {
    isSuccess: true,
    code: 16,
    message: "포인트 수정 성공",
  },
  USER_DELETE_SUCCESS: { isSuccess: true, code: 17, message: "회원 탈퇴 완료" },

  // TOKEN
  TOKEN_EMPTY: {
    isSuccess: false,
    code: 2000,
    message: "JWT 토큰을 입력해주세요.",
  },
  TOKEN_VERIFICATION_FAILURE: {
    isSuccess: false,
    code: 3000,
    message: "JWT 토큰 검증 실패",
  },
  TOKEN_VERIFICATION_SUCCESS: {
    isSuccess: true,
    code: 1001,
    message: "JWT 토큰 검증 성공",
  },

  // Success
  SUCCESS: { isSuccess: true, code: 1000, message: "성공" },
  USER_POINT_LIKE_SUCCESS: {
    isSuccess: true,
    code: 11,
    message: "포인트에 좋아요 누르기 성공",
  },
  USER_POINT_LIKE_CANCEL_SUCCESS: {
    isSuccess: true,
    code: 12,
    message: "포인트 좋아요 취소 성공",
  },
  POINT_SUCCESS: {
    isSuccess: true,
    code: 13,
    message: "모든 포인트 조회 성공",
  },
  POINT_SUCCESS_BY_KEYWORD: {
    isSuccess: true,
    code: 14,
    message: "특정 포인트 키워드 기반 검색 성공",
  },
  USER_PROFILE_IMAGE_SUCCESS: {
    isSuccess: true,
    code: 15,
    message: "유저 이미지 수정 완료",
  },
  POINT_EDIT_SUCCESS: {
    isSuccess: true,
    code: 16,
    message: "포인트 수정 성공",
  },

  // Common
  TOKEN_EMPTY: {
    isSuccess: false,
    code: 2000,
    message: "JWT 토큰을 입력해주세요.",
  },
  TOKEN_VERIFICATION_FAILURE: {
    isSuccess: false,
    code: 3000,
    message: "JWT 토큰 검증 실패",
  },
  TOKEN_VERIFICATION_SUCCESS: {
    isSuccess: true,
    code: 1001,
    message: "JWT 토큰 검증 성공",
  }, // ?

  // Request Error
  SIGNUP_EMAIL_EMPTY: {
    isSuccess: false,
    code: 2001,
    message: "이메일을 입력해주세요",
  },
  SIGNUP_EMAIL_LENGTH: {
    isSuccess: false,
    code: 2002,
    message: "이메일은 30자리 미만으로 입력해주세요.",
  },
  SIGNUP_EMAIL_ERROR_TYPE: {
    isSuccess: false,
    code: 2003,
    message: "이메일을 형식을 정확하게 입력해주세요.",
  },
  SIGNUP_PASSWORD_EMPTY: {
    isSuccess: false,
    code: 2004,
    message: "비밀번호를 입력 해주세요.",
  },
  SIGNUP_PASSWORD_LENGTH: {
    isSuccess: false,
    code: 2005,
    message: "비밀번호는 6~20자리를 입력해주세요.",
  },
  SIGNUP_NICKNAME_EMPTY: {
    isSuccess: false,
    code: 2006,
    message: "닉네임을 입력 해주세요.",
  },
  SIGNUP_NICKNAME_LENGTH: {
    isSuccess: false,
    code: 2007,
    message: "닉네임은 최대 20자리를 입력해주세요.",
  },

  SIGNIN_EMAIL_EMPTY: {
    isSuccess: false,
    code: 2008,
    message: "이메일을 입력해주세요",
  },
  SIGNIN_EMAIL_LENGTH: {
    isSuccess: false,
    code: 2009,
    message: "이메일은 30자리 미만으로 입력해주세요.",
  },
  SIGNIN_EMAIL_ERROR_TYPE: {
    isSuccess: false,
    code: 2010,
    message: "이메일을 형식을 정확하게 입력해주세요.",
  },
  SIGNIN_PASSWORD_EMPTY: {
    isSuccess: false,
    code: 2011,
    message: "비밀번호를 입력 해주세요.",
  },

  USER_USERID_EMPTY: {
    isSuccess: false,
    code: 2012,
    message: "userId를 입력해주세요.",
  },
  USER_USERID_NOT_EXIST: {
    isSuccess: false,
    code: 2013,
    message: "해당 회원이 존재하지 않습니다.",
  },

  USER_USEREMAIL_EMPTY: {
    isSuccess: false,
    code: 2014,
    message: "이메일을 입력해주세요.",
  },
  USER_USEREMAIL_NOT_EXIST: {
    isSuccess: false,
    code: 2015,
    message: "해당 이메일을 가진 회원이 존재하지 않습니다.",
  },
  USER_ID_NOT_MATCH: {
    isSuccess: false,
    code: 2016,
    message: "유저 아이디 값을 확인해주세요",
  },
  USER_NICKNAME_EMPTY: {
    isSuccess: false,
    code: 2017,
    message: "변경할 닉네임 값을 입력해주세요",
  },

  USER_STATUS_EMPTY: {
    isSuccess: false,
    code: 2018,
    message: "회원 상태값을 입력해주세요",
  },

  POINT_POINTID_EMPTY: {
    isSuccess: false,
    code: 2019,
    message: "pointId를 입력해주세요.",
  },
  POINT_FILE_EMPTY: {
    isSuccess: false,
    code: 2020,
    message: "file를 선택해주세요.",
  },
  POINT_POINTID_NOT_EXIST: {
    isSuccess: false,
    code: 2021,
    message: "해당 포인트가 존재하지 않습니다.",
  },

  LIKE_USERID_POINTID_EXIST: {
    isSuccess: false,
    code: 2022,
    message: "해당 유저가 이미 해당 포인트에 좋아요를 눌렀습니다.",
  },
  LIKE_USERID_POINTID_NOT_EXIST: {
    isSuccess: false,
    code: 2023,
    message: "해당 유저가 해당 포인트에 좋아요를 누르지 않았습니다.",
  },
  POINT_TITLE_EMPTY: {
    isSuccess: false,
    code: 2024,
    message: "포인트에 제목을 입력해주세요.",
  },
  POINT_CONTENT_EMPTY: {
    isSuccess: false,
    code: 2025,
    message: "포인트에 자세한 내용(ex. 시간, 장소, 요령 등)을 입력해주세요.",
  },
  POINT_TYPE_EMPTY: {
    isSuccess: false,
    code: 2026,
    message:
      "포인트에 활동(ex.맨손 해루질, 통발, 스킨 해루질 등)을 입력해주세요.",
  },
  POINT_LOCATION_EMPTY: {
    isSuccess: false,
    code: 2027,
    message: "포인트에 위치를 입력해주세요.",
  },
  POINT_CREATURE_EMPTY: {
    isSuccess: false,
    code: 2028,
    message: "포인트에 조과내용을 입력해주세요.",
  },
  POINT_DATE_EMPTY: {
    isSuccess: false,
    code: 2029,
    message: "포인트에 해루질 한 날짜를 입력해주세요.",
  },

  FILE_INVALID_PATH: {
    isSuccess: false,
    code: 2030,
    message: "유효하지 않은 파일 경로 입니다.",
  },

  // Response Error
  SIGNUP_REDUNDANT_EMAIL: {
    isSuccess: false,
    code: 3001,
    message: "중복된 이메일입니다.",
  },
  SIGNUP_REDUNDANT_NICKNAME: {
    isSuccess: false,
    code: 3002,
    message: "중복된 닉네임입니다.",
  },

  SIGNIN_EMAIL_WRONG: {
    isSuccess: false,
    code: 3003,
    message: "아이디가 잘못 되었습니다.",
  },
  SIGNIN_PASSWORD_WRONG: {
    isSuccess: false,
    code: 3004,
    message: "비밀번호가 잘못 되었습니다.",
  },
  SIGNIN_INACTIVE_ACCOUNT: {
    isSuccess: false,
    code: 3005,
    message: "비활성화 된 계정입니다. 고객센터에 문의해주세요.",
  },
  SIGNIN_WITHDRAWAL_ACCOUNT: {
    isSuccess: false,
    code: 3006,
    message: "탈퇴 된 계정입니다. 고객센터에 문의해주세요.",
  },

  USER_NOT_EXIST: {
    isSuccess: false,
    code: 3006,
    message: "존재하지 않는 유저입니다.",
  },

  // Connection, Transaction 등의 서버 오류
  DB_ERROR: { isSuccess: false, code: 4000, message: "데이터 베이스 에러" },
  SERVER_ERROR: { isSuccess: false, code: 4001, message: "서버 에러" },
};
