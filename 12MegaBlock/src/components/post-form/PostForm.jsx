import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {

    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.slug || post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    // 🔥 SLUG GENERATOR
    const slugTransform = useCallback((value) => {
        if (!value) return "";

        return value
            .trim()
            .toLowerCase()
            .replace(/[^a-zA-Z0-9\s]/g, "-")
            .replace(/\s+/g, "-");
    }, []);

    // 🔥 AUTO SLUG UPDATE
    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title || ""), {
                    shouldValidate: true,
                });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, setValue, slugTransform]);

    // 🔥 SUBMIT FUNCTION (FIXED)
    const submit = async (data) => {
        try {
            if (!userData?.$id) {
                console.log("User not logged in");
                return;
            }

            const file = data.image?.[0];

            let uploadedFile = null;

            // upload only if new file selected
            if (file) {
                uploadedFile = await appwriteService.uploadFile(file);

                if (!uploadedFile) {
                    console.log("Upload failed");
                    return;
                }
            }

            // ✅ SAFE FEATURED IMAGE (NO DUPLICATE VARIABLE)
            const featuredimage = uploadedFile
                ? uploadedFile.$id
                : post?.featuredimage;

            // ❌ BLOCK EMPTY VALUE
            if (!featuredimage) {
                console.log("Featured image is required");
                return;
            }

            const dbPost = await appwriteService.createPost({
                title: data.title,
                slug: data.slug,
                content: data.content,
                status: data.status,
                featuredimage: featuredimage,
                userId: userData.$id,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }

        } catch (error) {
            console.log("Submit error:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">

            {/* LEFT SIDE */}
            <div className="w-2/3 px-2">

                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />

                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) =>
                        setValue(
                            "slug",
                            slugTransform(e.currentTarget.value),
                            { shouldValidate: true }
                        )
                    }
                />

                <RTE
                    label="Content :"
                    name="content"
                    control={control}
                    defaultValue={getValues("content")}
                />

            </div>

            {/* RIGHT SIDE */}
            <div className="w-1/3 px-2">

                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />

                {/* PREVIEW */}
                {post?.featuredimage && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredimage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}

                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />

                <Button
                    type="submit"
                    bgColor={post ? "bg-green-500" : undefined}
                    className="w-full"
                >
                    {post ? "Update" : "Submit"}
                </Button>

            </div>

        </form>
    );
}