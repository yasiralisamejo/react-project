import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor =
        post?.userId &&
        userData?.$id &&
        post.userId === userData.$id;

    useEffect(() => {
        if (!slug) {
            navigate("/");
            return;
        }

        appwriteService.getPost(slug).then((res) => {
            if (res) {
                setPost(res);
            } else {
                navigate("/");
            }
        });
    }, [slug, navigate]);

    const deletePost = async () => {
        try {
            if (!post) return;

            await appwriteService.deletePost(post.$id);

            // safe file delete
            if (post?.featuredimage) {
                await appwriteService.deleteFile(post.featuredimage);
            }

            navigate("/");
        } catch (error) {
            console.log("Delete error:", error);
            navigate("/");
        }
    };

    return post ? (
        <div className="py-8">
            <Container>

                {/* IMAGE */}
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">

                    {post?.featuredimage ? (
                        <img
                            src={appwriteService.getFilePreview(post.featuredimage)}
                            alt={post.title || "image"}
                            className="rounded-xl w-full object-cover"
                        />
                    ) : (
                        <div className="h-60 w-full flex items-center justify-center bg-gray-200 rounded-xl">
                            No Image Available
                        </div>
                    )}

                    {/* EDIT / DELETE */}
                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>

                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>

                {/* TITLE */}
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">
                        {post?.title}
                    </h1>
                </div>

                {/* CONTENT */}
                <div className="browser-css">
                    {post?.content ? parse(post.content) : null}
                </div>

            </Container>
        </div>
    ) : null;
}