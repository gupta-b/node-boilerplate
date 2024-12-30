const getPosts = async (req, res) => {
    try {
        // const posts = await Post.find();
        const posts = [
            { id: 1, title: "post 1" },
            { id: 2, title: "post 2" },
            { id: 3, title: "post 3" },
        ]
        res.status(200).json({ success: true, data: posts });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
}

const getSinglePost = async (req, res) => {
    try {
        const { id } = req.params
        const post = { id: 1, title: "post 1" }
        res.status(200).json({ success: true, data: post });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
}

const createPost = async (req, res) => {
    try {
        const { title } = req.body
        if (!title) {
            throw new Error("title is required")
        }
        const post = { id: 1, title }
        res.status(200).json({ success: true, data: post });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
}

module.exports = {
    getPosts,
    getSinglePost,
    createPost
}