const GetInTouch =  require("../model/getInTouch");

const getInTouchController = async (req,res)=>{
    const {name,email,message,phone,website}=req.body;

    if(!name || !email || !phone){
        return res.status(400).json({error:"All fileds are required"});
    }
    try {
        const getInTouch = new GetInTouch({
            name,email,message,phone,website
        });
        await getInTouch.save();
        return res.status(200).json({message:"We will get back to you soon"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:"Server error"});
        
    }
}

module.exports = getInTouchController;