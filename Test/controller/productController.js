exports.getProducts = async (req,res) => {
    try{
        res.status(200).json({
            message : 'Started to get Products',
        });
    } catch(err){
        res.status(404).json({
            status : 'fail',
            message : err,
        });
    }
};