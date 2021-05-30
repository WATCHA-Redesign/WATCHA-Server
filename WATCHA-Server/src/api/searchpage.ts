import express, {Request, Response} from "express";
import SearchPopular from "../models/SearchPopular";
import SearchHigh from "../models/SearchHigh";
import SearchCollection from "../models/SearchCollection";
import SearchMate from "../models/SearchMate";

const router=express.Router();

router.post("/high",
    async(req: Request,res: Response) => {
        const { image, name } = req.body;

        try {
            let collection = new SearchPopular({ image, name });
            await collection.save();
            res.json(collection);
            res.status(200).json({"success":true, "msg" : "post 성공."});
        } catch (err) {
            console.log(err.message);
            res.status(500).json({
                errors: [{msg: "Server Error"}]
            });
        }
});
//Search화면 인기검색 콘텐츠
router.get("/popular",async(req,res) => {
    try {
        const popular = await SearchPopular.find();
        const searchPopular = popular.map(s => {
            return{
                image: s.image,
                name: s.name
            }
        });
        return res.status(200).json({
            "success" : true,
            "message" : "검색뷰 인기 검색 콘텐츠 조회 성공",
            "data" : { searchPopular }
        });
    } catch(error) {
        console.error(error.message);
        res.status(500).json({
            errors: [{msg: "Server Error"}]
        });
    }
});

//Search화면 높은평점의 추천 콘텐츠
router.get("/high",async(req,res) => {
    try {
        const high = await SearchHigh.find();
        const searchHigh = high.map(u => {
            return{
                image: u.image,
                title: u.title,
                subtitle: u.subtitle
            }
        });
        return res.status(200).json({
            "success" : true,
            "message" : "검색뷰 높은 평점 추천 콘텐츠 조회 성공",
            "data" : { searchHigh }
        });
    } catch(error) {
        console.error(error.message);
        res.status(500).json({
            errors: [{msg: "Server Error"}]
        });
    }
});

//Search화면 왓챠 크루들의 컬렉션
router.get("/collection",async(req,res) => {
    try {
        const collection = await SearchCollection.find();
        const searchCollection = collection.map(m => {
            return{
                title: m.title,
                nickname:m.nickname
            }
        });
        return res.status(200).json({
            "success" : true,
            "message" : "컬렉션 조회 성공",
            "data" : { searchCollection }
        });
    } catch(error) {
        console.error(error.message);
        res.status(500).json({
            errors: [{msg: "Server Error"}]
        });
    }
});

//Search화면 당신의 영화 메이트
router.get("/mate",async(req,res) => {
    try {
        const mate = await SearchMate.find();
        const searchMate = mate.map(y => {
            return{
                name: y.name,
                role:y.role
            }
        });
        return res.status(200).json({
            "success" : true,
            "message" : "영화 메이트 조회 성공",
            "data" : { searchMate }
        });
    } catch(error) {
        console.error(error.message);
        res.status(500).json({
            errors: [{msg: "Server Error"}]
        });
    }
});

module.exports = router;
