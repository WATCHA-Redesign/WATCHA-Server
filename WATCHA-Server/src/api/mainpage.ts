import express, {Request, Response} from "express";
import MainBanner from "../models/MainBanner";
import MainPedia from "../models/MainPedia";
import MainPlaying from "../models/MainWatching";
import MainRecommend from "../models/MainRecommend";

const router=express.Router();


// 이렇게 형식 맞춰서 post해주어야 mongoDB에 컬렉션 생성됨
router.post("/watching",
    async(req: Request,res: Response) => {
        const { image, title, progress } = req.body;

        try {
            let watching = new MainPlaying({ image, title, progress });
            await watching.save();
            res.json(watching);
            res.status(200).json({"success":true, "msg" : "post 성공."});
        } catch (err) {
            console.log(err.message);
            res.status(500).json({
                errors: [{msg: "Server Error"}]
            });
        }
});

// 메인 뷰 배너 조회
router.get("/banner",async(req,res) => {
    try {
        const banner = await MainBanner.find();
        const mainBanner = banner.map(i => {
            return{
                image: i.image,
                largeTitle: i.largeTitle,
                description: i.description
            }
        });
        return res.status(200).json({
            "success" : true,
            "message" : "메인뷰 배너 정보 조회 성공",
            "data" : { mainBanner }
        });
    } catch(error) {
        console.error(error.message);
        res.status(500).json({
            errors: [{msg: "Server Error"}]
        });
    }
});

// 메인 뷰 왓챠피디아 조회
router.get("/pedia",async(req,res) => {
    try {
        const pedia = await MainPedia.find();
        const mainPedia= pedia.map(p => {
            return{
                image: p.image,
                title: p.title,
                titleDetail: p.titleDetail,
                watchingNum: p.watchingNum,
                nickname: p.nickname
            }
        });
        return res.status(200).json({
            "success" : true,
            "message" : "메인뷰 왓챠피디아 조회 성공",
            "data" : { mainPedia }
        });
    } catch(error) {
        console.error(error.message);
        res.status(500).json({
            errors: [{msg: "Server Error"}]
        });
    }
});

// 메인 뷰 시청중인 목록 조회
router.get("/watching",async(req,res) => {
    try {
        const watching = await MainPlaying.find();
        const mainWatching = watching.map(w => {
            return { 
                image: w.image,
                title: w.title,
                progress: w.progress
            }
        });
        return res.status(200).json({
            "success" : true,
            "message" : "메인뷰 시청중 목록 조회 성공",
            "data" : { mainWatching }
        });
    } catch(error) {
        console.error(error.message);
        res.status(500).json({
            errors: [{msg: "Server Error"}]
        });
    }
});

// 메인 뷰 추천 목록 조회
router.get("/recommend",async(req,res)=>{
    try{
        const recommend = await MainRecommend.find();
        const mainRecommend = recommend.map(r => {
            return {
                image: r.image,
                title: r.title
            }
        });
        return res.status(200).json({
            "success" : true,
            "message" : "메인뷰 추천 목록 조회 성공",
            "data" : { mainRecommend }
        });
    }catch(error){
        console.error(error.message);
        res.status(500).json({
            errors: [{msg: "Server Error"}]
        });
    }
});

module.exports = router;