const pointProvider = require("../Point/pointProvider");
const pointService = require("../../app/Point/pointService");
const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");
/**
 * API No. 1
 * API Name : 포인트 이미지 파일 업로드
 * [POST] /app/points/fileUpload
 * path variable : pointId
 * body : file
 */
exports.postImage = async function (req, res) {

    const { pointId } = req.params;
    const filePath = req.file.location;

    // 빈 값 체크
    if (!pointId)
        return res.send(response(baseResponse.POINT_POINTID_EMPTY));

    if (!filePath)
        return res.send(response(baseResponse.POINT_FILE_EMPTY));

    const fileUploadResponse = await pointService.createImage(
        pointId, filePath
    );

    return res.send(fileUploadResponse);
};



/**
 * API No. 16
 * API Name : 포인트 등록
 * [POST] /app/points
 * path variable : pointId
 * body : file
 */
exports.postPoints = async function (req, res) {
    /**
     * Body : user_id, title, content, type, location, creature, date
     */
    const {userId, title, content, type, location, creature, date} = req.body;

    //빈 값 체크
    if (!title)
        return res.send(response(baseResponse.POINT_TITLE_EMPTY));
    
    if(!content)
        return res.send(response(baseResponse.POINT_CONTENT_EMPTY));
    if (!type)
        return res.send(response(baseResponse.POINT_TYPE_EMPTY));
    if(!location)
        return res.send(response(baseResponse.POINT_LOCATION_EMPTY));
    if (!creature)
        return res.send(response(baseResponse.POINT_CREATURE_EMPTY));
    if (!date)
        return res.send(response(baseResponse.POINT_DATE_EMPTY));
    const postResponse = await pointService.createPoint(
        title, content, type, location, creature, date

    );
    return res.send(postResponse);
}