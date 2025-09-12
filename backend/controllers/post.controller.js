import postModel from "../models/post.model.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await postModel.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: "Error fetching posts", error: err });
  }
};

export const getPost = async (req, res) => {
  try {
    const post = await postModel.findOne({slug:req.params.slug});
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: "Error fetching posts", error: err });
  }
};

export const createPost = async (req, res) => {
    const newPost = new Post(req.body)
  try {
    const post = await newPost.save();
    res.status(200).json('posted');
  } catch (err) {
    res.status(500).json({ message: "Error fetching posts", error: err });
  }
};

export const deletePost = async (req, res) => {
  try {
    const post = await postModel.findByIdAndDelete(req.params.id);
    res.status(200).json('post has been deleted');
  } catch (err) {
    res.status(500).json({ message: "Error fetching posts", error: err });
  }
};

