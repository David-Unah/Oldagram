const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "public/images/vincent-van-gogh.png",
        post: "public/images/post-image.png",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "public/images/gustavecourbet.png",
        post: "public/images/secondpost.png",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "public/images/joseph-ducreux.png",
        post: "public/images/thirdpost.png",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let mainPostBody = document.getElementById("main")

for (let i = 0; i < posts.length; i++) {
    mainPostBody.innerHTML += `
                            <div class="each--posts">
                <div class="profile-details">
                    <img src=${posts[i].avatar} alt="vincent-van" class="poster-image">
                    <div>
                        <p class="poster-name">${posts[i].name}</p>
                        <p class="poster-location">${posts[i].location}</p>
                    </div>
                </div>
                <img src=${posts[i].post} alt="post-image" class="mainPostImages>
                <div class="mainInteraction">
                    <div class="interaction--box">
                        <img src="public/images/heart.png" alt="love icon" class="interaction-icons">
                        <img src="public/images/chat (1).png" alt="comment icon" class="interaction-icons">
                        <img src="public/images/send.png" alt="send icon" class="interaction-icons">
                    </div>
                    <p class="likes-p" onclick= incrementLikes()>${posts[i].likes} likes</p>
                    <p class="comment-p"><span>${posts[i].username}</span> ${posts[i].comment}</p>
                </div>
            </div>
    `
}

function incrementLikes() {
    console.log('like was incremented')
}