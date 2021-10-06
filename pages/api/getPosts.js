import getAllPosts from "../../scripts/blog/getAllPostsByCategory"

export default function handler(request,response) {
    const allPosts = getAllPosts()[0]
    const send = { name: allPosts }
    response.status(200).json(send)
}