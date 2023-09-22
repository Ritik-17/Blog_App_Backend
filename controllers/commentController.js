//importing models
const Comment = require('../models/commentModel');
const Post = require('../models/postModel');

// Logic
exports.createComment = async(req, res) => {
    try{
        // fetching data from req body
        const {post, user, body} = req.body;
        // creating a comment object
        const comment = new Comment({
            post, user, body
        });

        // save the new comment into database
        const savedComment = await comment.save();

        // Now, I want to make changes in post collection since our post also has a comment section and we need to add comment id there.
        // Find the post by Id, add the new comment to its comment array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push : {comments: savedComment._id}}, {new:true})
                            .populate("comments") //it will allow us to populate whole comment documents
                            .exec();
        res.json({
            post:updatedPost,
        });
    }
    catch(error){
        return res.status(500).json({
            error: error,
            
        });
    }
}
